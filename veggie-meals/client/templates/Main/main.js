if (Meteor.isClient) {

  /***********************************************************
  *     Rendered
  ***********************************************************/

  Template.main.onRendered(function () {
    $(".button-collapse").sideNav();
    $('.collapsible-user-profile').collapsible();
    $('ul.tabs-user-profile').tabs();
    $('.modal-trigger-fixed-actions').leanModal();
    $('textarea#create-feeling').characterCounter();
  });


  /***********************************************************
  *     Helpers
  ***********************************************************/

  Template.main.helpers({
    activeIfRouteIs : function(currentRoute) {
      return currentRoute === Router.current().route.getName() ? 'active' : '';
    },
    username: function() {
      return Meteor.user() ? Meteor.user().profile.name : "";
    },
    photo: function () {
      return Session.get("photo");
    },
    user_id: function() {
      return Meteor.userId();
    }
  });

  /***********************************************************
  *     Events
  ***********************************************************/

  Template.main.events({
    "click #avatarUserProfile" : function() {
      console.log("avatar Clicked");
      $('#navBarUserProfile').toggle("slow");
    },
    "click .userProfileDashBoardRoute" : function (e) {
      console.log(e.target.id);
      Router.go(e.target.id);
    },
    "click #logout-left-nav": function() {
      AccountsTemplates.logout();
    },
    "click #mealSelfie": function () {
      var cameraOptions = {
        width: 800,
        height: 600
      };

      MeteorCamera.getPicture(cameraOptions, function (error, data) {
        Session.set("photo", data);
      });
    }
  });

}

