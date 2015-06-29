// Templates
Template.messages.helpers({
	messages: function() {
		// return all documents from MongoDB and
		// sort them on the time attribute
		return Messages.find({}, {sort: {time: -1}});
	}
});

Template.welcome.helpers({
	name: function() {
		return Meteor.user() && Meteor.user().profile.name;
	}
});

Template.input.events({
	// any time a key is pressed with in the input#message
	'keydown input#message': function(event) {
		// 13 is the enter key event
		// if enter is pressed
		if (event.which == 13) {
			// set variables to add them in next step
			// Meteor.user holds profile info of current user
			//if (Meteor.user())
			var name = Meteor.user().profile.name;
			var now = new Date();
			var h = now.getHours();
			var m = now.getMinutes();
			var s = now.getSeconds();

			var time = h + ":" + m + ':' + s;

			/*else
				var name = 'Anonymous';
				var message = document.getElementById('message');*/
			
			// if input message exist insert it to collection
			if(message.value != '') {
				Messages.insert({
					name: name,
					message: message.value,
					time : time
				});
				// clear input field
				document.getElementById('message').value = '';
				message.value = '';
			}
		}
	}
});

	







