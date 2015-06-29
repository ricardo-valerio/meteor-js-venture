(function(){
Template.__checkName("activity");
Template["activity"] = new Template("Template.activity", (function() {
  var view = this;
  return HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("path"));
    },
    "class": "item-activity"
  }, "\n\n    ", HTML.SPAN({
    "class": "attribution"
  }, "\n      ", HTML.SPAN({
    "class": "avatar"
  }, "\n        ", HTML.IMG({
    src: function() {
      return Spacebars.mustache(view.lookup("userAvatar"));
    },
    "class": "image-avatar"
  }), "\n      "), "\n      ", HTML.SPAN({
    "class": "meta"
  }, "\n        ", HTML.SPAN({
    "class": "author"
  }, Blaze.View("lookup:firstName", function() {
    return Spacebars.mustache(view.lookup("firstName"));
  })), " made ", HTML.SPAN({
    "class": "recipe"
  }, Blaze.View("lookup:recipeTitle", function() {
    return Spacebars.mustache(view.lookup("recipeTitle"));
  })), ": ", Blaze.View("lookup:text", function() {
    return Spacebars.mustache(view.lookup("text"));
  }), "\n       ", Blaze.If(function() {
    return Spacebars.call(view.lookup("place"));
  }, function() {
    return HTML.SPAN({
      "class": "location"
    }, HTML.CharRef({
      html: "&mdash;",
      str: "—"
    }), Blaze.View("lookup:place", function() {
      return Spacebars.mustache(view.lookup("place"));
    }));
  }), "\n       "), "\n    "), "\n\n    ", HTML.DIV({
    "class": "bg-image",
    style: function() {
      return [ "background-image: url('", Spacebars.mustache(view.lookup("image")), "');" ];
    }
  }), "\n\n  ");
}));

})();
