(function(){
Template.__checkName("authOverlay");
Template["authOverlay"] = new Template("Template.authOverlay", (function() {
  var view = this;
  return HTML.Raw('<div class="overlay auth">\n    <a href="#" class="js-close-overlay overlay-dismiss"><span class="icon-cross"></span></a>\n\n    <div class="wrapper-heading">\n      <div class="title-overlay">Sign In</div>\n      <div class="subtitle-overlay">To bookmark and share your favorite recipes</div>\n    </div>\n\n    <button class="js-signin btn-twitter">Sign In With Twitter</button>\n  </div>');
}));

})();
