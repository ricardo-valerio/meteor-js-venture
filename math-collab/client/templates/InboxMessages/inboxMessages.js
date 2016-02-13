if (Meteor.isClient) {

  Template.inboxMessages.onCreated(function() {
  });

  Template.inboxMessages.onDestroyed(function() {
  });

  Template.inboxMessages.onRendered(function() {
    $('#inboxTable').dataTable({
      "columnDefs": [
        { "width": "10%", "targets": 0 },
        { "width": "25%", "targets": 1 },
        { "width": "45%", "targets": 2 },
        { "width": "20%", "targets": 3 },
      ]
    });
  });

  Template.inboxMessages.helpers({
  });

  Template.inboxMessages.events({
  });

}

