if (Meteor.isClient) {

	/***********************************************************
	*     Rendered
    ***********************************************************/


	/***********************************************************
	*     Helpers
    ***********************************************************/


	/***********************************************************
	*     Events
    ***********************************************************/

	Template.feelingsRank.events({
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
		}
	});

}
