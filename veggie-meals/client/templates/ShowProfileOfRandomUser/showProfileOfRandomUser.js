if (Meteor.isClient) {

	/***********************************************************
	*     Renderes
    ***********************************************************/
	Template.showProfileOfRandomUser.onRendered(function () {
		$('.country-tooltipped-random-user').tooltip({delay: 50});
		$('ul.tabs-meals-feelings-of-random-user').tabs();
	});

	/***********************************************************
	*     Helpers
    ***********************************************************/
	Template.showProfileOfRandomUser.helpers({
		country : function() {
			return ":pt:";
		},
		user_id: function() {
			return Meteor.userId();
		}
	});

	/***********************************************************
	*     Events
	***********************************************************/
	Template.showProfileOfRandomUser.events({
	});
}
