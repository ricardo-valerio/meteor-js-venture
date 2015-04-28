Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {

  Meteor.subscribe("tasks");

// This code only runs on the client
  Template.body.helpers({

    tasks: function() {
        if (Session.get("hideCompleted")) {
          // If hide completed is checked, filter tasks
          return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
        } else {
          // Otherwise, return all of the tasks
          return Tasks.find({}, {sort: {createdAt: -1}});
        }
     },

    hideCompleted: function () {
      return Session.get("hideCompleted");
    },

    incompleteCount: function() {
      return Tasks.find({ checked: {$ne: true}}).count();
    }

  });

  Template.body.events({

    "submit .new-task": function(event) {

      //Prevent default form submit
      event.preventDefault();

      // This function is called when the new task form is submitted
      var text = event.target.text.value;

      if (text === "") { return false; }

      // The event handler gets an argument called event that has some information about the event that was triggered. In this case event.target is our form element, and we can get the value of our input with event.target.text.value. You can see all of the other properties of the event object by adding a console.log(event) and inspecting the object in your browser console.
      console.log(event);

      Meteor.call("addTask", text);
      // Tasks.insert({
      //   text: text,
      //   createdAt: new Date(),
      //   owner: Meteor.userId(),           // _id of logged in user
      //   username: Meteor.user().username  // username of logged in user
      // });

      //clean form input
      event.target.text.value = "";

    }

  });


  Template.body.events({

    "change .hide-completed input": function (event) {
      Session.set("hideCompleted", event.target.checked);
    }
  });


  Template.task.helpers({

    isOwner: function () {
      return this.owner === Meteor.userId();
    }
  });

  Template.task.events({

    // Inside the event handlers, this refers to an individual task object. In a collection, every inserted document has a unique _id field that can be used to refer to that specific document. We can get the _id of the current task with this._id. Once we have the _id, we can use update and remove to modify the relevant task.

    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Meteor.call("setChecked", this._id, ! this.checked);
      // Tasks.update(this._id, {$set: {checked: ! this.checked}});
    },

    "click .delete": function () {
      Meteor.call("deleteTask", this._id);
      // Tasks.remove(this._id);
    },

    "click .toggle-private": function () {
      Meteor.call("setPrivate", this._id, ! this.private);
    }

  });



  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

}




/**
    When we insert tasks into the database, we can now securely verify that the user is logged in, that the createdAt field is correct, and that the owner and username fields are correct and the user isn't impersonating anyone.

    We can add extra validation logic to setChecked and deleteTask in later steps when users can make tasks private.

    Our client code is now more separated from our database logic. Instead of a lot of stuff happening inside our event handlers, we now have methods that can be called from anywhere.
*/

Meteor.methods({

  addTask: function (text) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },

  deleteTask: function (taskId) {

    var task = Tasks.findOne(taskId);

    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }

    Tasks.remove(taskId);
  },

  setChecked: function (taskId, setChecked) {

    var task = Tasks.findOne(taskId);

    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error("not-authorized");
    }

    Tasks.update(taskId, { $set: { checked: setChecked} });
  },

  setPrivate: function (taskId, setToPrivate) {
    var task = Tasks.findOne(taskId);

    // Make sure only the task owner can make a task private
    if (task.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.update(taskId, { $set: { private: setToPrivate } });
  }
});

/**
So why do we want to define our methods on the client and on the server? We do this to enable a feature called latency compensation.

When you call a method on the client using Meteor.call, two things happen in parallel:

    The client sends a request to the server to run the method in a secure environment, just like an AJAX request would work
    A simulation of the method runs directly on the client to attempt to predict the outcome of the server call using the available information

What this means is that a newly created task actually appears on the screen before the result comes back from the server.

If the result from the server comes back and is consistent with the simulation on the client, everything remains as is. If the result on the server is different from the result of the simulation on the client, the UI is patched to reflect the actual state of the server.


With Meteor methods and latency compensation, you get the best of both worlds — the security of server code and no round-trip delay.

*/



if (Meteor.isServer) {

  // Only publish tasks that are public or belong to the current user
  Meteor.publish("tasks", function () {
    return Tasks.find({
                  $or: [
                    { private: {$ne: true} },
                    { owner: this.userId }
                  ]
            });
  });

  /**
  Calling Meteor.publish on the server registers a publication named "tasks". When Meteor.subscribe is called on the client with the publication name, the client subscribes to all the data from that publication, which in this case is all of the tasks in the database. To truly see the power of the publish/subscribe model, let's implement a feature that allows users to mark tasks as "private" so that no other users can see them.
  */



}
