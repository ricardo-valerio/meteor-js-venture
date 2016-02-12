if (Meteor.isClient) {

	/***********************************************************
	*     Rendered
    ***********************************************************/

	Template.loggedInUserProfile.onRendered(function () {
		$('.country-tooltipped').tooltip({delay: 50});
		$('ul.tabs-meals-feelings-of-logged-in-user').tabs();
  	});


	/***********************************************************
	*     Helpers
    ***********************************************************/

	Template.loggedInUserProfile.helpers({
		country : function() {
			return ":pt:";
		},
		user_id : function() {
			return Meteor.userId()
		}
	});


	/***********************************************************
	*     Events
    ***********************************************************/

	Template.loggedInUserProfile.events({
	});

}
