/**
* STEP 1
*/

// if (Meteor.isClient) {
//   // This code only runs on the client
//   Template.body.helpers({
//     tasks: [
//       { text: "This is task 1" },
//       { text: "This is task 2" },
//       { text: "This is task 3" }
//     ]
//   });
// }

/**
* STEP 2
*/

Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client

  Template.body.helpers({
    tasks: function () {
      /**
      * STEP 1
      */
      // return Tasks.find({});

      /**
      * STEP 2
      * Show newest tasks first
      */
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted

      /**
      *The event handler gets an argument called event that has some
      * information about the event that was triggered. In this case
      * event.target is our form element, and we can get the value of
      * our input with event.target.text.value. You can see all of the
      * other properties of the event object by adding a console.log(event)
      * and inspecting the object in your browser console.
      */
      var text = event.target.text.value;

      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";

      /**
       * Prevent default form submit:
       * we return false to tell the web browser to not do the default
       * form submit action since we have already handled it.
       */
       return false;
     }
   });


  /*
    Getting data in event handlers:

    Inside the event handlers, this refers to an individual task object.
    In a collection, every inserted document has a unique _id field that
    can be used to refer to that specific document. We can get the _id of
    the current task with this._id. Once we have the _id, we can use update
    and remove to modify the relevant task.
  */
  Template.task.events({
    /*
      Update:

      The update function on a collection takes two arguments.
      The first is a selector that identifies a subset of the collection,
      and the second is an update parameter that specifies what should be
      done to the matched objects.

      In this case, the selector is just the _id of the relevant task.
      The update parameter uses $set to toggle the checked field, which will
      represent whether the task has been completed.
    */
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {$set: {checked: ! this.checked}});
    },

    /*
      Remove:

      The remove function takes one argument, a selector that determines
      which item to remove from the collection.
    */
    "click .delete": function () {
      Tasks.remove(this._id);
    }
  });

}

/**
* insert into database from terminal - meteor mongo
*/
// db.tasks.insert({ text: "Hello world!", createdAt: new Date() });
// db.tasks.insert({ text: "Study Meteor!", createdAt: new Date() });
// db.tasks.insert({ text: "Clean the house!", createdAt: new Date() });
// db.tasks.insert({ text: "Kiss my nice!", createdAt: new Date() });
// db.tasks.insert({ text: "Be happy!", createdAt: new Date() });
