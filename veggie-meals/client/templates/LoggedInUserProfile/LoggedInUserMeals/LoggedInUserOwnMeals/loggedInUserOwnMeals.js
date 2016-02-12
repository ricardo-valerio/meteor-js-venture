if (Meteor.isClient){

	/***********************************************************
	*     Rendered
    ***********************************************************/
	Template.loggedInUserOwnMeals.onRendered(function () {
	});


	/***********************************************************
	*     Helpers
    ***********************************************************/
	Template.loggedInUserOwnMeals.helpers({
        user_id : function() {
            return Meteor.userId();
        }
	});


	/***********************************************************
	*     Events
    ***********************************************************/
    Template.loggedInUserOwnMeals.events({
    });

}

