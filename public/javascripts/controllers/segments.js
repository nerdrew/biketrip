App.Controllers.Segments = Backbone.Controller.extend({
  _segments: null,
  initialize: function(){
                this._segments = new App.Collections.Segments();
                this._segments.fetch({
                  success: function(collection, response) {
                             new App.Views.Index({ collection: collection });
                           },
                  error: function() {
                           new Error({ message: "Error loading segments." });
                         }
                });
                return this;
              },
  routes: {
            "segments/:id":   "show",
            "":               "index"
          },

  index: function() {
           new App.Views.Index({ collection: this._segments });
         },

  show: function(cid) {
          new App.Views.Show({ model: this._segments.getByCid(cid) });
        }
});
