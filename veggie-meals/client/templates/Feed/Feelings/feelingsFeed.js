if (Meteor.isClient) {

	/***********************************************************
	*     Helpers
    ***********************************************************/

	// Template.feelingsFeed.onRendered(function () {
	// 	   $('ul.tabs').tabs();
	//     $('.collapsible').collapsible();
	//     $('.modal-trigger').leanModal();
	// });


	/***********************************************************
	*     Helpers
    ***********************************************************/
    Template.feelingsFeed.helpers({
    	user_id: function () {
    		return Meteor.userId();
    	},
        activeOrangeIfUserIsLoggedIn: function(user) {
            return user === Meteor.userId() ? "post-of-user-logged-in" : false;
        }
    });

	/***********************************************************
	*     Events
    ***********************************************************/

	Template.feelingsFeed.events({
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
		},
	});

}
