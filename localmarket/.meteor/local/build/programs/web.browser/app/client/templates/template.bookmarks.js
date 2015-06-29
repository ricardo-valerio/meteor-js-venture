(function(){
Template.__checkName("bookmarks");
Template["bookmarks"] = new Template("Template.bookmarks", (function() {
  var view = this;
  return HTML.DIV({
    "class": "page bookmarks"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Your Bookmarks"),
      subtext: Spacebars.call(view.lookup("recipeCount"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"));
  }), "\n\n    ", HTML.DIV({
    "class": "content-scrollable"
  }, "\n      ", HTML.DIV({
    "class": "list-recipes"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("."));
  }, function() {
    return [ "\n          ", Blaze._TemplateWith(function() {
      return {
        recipe: Spacebars.call(view.lookup(".")),
        size: Spacebars.call("large")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("recipeItem"));
    }), "\n        " ];
  }, function() {
    return [ "\n          ", HTML.DIV({
      "class": "wrapper-message"
    }, "\n            ", HTML.DIV({
      "class": "title-message"
    }, "No bookmarks yet"), "\n            ", HTML.DIV({
      "class": "subtitle-message"
    }, "Tap ", HTML.SPAN({
      "class": "icon-bookmark-hollow"
    }), " to bookmark your favorite recipes. ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "home");
      }
    }, "Return home")), "\n\n          "), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");
}));

})();
