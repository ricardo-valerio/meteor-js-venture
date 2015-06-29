(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.H1("Welcome ", Blaze.View("lookup:user", function() {
    return Spacebars.mustache(view.lookup("user"));
  }), " to Meteor!"), "\n	  ", Spacebars.include(view.lookupTemplate("header")), "\n	  ", Spacebars.include(view.lookupTemplate("main")), "\n	  ", Spacebars.include(view.lookupTemplate("exemplo")) ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return HTML.HEADER("\n		", HTML.HGROUP("\n			", HTML.H1(Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n			", HTML.H2(Blaze.View("lookup:tagline", function() {
    return Spacebars.mustache(view.lookup("tagline"));
  })), "\n		"), "\n	");
}));

Template.__checkName("main");
Template["main"] = new Template("Template.main", (function() {
  var view = this;
  return HTML.SECTION("\n		", Spacebars.include(view.lookupTemplate("dinos")), "\n		", Spacebars.include(view.lookupTemplate("addDino")), "\n		", Spacebars.include(view.lookupTemplate("hateAndDestroy")), "\n	");
}));

Template.__checkName("dinos");
Template["dinos"] = new Template("Template.dinos", (function() {
  var view = this;
  return HTML.TABLE("\n		", HTML.THEAD("\n			", HTML.TR("\n				", HTML.TD({
    "class": "dino"
  }, "Name"), "\n				", HTML.TD({
    "class": "votes"
  }, "Votes"), "\n			"), "\n		"), "\n		", HTML.TBODY("\n			", Blaze.Each(function() {
    return Spacebars.call(view.lookup("dinosaurs"));
  }, function() {
    return [ "\n				", Spacebars.include(view.lookupTemplate("dino")), "\n			" ];
  }, function() {
    return [ "\n				", HTML.TR("\n					", HTML.TD("No dinosaurs found"), "\n				"), "\n			" ];
  }), "\n		"), "\n	");
}));

Template.__checkName("addDino");
Template["addDino"] = new Template("Template.addDino", (function() {
  var view = this;
  return HTML.Raw('<div>\n		<input type="text" id="dinoToAdd" placeholder="Add a Dino...">\n		<input type="button" id="addDino" value="Add!">\n	</div>');
}));

Template.__checkName("dino");
Template["dino"] = new Template("Template.dino", (function() {
  var view = this;
  return HTML.TR({
    "class": function() {
      return Spacebars.mustache(view.lookup("selected"));
    }
  }, "\n		", HTML.TD({
    "class": "dino"
  }, Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  })), "\n		", HTML.TD({
    "class": "votes"
  }, "\n			", Blaze.If(function() {
    return Spacebars.call(view.lookup("votes"));
  }, function() {
    return [ "\n				", Blaze.View("lookup:votes", function() {
      return Spacebars.mustache(view.lookup("votes"));
    }), "\n			" ];
  }, function() {
    return "\n				0\n			";
  }), "\n		"), "\n	");
}));

Template.__checkName("hateAndDestroy");
Template["hateAndDestroy"] = new Template("Template.hateAndDestroy", (function() {
  var view = this;
  return HTML.Raw('<div>\n		<input type="button" id="hate" value="Hate!">\n		<input type="button" id="destroy" value="Send the Meteor!">\n	</div>');
}));

Template.__checkName("exemplo");
Template["exemplo"] = new Template("Template.exemplo", (function() {
  var view = this;
  return [ HTML.Raw("<h2>Olá Exemplo</h2>\n	"), Blaze.Each(function() {
    return Spacebars.call(view.lookup("outputExemplo"));
  }, function() {
    return [ "\n		", Spacebars.include(view.lookupTemplate("exemploFilho")), "\n	" ];
  }) ];
}));

Template.__checkName("exemploFilho");
Template["exemploFilho"] = new Template("Template.exemploFilho", (function() {
  var view = this;
  return HTML.TR("\n		", HTML.TD({
    "class": "dino"
  }, Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  })), "\n		", HTML.TD({
    "class": "votes"
  }, "\n			", Blaze.If(function() {
    return Spacebars.call(view.lookup("votes"));
  }, function() {
    return [ "\n				", Blaze.View("lookup:votes", function() {
      return Spacebars.mustache(view.lookup("votes"));
    }), "\n			" ];
  }, function() {
    return "\n				0\n			";
  }), "\n		"), "\n	");
}));

})();
