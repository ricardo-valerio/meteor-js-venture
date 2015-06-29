(function(){
Template.__checkName("feed");
Template["feed"] = new Template("Template.feed", (function() {
  var view = this;
  return HTML.DIV({
    "class": "page whats-cooking"
  }, "\n\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("What's Cooking")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"));
  }), "\n\n    ", HTML.DIV({
    "class": "content-scrollable"
  }, "\n      ", HTML.DIV({
    "class": function() {
      return [ "list-activities ", Blaze.Unless(function() {
        return Spacebars.call(view.lookup("ready"));
      }, function() {
        return "loading";
      }) ];
    }
  }, "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("ready"));
  }, function() {
    return [ "\n          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("activities"));
    }, function() {
      return [ "\n            ", Spacebars.include(view.lookupTemplate("activity")), "\n          " ];
    }, function() {
      return [ "\n            ", HTML.DIV({
        "class": "wrapper-message"
      }, "\n              ", HTML.DIV({
        "class": "title-message"
      }, "No one is cooking yet!"), "\n              ", HTML.DIV({
        "class": "subtitle-message"
      }, "Share that you made a recipe and it will show up here."), "\n            "), "\n          " ];
    }), "\n        " ];
  }, function() {
    return [ "\n          ", HTML.DIV({
      "class": "wrapper-message"
    }, "\n            ", HTML.DIV({
      "class": "icon-sync"
    }), "\n            ", HTML.DIV({
      "class": "title-message"
    }, "Loading"), "\n          "), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");
}));

})();
