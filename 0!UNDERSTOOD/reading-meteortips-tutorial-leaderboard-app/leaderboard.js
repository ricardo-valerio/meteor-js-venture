PlayersList = new Mongo.Collection('players');

  console.log("Hello Client and Server");


if (Meteor.isClient) {

  console.log("Hello Client");


  Template.players.helpers({
    numberOfPlayers: function() {
      return PlayersList.find().count();
    },
    player: function() {
      return PlayersList.find({});
    }
  });

  Template.players.events({
    // http://docs.meteor.com/#/full/eventmaps
    "click li.jogador" : function(e) {

      console.log(e.target.id);
      console.log(e.target.textContent);

      console.log("Event <click> !");
    },
    "change" : function() {
      console.log("Event <change> !");
    },
    "dblclick" : function() {
      console.log("Event <dblclick> !");
    },
    "focus" : function() {
      console.log("Event <focus> !");
    },
    "blur" : function() {
      console.log("Event <blur> !");
    },
    "mouseover" : function() {
      console.log("Event <mouseover> !");
    },

  });


}


if (Meteor.isServer) {

  console.log("Hello Server");

}
