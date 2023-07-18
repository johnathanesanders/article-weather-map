export const dataProvider = {
    nwsRadar: {
        uri: `https://opengeo.ncep.noaa.gov/geoserver/conus/conus_bref_qcd/ows`,
        options: {
            layers: 'conus_bref_qcd',
            format: `image/png`,
            transparent: true,
            opacity: 0.575,
            zIndex: 200
        },
        isWms: true
    },
    nwsWatchesWarnings: {
        uri: `https://opengeo.ncep.noaa.gov:443/geoserver/wwa/warnings/ows?time={time}`,
        options: {
            format: `image/png`,
            layers: 'warnings',
            opacity: 0.575,
            request: 'GetMap',
            transparent: true,
            time: '2023-06-19T10:44:41.000Z,2023-06-19T10:46:24.000Z',
            zIndex: 1001
        }
    }
}