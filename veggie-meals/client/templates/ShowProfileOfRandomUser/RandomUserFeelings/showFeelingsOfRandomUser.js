if (Meteor.isClient) {

	/***********************************************************
	*     Renderes
    ***********************************************************/
	Template.showFeelingsOfRandomUser.onRendered(function () {
	    $('.collapsible-random-user-feelings').collapsible();
	    $('.modal-trigger-random-user-feelings').leanModal();
	});

	/***********************************************************
	*     Helpers
    ***********************************************************/
	Template.showFeelingsOfRandomUser.helpers({
	});

	/***********************************************************
	*     Events
	***********************************************************/
	Template.showFeelingsOfRandomUser.events({
	});
}
