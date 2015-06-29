(function(){
Template.__checkName("admin");
Template["admin"] = new Template("Template.admin", (function() {
  var view = this;
  return HTML.DIV({
    id: "admin"
  }, HTML.Raw('\n    <a href="/" class="back-desktop"><span class="icon-arrow-left-alt"></span> Back</a>\n    '), HTML.DIV({
    "class": "wrapper-admin"
  }, "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isAdmin"));
  }, function() {
    return [ "\n        ", HTML.H1({
      "class": "title-admin"
    }, "Admin"), "\n\n        ", HTML.FORM("\n          ", HTML.LABEL("Edit the front page news:"), "\n          ", HTML.TEXTAREA({
      name: "text",
      rows: "5",
      placeholder: "Show the latest Local Market news on the the frontpage...",
      value: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("latestNews"), "text"));
      }
    }), "\n          ", HTML.BUTTON({
      type: "submit",
      "class": "btn-primary"
    }, "Save"), "\n        "), "\n      " ];
  }, function() {
    return [ "\n        ", HTML.H1({
      "class": "title-admin"
    }, "Forbidden"), "\n        \n        ", Blaze.Unless(function() {
      return Spacebars.call(view.lookup("currentUser"));
    }, function() {
      return [ "\n          ", HTML.A({
        "class": "login"
      }, "Log in with Twitter"), "\n        " ];
    }), "\n      " ];
  }), "\n    "), "\n  ");
}));

})();
