(function(){
Template.__checkName("recipeItem");
Template["recipeItem"] = new Template("Template.recipeItem", (function() {
  var view = this;
  return HTML.A({
    "class": function() {
      return [ "item-recipe ", Spacebars.mustache(view.lookup("highlightedClass")) ];
    },
    href: function() {
      return Spacebars.mustache(view.lookup("path"));
    }
  }, "\n    ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("recipe"));
  }, function() {
    return [ "\n      ", HTML.SPAN({
      "class": "attribution"
    }, "\n        ", HTML.SPAN({
      "class": "title-recipe"
    }, Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    })), "\n        ", HTML.SPAN({
      "class": "metadata-recipe"
    }, "\n          ", HTML.SPAN({
      "class": "author-recipe"
    }, Blaze.View("lookup:source.name", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("source"), "name"));
    })), "\n          ", HTML.SPAN({
      "class": "bookmarks-recipe"
    }, HTML.SPAN({
      "class": "icon-bookmark"
    }), " ", Blaze.View("lookup:bookmarkCount", function() {
      return Spacebars.mustache(view.lookup("bookmarkCount"));
    })), "\n        "), "\n      "), "\n    " ];
  }), "\n\n    ", HTML.IMG({
    src: function() {
      return Spacebars.mustache(view.lookup("recipeImage"), Spacebars.kw({
        recipe: view.lookup("recipe"),
        size: view.lookup("size")
      }));
    }
  }), "\n  ");
}));

})();
