(function(){
Template.__checkName("nav");
Template["nav"] = new Template("Template.nav", (function() {
  var view = this;
  return HTML.NAV({
    "class": function() {
      return Blaze.If(function() {
        return Spacebars.call(view.lookup("black"));
      }, function() {
        return "black";
      });
    }
  }, "\n    ", HTML.DIV({
    "class": "nav-group"
  }, "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("back"));
  }, function() {
    return [ "\n        ", HTML.A({
      "class": "nav-item js-back",
      href: "#"
    }, HTML.SPAN({
      "class": "icon-arrow-left-alt"
    })), "\n      " ];
  }, function() {
    return [ "\n        ", HTML.A({
      "class": "nav-item js-menu",
      href: "#"
    }, HTML.SPAN({
      "class": "icon-menu"
    })), "\n      " ];
  }), "\n    "), "\n\n    ", HTML.DIV({
    "class": "title-page"
  }, "\n      ", Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  }), "\n      ", HTML.SPAN({
    "class": "subtext-page"
  }, Blaze.View("lookup:subtext", function() {
    return Spacebars.mustache(view.lookup("subtext"));
  })), "\n    "), "\n\n    ", HTML.DIV({
    "class": "nav-group right"
  }, "\n      ", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }), "\n    "), "\n  ");
}));

})();
