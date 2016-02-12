if (Meteor.isClient) {

	/***********************************************************
	*     Rendered
    ***********************************************************/
	Template.showMealDetail.onRendered(function () {
		$('.materialboxed').materialbox();
		$('ul.tabs-ingredients-recipe-of-random-user').tabs();
	});

	/***********************************************************
	*     Helpers
    ***********************************************************/
	Template.showMealDetail.helpers({
	});

	/***********************************************************
	*     Events
	***********************************************************/
	Template.showMealDetail.events({
	});
}
