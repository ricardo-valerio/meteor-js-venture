(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.DIV({
    "class": "container-fluid",
    style: "padding-top:60px;"
  }, "\n    \n    ", HTML.NAV({
    "class": "navbar navbar-default navbar-fixed-top",
    role: "navigation"
  }, "\n      ", HTML.DIV({
    "class": "container-fluid"
  }, "\n        ", HTML.Raw('<div class="navbar-header">\n          <a class="navbar-brand" href="#">The Questionator</a>\n          \n          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">\n            <span class="sr-only">Toggle navigation</span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n          </button>\n        </div>'), "\n        \n        ", HTML.DIV({
    "class": "collapse navbar-collapse",
    id: "navigation"
  }, "\n          ", HTML.UL({
    "class": "nav navbar-nav navbar-right"
  }, "\n            ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n          "), " \n        "), "\n      "), "\n    "), "\n    \n    ", Spacebars.include(view.lookupTemplate("questionForm")), "\n\n    ", Spacebars.include(view.lookupTemplate("questionsList")), "\n  ");
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("questionForm");
Template["questionForm"] = new Template("Template.questionForm", (function() {
  var view = this;
  return HTML.FORM({
    role: "form"
  }, "\n    ", HTML.DIV({
    "class": "form-group"
  }, "\n      ", HTML.TEXTAREA({
    id: "question",
    "class": "form-control",
    rows: "2"
  }), "\n    "), HTML.Raw('\n    <div class="form-group">\n      <input class="btn btn-primary" type="submit" value="Ask away">\n    </div>\n  '));
}));

Template.__checkName("questionsList");
Template["questionsList"] = new Template("Template.questionsList", (function() {
  var view = this;
  return [ HTML.DIV({
    id: "questions"
  }, "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("questions"));
  }, function() {
    return [ "\n      ", HTML.HR(), "\n      ", HTML.H6(Blaze.View("lookup:text", function() {
      return Spacebars.mustache(view.lookup("text"));
    }), " ", HTML.SMALL("Votes: ", Blaze.View("lookup:votes", function() {
      return Spacebars.mustache(view.lookup("votes"));
    }))), "\n      ", HTML.A({
      "class": "btn btn-default btn-xs vote-up"
    }, "up"), "\n      ", HTML.A({
      "class": "btn btn-default btn-xs vote-down"
    }, "down"), "\n    " ];
  }), "    \n  "), HTML.Raw("\n  <hr>") ];
}));

})();
