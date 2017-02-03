require(["esri/map", "esri/layers/FeatureLayer", "esri/dijit/LocateButton", "dojo/domReady!"],
        function(Map, FeatureLayer, LocateButton) {
          var x, y;
          if (xcoord && ycoord) {
            x = xcoord,
            y = ycoord;
          } else {
            x = -80.422140,
            y = 37.227678;
          }
          // Set up base map; set the center point and zoom level the map should start in (currently have it above the drillfield)
          var map = new Map("mapDiv", {
            center: [x, y],
            zoom: 16,
            basemap: "gray-vector"
          });

          var geoLocate = new LocateButton({
                  map: map
                }, "LocateButton");
                geoLocate.startup();

          // Import feature layers: parking lots, buildings, parking spaces
          var parkingLots = new FeatureLayer("https://arcgis-central.gis.vt.edu/arcgis/rest/services/vtcampusmap/ParkingLots/MapServer/0?f=pjson");
          var buildings = new FeatureLayer("https://arcgis-central.gis.vt.edu/arcgis/rest/services/vtcampusmap/Buildings/MapServer/0?f=pjson");
          var parkingSpaces = new FeatureLayer("https://arcgis-central.gis.vt.edu/arcgis/rest/services/vtcampusmap/ParkingSpaces/MapServer/0?f=pjson");

          // Set minimum scale at which layer is visible in view. If map is zoomed out beyond this scale, layer will not be visible. Set to 0 for no minimum scale.
          parkingSpaces.setMinScale(9027.977411);

          // Add imported feature layers to the base map
          map.addLayers([parkingLots, parkingSpaces, buildings]);

          // ?
          // featureLayer.setDefinitionExpression("TYPE='ADA'")

          var filterSelected = ""

          if (window.localStorage.getItem('passType')) {
            filterSelected = window.localStorage.getItem('passType');
            parkingSpaces.setDefinitionExpression(filterSelected);
          }

          // Dropdown for selecting filters
          $('#filter').delegate('li', 'click', function(){
              var li = this.closest('li'),
              filterSelected = $(li).attr('value');
              window.localStorage.setItem('passType', filterSelected);
              parkingSpaces.setDefinitionExpression(filterSelected);
              parkingLots.setDefinitionExpression("NAME='paved road'")
          });
});
