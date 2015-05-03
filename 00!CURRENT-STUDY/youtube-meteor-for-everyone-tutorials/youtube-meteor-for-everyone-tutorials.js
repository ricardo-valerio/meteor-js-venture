Resolutions = new Mongo.Collection("resolutions");

if (Meteor.isClient) {

Meteor.subscribe('resolutions');

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
	  },
	  isOwner: function() {
	  	return this.owner === Meteor.userId();
	  }
	});

	Template.resolutions.events({
		"click button.delete": function() {
			// "this" referes the resolution that was clicked
			Meteor.call("deleteResolution", this._id);
		},
		"click .toggle-checked": function() {
			Meteor.call("checkResolution", this._id, !this.checked);
		},
        "click .toggle-private": function() {
            Meteor.call("togglePrivate", this._id, !this.private);
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

  Meteor.publish('resolutions', function () {
  	return Resolutions.find({
        $or :[
            { private: { $ne: true} },
            { owner  : this.userId }
        ]
    });
  });
}


Meteor.methods({
	addResolution: function (title) {
		Resolutions.insert({
				owner 	  : Meteor.userId(),
				title     : title,
				createdAt : new Date()
		});
	},
	checkResolution: function(id, checked) {
		var resolution = Resolutions.findOne(id);

        if(resolution.owner !== Meteor.userId()){
            throw new Meteor.Error("not-authorized");
        }

		Resolutions.update(id, {
			$set: {
				checked: checked
			}
		});
	},
	deleteResolution: function(id) {
		 var resolution = Resolutions.findOne(id);

        if(resolution.owner !== Meteor.userId()){
            throw new Meteor.Error("not-authorized");
        }

		Resolutions.remove(id);
	},
    togglePrivate: function(id, private) {
        var resolution = Resolutions.findOne(id);

        if(resolution.owner !== Meteor.userId()){
            throw new Meteor.Error("not-authorized");
        }

        Resolutions.update(id, {
            $set: {
                private: private
            }
        });
    }
});
