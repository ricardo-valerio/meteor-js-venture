Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {

// This code only runs on the client
  Template.body.helpers({
    tasks: function() {
      return Tasks.find({}, { sort: { createdAt: -1} });
    }
  });

  Template.body.events({
    "submit .new-task": function(event) {
    // This function is called when the new task form is submitted
      var text = event.target.text.value;

      // The event handler gets an argument called event that has some information about the event that was triggered. In this case event.target is our form element, and we can get the value of our input with event.target.text.value. You can see all of the other properties of the event object by adding a console.log(event) and inspecting the object in your browser console.
      console.log(event);

      Tasks.insert({
        text: text,
        createdAt: new Date()
      });

      // clean form input
      event.target.text.value = "";

    // Prevent default form submit
      return false;
    }
  });


  Template.task.events({

  // Inside the event handlers, this refers to an individual task object. In a collection, every inserted document has a unique _id field that can be used to refer to that specific document. We can get the _id of the current task with this._id. Once we have the _id, we can use update and remove to modify the relevant task.

    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {$set: {checked: ! this.checked}});
    },
    "click .delete": function () {
      Tasks.remove(this._id);
    }
  });


}

if (Meteor.isServer) {

}
