if (Meteor.isClient){

	/***********************************************************
	*     Rendered
    ***********************************************************/
	Template.loggedInUserLovedMeals.onRendered(function () {
	});


	/***********************************************************
	*     Helpers
    ***********************************************************/
	Template.loggedInUserLovedMeals.helpers({
        user_id: function() {
            return Meteor.userId();
        }
	});


	/***********************************************************
	*     Events
    ***********************************************************/
    Template.loggedInUserLovedMeals.events({
    });

}

