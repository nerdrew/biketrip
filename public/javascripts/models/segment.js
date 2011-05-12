var Segment = Backbone.Model.extend({
  url: function(){
         var base = 'segments';
         if (this.isNew()) return base;
         return base + "/" + this.id;
       }
});
