(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.SVG({
    xmlns: "http://www.w3.org/2000/svg",
    width: "350",
    height: "350",
    viewBox: "-110 -110 220 220",
    style: "display: block; margin: 0 auto;"
  }, "\n\n    ", HTML.Comment(" bounding circle "), "\n    ", HTML.CIRCLE({
    style: "stroke: black; fill: #eee;",
    cx: "0",
    cy: "0",
    r: "100"
  }), "\n\n    ", HTML.Comment(" hour, minute and second hands "), "\n    ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("handData"));
  }, function() {
    return [ "\n      ", HTML.LINE(HTML.Attrs({
      style: "stroke-width: 6px;\n                   stroke: green;"
    }, function() {
      return Spacebars.attrMustache(view.lookup("radial"), view.lookup("hourDegrees"), 0, .55);
    })), "\n      ", HTML.LINE(HTML.Attrs({
      style: "stroke-width: 4px;\n                   stroke: blue;"
    }, function() {
      return Spacebars.attrMustache(view.lookup("radial"), view.lookup("minuteDegrees"), 0, .85);
    })), "\n      ", HTML.LINE(HTML.Attrs({
      style: "stroke-width: 2px;\n                   stroke: red;"
    }, function() {
      return Spacebars.attrMustache(view.lookup("radial"), view.lookup("secondDegrees"), 0, .95);
    })), "\n    " ];
  }), "\n\n    ", HTML.Comment(" tick marks "), "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("hours"));
  }, function() {
    return [ "\n      ", HTML.LINE(HTML.Attrs({
      style: "stroke-width: 3px;\n                   stroke: black;"
    }, function() {
      return Spacebars.attrMustache(view.lookup("radial"), view.lookup("degrees"), .9, 1);
    })), "\n    " ];
  }), "\n  ");
}));
Meteor.startup(Template.body.renderToDocument);

})();
