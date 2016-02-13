if (Meteor.isClient) {

  /***********************************************************
  *     Created
  ***********************************************************/

  Template.appLayout.onCreated(function () {
    $('.linkifyMePlease').linkify({
      target: "_blank"
    });
  });

  /***********************************************************
  *     Rendered
  ***********************************************************/

  Template.appLayout.onRendered(function () {
    $(".navbar-expand-toggle").click(function() {
        $(".app-container").toggleClass("expanded");
        $(".navbar-expand-toggle").toggleClass("fa-rotate-90");
    });
    $(".navbar-right-expand-toggle").click(function() {
        $(".navbar-right").toggleClass("expanded");
        $(".navbar-right-expand-toggle").toggleClass("fa-rotate-90");
    });
  });


  /***********************************************************
  *     Helpers
  ***********************************************************/

  Template.appLayout.helpers({
  });

  /***********************************************************
  *     Events
  ***********************************************************/

  Template.appLayout.events({
  });


  /***********************************************************
  *     Destroyed
  ***********************************************************/

  Template.appLayout.onDestroyed(function () {
  });

}
