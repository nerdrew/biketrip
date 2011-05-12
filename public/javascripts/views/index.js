App.Views.Index = Backbone.View.extend({
  initialize: function() {
                this.segments = this.options.segments;
                this.render();
              },

  render: function() {
            if(this.segments.length > 0) {
              var out = "<h3><a href='#new'>Create New</a></h3><ul>";
              _(this.segments).each(function(item) {
                out += "<li><a href='#segments/" + item._id + "'>" + item.escape('finish') + "</a></li>";
              });
              out += "</ul>";
            } else {
              out = "<h3>No segments! <a href='#new'>Create one</a></h3>";
            }
            $(this.el).html(out);
            $('#app').html(this.el);
          }
});
