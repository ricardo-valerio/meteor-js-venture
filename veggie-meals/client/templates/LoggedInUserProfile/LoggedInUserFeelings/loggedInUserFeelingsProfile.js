if (Meteor.isClient){

	/***********************************************************
	*     Rendered
    ***********************************************************/

	Template.loggedInUserFeelingsProfile.onRendered(function () {
	    $('.collapsible-logged-in-user-feelings').collapsible();
	    $('.modal-trigger').leanModal();
	});


	/***********************************************************
	*     Helpers
    ***********************************************************/
    Template.loggedInUserFeelingsProfile.helpers({
    });



	/***********************************************************
	*     Events
    ***********************************************************/
    Template.loggedInUserFeelingsProfile.events({
    });

}




