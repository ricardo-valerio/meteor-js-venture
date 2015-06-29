(function(){
Template.__checkName("recipes");
Template["recipes"] = new Template("Template.recipes", (function() {
  var view = this;
  return HTML.DIV({
    "class": "page recipes"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Recipes"),
      black: Spacebars.call(true)
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
    return [ "\n          ", Blaze.If(function() {
      return Spacebars.call(view.lookup("highlighted"));
    }, function() {
      return [ "\n            ", Blaze._TemplateWith(function() {
        return {
          recipe: Spacebars.call(view.lookup(".")),
          size: Spacebars.call("large")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("recipeItem"));
      }), "\n          " ];
    }, function() {
      return [ "\n            ", Blaze._TemplateWith(function() {
        return {
          recipe: Spacebars.call(view.lookup(".")),
          size: Spacebars.call("small")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("recipeItem"));
      }), "\n          " ];
    }), "\n        " ];
  }), "\n      "), "\n    "), "\n\n  ");
}));

})();
