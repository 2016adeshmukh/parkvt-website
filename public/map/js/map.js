require(["js/vendor/ol.js", "dojo/domReady!"],
        function(ol) {
          var layers = [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        new ol.layer.Tile({
          extent: [10917802.184872836, 3606569.963093251,
                    10926233.372078672, 3614097.35912765],
          source: new ol.source.TileWMS({
            url: 'http://geo.hokiepark.com:80/geoserver/Parking/wms',
            params: {'LAYERS': 'Parking:SpaceScrub', 'TILED': true},
            serverType: 'geoserver'
          })
        })
      ];
      var map = new ol.Map({
        layers: layers,
        target: 'map',
        view: new ol.View({
          center: [10917802.184872836, 3606569.963093251],
          zoom: 12
        })
      });
});
