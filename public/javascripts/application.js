var App = {
  Views: {},
  Controllers: {},
  Collections: {},
  init: function() {
    new App.Controllers.Segments();
    Backbone.history.start();
  }
};

function initialize(){
  window.BikeTrip = {
    directionsDisplay: new google.maps.DirectionsRenderer(),
    directionsService: new google.maps.DirectionsService(),
    elevationService: new google.maps.ElevationService(),
    map: new google.maps.Map(document.getElementById("map_canvas"), {
      zoom: 4,
    center: new google.maps.LatLng(38.444985, -98.393555),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    })
  };

  BikeTrip.directionsDisplay.setMap(BikeTrip.map);
}

$(initialize);
