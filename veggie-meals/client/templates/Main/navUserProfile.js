if (Meteor.isClient) {

  /***********************************************************
  *     Rendered
  ***********************************************************/

  Template.navUserProfile.onRendered(function () {
  });


  /***********************************************************
  *     Helpers
  ***********************************************************/

  Template.navUserProfile.helpers({
  });

  /***********************************************************
  *     Events
  ***********************************************************/

  Template.navUserProfile.events({
    "click #logout-user": function(e) {
      e.preventDefault();
      AccountsTemplates.logout();
    }
  });

}

