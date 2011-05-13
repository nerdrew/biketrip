App.Views.Show = Backbone.View.extend({
  initialize: function() {
                _.bindAll(this, 'render');
                this.model.bind('change', this.render);
                this.render();
              },


  render: function() {
            console.log(this.model);
            BikeTrip.directionsService.route({
              origin: this.model.get('origin'),
              destination: this.model.get('destination')
            }, function(result, status) {
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
            BikeTrip.directionsDisplay.setDirections(this.model.get('directions'));
          }
});
