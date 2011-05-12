App.Controllers.Segments = Backbone.Controller.extend({
    routes: {
              "segments/:id":   "edit",
              "":               "index",
              "new":            "newSeg"
            },

    edit: function(id) {
            var segment = new Segment({ id: id });
            segment.fetch({
              success: function(model, resp) {
                         new App.Views.Edit({ model: segment });
                       },
              error: function() {
                       new Error({ message: 'Could not find that segment.' });
                       window.location.hash = '#';
                     }
            });
          },

    index: function() {
             $.getJSON('/segments', function(data) {
               if(data) {
                 var segments = _(data).map(function(i) { return new Segment(i); });
                 new App.Views.Index({ segments: segments });
               } else {
                 new Error({ message: "Error loading segments." });
               }
             });
           },

    newDoc: function() {
              new App.Views.Edit({ model: new Segment() });
            }
});
