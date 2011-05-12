

$(function() {
  window.BikeTrip = {
    directionsDisplay: new google.maps.DirectionsRenderer(),
    directionsService: new google.maps.DirectionsService(),
    elevationService: new google.maps.ElevationService(),
    map: new google.maps.Map(document.getElementById("map_canvas"), {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }),
    currentSegment: null,
    
    updateSegment: function(date){

      var route = {
        origin: this.currentSegment.start,
        destination: this.currentSegment.finish,
        travelMode: google.maps.TravelMode.BICYCLING
      };
      this.directionsService.route(route, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          x = result;
          this.directionsDisplay.setDirections(result);
          this.elevationService.getElevationAlongPath({path: result.routes[0].overview_path, samples:100}, function(elevationResults, status){
            if (status == google.maps.DirectionsStatus.OK) {
              for(var i=0; i<elevationResults.length; i++)
            var marker = new google.maps.Marker({map: map, title: elevationResults[i].elevation.toString(), position: elevationResults[i].location});
            }
          });
        }
      });
    }
  };

  //BikeTrip.directionsDisplay.setMap(BikeTrip.map);
});


