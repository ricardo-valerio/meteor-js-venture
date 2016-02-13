if (Meteor.isClient) {

  Template.sideNav.onCreated(function() {
  });

  Template.sideNav.onDestroyed(function() {
  });

  Template.sideNav.onRendered(function() {
  });

  Template.sideNav.helpers({
    activeIfRouteIs : function(currentRoute) {
      return currentRoute === Router.current().route.getName() ? 'active' : '';
    }
  });

  Template.sideNav.events({

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
