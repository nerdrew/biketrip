var App = {
  Views: {},
  Controllers: {},
  Collections: {},
  init: function() {
    new App.Controllers.Segments();
    Backbone.history.start();
  }
};


var Segment = Backbone.Model.extend({
  url: function(){
         var base = 'segments';
         if (this.isNew()) return base;
         return base + "/" + this.id;
       }
});


App.Controllers.Segments = Backbone.Controller.extend({
  routes: {
            //"segments/:id":   "edit",
            "":               "index",
            "new":            "newSeg"
          },

  /*edit: function(id) {
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
        },*/

  index: function() {
           var segments = new App.Collections.Segments();
           segments.fetch({
             success: function() {
                        new App.Views.Index({ collection: segments });
                      },
             error: function() {
                      new Error({ message: "Error loading segments." });
                    }
           });
         },


  /*newDoc: function() {
            new App.Views.Edit({ model: new Segment() });
          }*/
});


App.Collections.Segments = Backbone.Collection.extend({
    model: Segment,
    url: '/segments'
});


/*App.Views.Edit = Backbone.View.extend({
  events: {
            "submit form": "save"
          },

  initialize: function() {
                _.bindAll(this, 'render');
                this.model.bind('change', this.render);
                this.render();
              },

  save: function() {
          var self = this;
          var msg = this.model.isNew() ? 'Successfully created!' : "Saved!";

          this.model.save({ title: this.$('[name=title]').val(), body: this.$('[name=body]').val() }, {
            success: function(model, resp) {
                       new App.Views.Notice({ message: msg });
                       Backbone.history.saveLocation('segments/' + model.id);
                     },
            error: function() {
                     new App.Views.Error();
                   }
          });

          return false;
        },

  render: function() {
            $(this.el).html(JST.segment({ model: this.model }));
            $('#app').html(this.el);

            // use val to fill in title, for security reasons
            this.$('[name=title]').val(this.model.get('title'));

            this.delegateEvents();
          }
});*/


App.Views.Index = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    
    render: function() {
        $(this.el).html(JST.segments_collection({ collection: this.collection }));
        $('#app').html(this.el);
    }
});


App.Views.Notice = Backbone.View.extend({
  className: "success",
  displayLength: 5000,
  defaultMessage: '',

  initialize: function() {
    _.bindAll(this, 'render');
    this.message = this.options.message || this.defaultMessage;
    this.render();
  },

  render: function() {
            var view = this;

            $(this.el).html(this.message);
            $(this.el).hide();
            $('#notice').html(this.el);
            $(this.el).slideDown();
            $.doTimeout(this.displayLength, function() {
              $(view.el).slideUp();
              $.doTimeout(2000, function() {
                view.remove();
              });
            });

            return this;
          }
});


App.Views.Error = App.Views.Notice.extend({
    className: "error",
    defaultMessage: 'Uh oh! Something went wrong. Please try again.'
});

