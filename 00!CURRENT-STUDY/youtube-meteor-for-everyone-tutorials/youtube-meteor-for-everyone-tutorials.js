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
			Resolutions.insert({
				title     : title,
				createdAt : new Date()
			});

			// clean the input field
			title = "";
		}
	});

	Template.resolutions.helpers({
	  resolutions : function() {
	    return Resolutions.find();
	  }
	});

	Template.resolutions.events({
		"click button.delete": function() {
			// "this" referes the resolution that was clicked
			Resolutions.remove(this._id);
		},
		"click .toggle-checked": function() {
			Resolutions.update(this._id, {
					$set: {
						checked: !this.checked
					}
			});
		}
	});


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
