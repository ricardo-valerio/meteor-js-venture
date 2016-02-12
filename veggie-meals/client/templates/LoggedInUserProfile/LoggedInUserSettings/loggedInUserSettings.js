if (Meteor.isClient) {

  /***********************************************************
  *     Rendered
  ***********************************************************/

  Template.loggedInUserSettings.onRendered(function () {
  	$('.datepicker').pickadate({
    		selectMonths: true, // Creates a dropdown to control month
    		selectYears: 100,   // Creates a dropdown of 15 years to control year
    		max: true 			    // set the maximum year to the current one
  		});
    $('.select-dropdown').dropdown();
    $('select').not('.disabled').material_select();
    $('textarea#bio').characterCounter();
  });

  /***********************************************************
  *     Helpers
  ***********************************************************/

  Template.loggedInUserSettings.helpers({
  });


  /***********************************************************
  *     Events
  ***********************************************************/

  Template.loggedInUserSettings.events({
    'click #takePictureSettings': function () {
        var cameraOptions = {
          width: 600,
          height: 600
        };

        MeteorCamera.getPicture(cameraOptions, function (error, data) {
          $('#avatarSettingsUserProfile').attr('src', data);
        });
    }
  });

}

