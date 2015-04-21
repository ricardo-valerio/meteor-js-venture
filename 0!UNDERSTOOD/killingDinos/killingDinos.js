// Já não é assim:
// var Dinos = new Meteor.Collection("DoomedDinos");

Dinos = new Mongo.Collection("DoomedDinos");

if (Meteor.isClient) {

  //-------------------

  Template.body.helpers({
    user : function() {
       return "Ricardo";
    }
  });

  //-------------------

  Template.header.helpers({
    title : function() {
      return "Hello Yucutan!"
    },
    tagline : function() {
      return "Killing All the Dinos!"
    }
  });

  //-------------------

  Template.addDino.events({
    "click #addDino" : function() {
      // ir buscar o valor da input text
      var dinoToAddInputValue = $('#dinoToAdd');
      // inserir na bd
      Dinos.insert({ name: dinoToAddInputValue.val() });
      // limpar a input text
      dinoToAddInputValue.val("");
    }
  });

  //-------------------

  Template.dinos.helpers({
    dinosaurs: function() {
      return Dinos.find({},
        {sort: [ ["votes", "desc"], ["name", "asc"] ] }
        );
    }
  });

  //-------------------

  Template.dino.helpers({
    selected : function() {
      return Session.equals("selected_dino", this._id)
               ? "selected"
               : "";
    }
  });

  Template.dino.events({
    "click tr" : function() {
      Session.set("selected_dino", this._id);
    }
  });

  //-------------------

  Template.hateAndDestroy.events({
    "click #hate" : function() {
      var id = Session.get("selected_dino");
      Dinos.update(id, {$inc: {votes: 1}});
    },
    "click #destroy" : function() {
      var id = Dinos.findOne({},
        {sort: [ ["votes", "desc"], ["name", "asc"] ] })._id;
      Dinos.remove(id);
    }
  });

}

if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup
  });

}
