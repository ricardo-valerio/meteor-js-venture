Resolutions = new Mongo.Collection("resolutions");

if (Meteor.isClient) {


Template.resolutions.helpers({
  resolutions : function() {
    return Resolutions.find();
  }
});


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
