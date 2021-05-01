console.log("logic.js loaded");

// Creating map object
var myMap = L.map("mapid", {
    center: [38.92, -97],
    zoom: 5
  });
  
  // Adding tile layer to the map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  }).addTo(myMap);
  
  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";

  
  
  console.log(url);
  // Grab the data with d3
  d3.json(url).then(function(response) {
  
    console.log(response);
  
    // var heatArray = [];
    // // Create a new marker cluster group
    // var markers = L.markerClusterGroup();

  
    //   // Check for location property
    //   for (var i = 0; i < response.length; i++) {
    //     var location = response[i].location;
    //     var description = response[i].descriptor; //not sure if this is working yet
    //     console.log(description);
    
    //     if (location) {
    //       markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]]))
    //       .bindPopup(response[i].descriptor); //don't want .addTo(myMap) here because want it to be done via markers layer
    //     }
    //   }
    //     // Add a new marker to the cluster group and bind a pop-up
    //     myMap.addLayer(markers);
    // Add our marker cluster layer to the map
  });