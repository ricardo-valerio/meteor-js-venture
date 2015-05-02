Resolutions = new Mongo.Collection("resolutions");

if (Meteor.isClient) {

	Template.body.events({
		"submit .new-resolution": function(event) {
			event.preventDefault();

			// get the value of input named "title"
			var title = event.target.title.value;

			// return if the input is void
			if (!title.length) return false;

			// otherwise insert into the mongodb
			Meteor.call("addResolution", title);

			// clean the input field
			title = "";
		}
	});

	Template.body.events({
		"change .hide-finished": function(event) {
			Session.set("hideFinished", event.target.checked);
		}
	});

	Template.resolutions.helpers({
	  resolutions : function() {
	  	// return only the resolutions checked
	  	if (Session.get("hideFinished")) {
	    	return Resolutions.find({
		    			checked: {
		    				$ne: true
		    			}
	    			});
	  	}else{
	  		// otherwise return all
	    	return Resolutions.find();
	  	}
	  },
	  hideFinished: function() {
	  	return Session.get("hideFinished");
	  }
	});

	Template.resolutions.events({
		"click button.delete": function() {
			// "this" referes the resolution that was clicked
			Meteor.call("deleteResolution", this._id);
		},
		"click .toggle-checked": function() {
			Meteor.call("checkResolution", this._id, !this.checked);
		}
	});


Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


Meteor.methods({
	addResolution: function (title) {
		Resolutions.insert({
				title     : title,
				createdAt : new Date()
			});
	},
	checkResolution: function(id, checked) {
			Resolutions.update(id, {
				$set: {
					checked: checked
				}
			});
	},
	deleteResolution: function(id) {
		Resolutions.remove(id);
	}
});
