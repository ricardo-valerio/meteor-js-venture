(function(){
Template.__checkName("notFound");
Template["notFound"] = new Template("Template.notFound", (function() {
  var view = this;
  return HTML.DIV({
    "class": "page not-found"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Not Found")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"));
  }), "\n\n    ", HTML.DIV({
    "class": "content-scrollable"
  }, "\n      ", HTML.DIV({
    "class": "wrapper-message"
  }, "\n        ", HTML.Raw('<div class="title-message">Yikes! That wasn\'t found</div>'), "\n        ", HTML.DIV({
    "class": "subtitle-message"
  }, "The stuff you were looking for wasn't found. ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "home");
    }
  }, "Return home")), "\n      "), "\n\n    "), "\n  ");
}));

})();
