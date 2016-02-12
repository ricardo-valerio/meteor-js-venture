if (Meteor.isClient) {

	/***********************************************************
	*     Renderes
    ***********************************************************/
	Template.showMealsOfRandomUser.onRendered(function () {
	    $('.collapsible-random-user-meals').collapsible();
	});

	/***********************************************************
	*     Helpers
    ***********************************************************/
	Template.showMealsOfRandomUser.helpers({
	});

	/***********************************************************
	*     Events
	***********************************************************/
	Template.showMealsOfRandomUser.events({
	});
}
