if (Meteor.isClient) {

	/***********************************************************
	*     Rendered
    ***********************************************************/
	Template.mealsRank.onRendered({
	});

	/***********************************************************
	*     Helpers
    ***********************************************************/
	Template.mealsRank.helpers({
		user_id: function () {
			return Meteor.userId();
		}
	});


	/***********************************************************
	*     Events
    ***********************************************************/
	Template.mealsRank.events({
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
			$('#modal-for-comments-post-rank-with-id-' + e.target.id).html("<h2>Hello</h2>");
		}
	});

}
