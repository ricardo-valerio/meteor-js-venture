if (Meteor.isClient) {

	/***********************************************************
	*     Rendered
    ***********************************************************/

	// Template.mealsFeed.onRendered(function () {
	// 	$('ul.tabs').tabs();
	//     $('.collapsible').collapsible();
	//     $('.modal-trigger').leanModal();
	// });


	/***********************************************************
	*     Helpers
    ***********************************************************/
	Template.mealsFeed.helpers({
    	user_id: function () {
    		return Meteor.userId();
    	}
	});


	/***********************************************************
	*     Events
    ***********************************************************/

	Template.mealsFeed.events({
		"click .loveButton" : function(e) {
	        e.preventDefault();

	        if ($('#' + e.target.id).hasClass('love-button-color-clicked')){
	        	// TODO: decrement love counter
	        	console.log("decrement love counter");
	        }else {
	        	// TODO: increment love counter
	        	console.log("increment love counter");
	        }

	        $('#' + e.target.id).toggleClass('love-button-color-clicked');
		},
		"click .modal-trigger" : function(e) {
        	console.log("MODAL TRIGGERED - " + e.target.id);
		}
	});
}
