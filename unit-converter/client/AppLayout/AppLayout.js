if (Meteor.isClient) {

  Template.appLayout.onCreated(function() {
  });

  Template.appLayout.onDestroyed(function() {
  });

  Template.appLayout.onRendered(function() {
      $(".button-collapse").sideNav();
  });

  Template.appLayout.helpers({
    activeIfRouteIs : function(currentRoute) {
      if (currentRoute == "why-learn-units-of-measurement"
          && Router.current().route.getName() == undefined)
        return "active";

        return currentRoute === Router.current().route.getName() ? 'active' : '';
    }
  });

  Template.appLayout.events({

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
