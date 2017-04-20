require(["https://openlayers.org/en/v3.20.1/build/ol.js", "dojo/domReady!"],
       function(ol) {
         var layers = [
       new ol.layer.Tile({
         source: new ol.source.OSM()
       }),
       new ol.layer.Tile({
         source: new ol.source.TileWMS({
           url: 'http://geo.hokiepark.com:80/geoserver/Parking/wms',
           params: {'LAYERS': 'Parking:SpaceScrub', 'TILED': true, 'STYLES': 'Parking:RedSpaces'},
           serverType: 'geoserver'
         })
       }),
       new ol.layer.Tile({
         source: new ol.source.TileWMS({
           url: 'http://geo.hokiepark.com:80/geoserver/Parking/wms',
           params: {'LAYERS': 'Parking:SpaceScrub', 'TILED': true, 'STYLES': 'Parking:GreenSpaces', 'CQL_FILTER': "type='F/S'"},
           serverType:'geoserver'
         })
       })
     ];
     var map = new ol.Map({
       layers: layers,
       target: 'map',
       view: new ol.View({
         center: ol.proj.transform([-80.422078, 37.227749], 'EPSG:4326','EPSG:3857'),
         zoom: 15
       })
     });
});
~
