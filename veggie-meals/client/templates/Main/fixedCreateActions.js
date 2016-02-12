if (Meteor.isClient) {

  /***********************************************************
  *     Helpers
  ***********************************************************/
  Template.fixedCreateActions.helpers({
  });

  /***********************************************************
  *     Events
  ***********************************************************/
  Template.fixedCreateActions.events({
    "click a[href='#post-feeling']": function() {
      $('#create-feeling').focus();
    }
  });

}

