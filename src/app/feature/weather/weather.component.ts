import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { map, Map as LeafletMap, TileLayer, tileLayer, TileLayerOptions } from 'leaflet';
import { environment } from 'src/environments/environment';
import { asyncForEach } from 'src/app/common/utility';
import { basemapProvider } from 'src/app/common/helper/leaflet/basemap-provider';
import { dataProvider } from 'src/app/common/helper/leaflet/data-provider';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements AfterViewInit {

  @ViewChild('mapElement') mapElement!: ElementRef<HTMLDivElement>;
  public map!: LeafletMap;
  private tileLayers: Map<string,TileLayer> = new Map<string, TileLayer>();


  public ngAfterViewInit(): void {
    this.map = map(this.mapElement.nativeElement);
    this.map.setView([environment.leaflet.defaultCenter[0], environment.leaflet.defaultCenter[1]], 5);  
    this.addLayer('basemap', tileLayer(basemapProvider.cartoLightNoLabel.uri, basemapProvider.cartoLightNoLabel.options));
    this.addLayer('nws', tileLayer.wms(dataProvider.nwsRadar.uri, dataProvider.nwsRadar.options));
    this.addLayer('basemap labels', tileLayer(basemapProvider.cartoLightLabelOnly.uri, basemapProvider.cartoLightLabelOnly.options));
  }

  public async addAllLayers(): Promise<void> {
    try {
      return asyncForEach(Array.from(this.tileLayers.entries()), (entry: [string, TileLayer], index: number) => {
        this.addLayer(entry[0], entry[1]);
      });
    } catch (error) {
      throw(error);
    }
  }

  public addLayer(identifier: string, layer: TileLayer) {
    // Remove the layer if it exists, only because we want the actual layer on the map to go away
    // not just overwrite the entry in tileLayers - since we are doing a layer.addTo(this.map) it would
    // just stack it (indefinitely). TL;DR -> prevent a memory leak!
    if (this.tileLayers.has(identifier)) this.removeLayer(identifier);
    this.tileLayers.set(identifier, layer);
    layer.addTo(this.map);
  }

  public async applyLayers(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        await this.removeAllLayers();
        await this.addAllLayers();
        resolve();
      } catch (error){
        reject(error);
      }
    });
  }

  public clearTileLayers(): void {
    this.tileLayers.clear();
  }

  public async removeAllLayers(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        await asyncForEach(Array.from(this.tileLayers.entries()), (entry: [string,TileLayer], index: number) => {
          this.removeLayer(entry[0]);
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  public removeLayer(identifier: string): void {
    if (this.tileLayers.has(identifier)) {
      // Remove from map
      this.map.removeLayer(this.tileLayers.get(identifier) as TileLayer);

      // Remove from dictionary of tileLayers
      this.tileLayers.delete(identifier);
      
    } else {
      throw new Error(`Cannot remove layer with identifier '${identifier}' because it does not exist in the dictionary`);
    }
  }
}
