if (Meteor.isClient){

	/***********************************************************
	*     Rendered
    ***********************************************************/
	Template.loggedInUserMealsProfile.onRendered(function () {
	    $('.collapsible-logged-in-user-meals').collapsible();
	});


	/***********************************************************
	*     Helpers
    ***********************************************************/
	Template.loggedInUserMealsProfile.helpers({
	});


	/***********************************************************
	*     Events
    ***********************************************************/
    Template.loggedInUserMealsProfile.events({
    });

}

