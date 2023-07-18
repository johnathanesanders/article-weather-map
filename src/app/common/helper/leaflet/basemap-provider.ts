export const basemapProvider = {
    arcGisWorldLightGrayBase: {
        uri: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        options: {
            attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
            maxZoom: 16
        },
        isWms: false
    },
    arcGisWorldShadedRelief: {
        uri: `https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}`,
        options: {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri',
            maxZoom: 13
        },
        isWms: false
    },
    cartoDarkLabelOnly: {
        uri: 'https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png',
        options: {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        },
        isWms: false
    },
    cartoDarkNoLabel: {
        uri: 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
        options: {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        },
        isWms: false
    },
    cartoLightLabelOnly: {
        uri: 'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png',
        options: {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        },
        isWms: false
    },
    cartoLightNoLabel: {
        uri: 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
        options: {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        },
        isWms: false
    },
    cartoPositronLabelOnly: {
        uri: `https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png`,
        options: {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            maxZoom: 20,
            subdomains: 'abcd'
        },
        isWms: false
    },
    cartoPositron: {
        uri: `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png`,
        options: {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
            maxZoom: 20,
            subdomains: 'abcd'
        },
        isWms: false
    },
    openStreetMap: {
        uri: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        options: {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        },
        isWms: false
    },
    stamenTonerHybridLabels: {
        uri: `https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}`,
        options: {
            attribution: `Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,
            ext: 'png',
            maxZoom: 20,
            minZoom: 0,
            subdomains: 'abcd'
        },
        isWms: false
    },
    waymarkedTrailsCycling: {
        uri: `https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png`,
        options: {
            maxZoom: 18,
            attribution: `Map styles: &copy; <a href="https://waymarkedtrails.org">waymarkedtrails.org</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)`
        },
        isWms: false
    }
}