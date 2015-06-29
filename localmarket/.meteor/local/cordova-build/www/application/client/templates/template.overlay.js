(function(){
Template.__checkName("overlay");
Template["overlay"] = new Template("Template.overlay", (function() {
  var view = this;
  return HTML.DIV({
    id: "overlay-hook"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      template: Spacebars.call(view.lookup("template")),
      data: Spacebars.call(view.lookup("data"))
    };
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Template.__dynamic);
    });
  }), "\n  ");
}));

})();
