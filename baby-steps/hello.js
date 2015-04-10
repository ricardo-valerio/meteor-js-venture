if (Meteor.isClient) {

  // counter starts at 0
  Session.setDefault("counter", 0);
  Session.setDefault("counter_for_bazinga", 0);
  Session.setDefault("counter_for_break", 0);


  ////////////////////// hello template

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  /////////////////////// bazinga template

  Template.bazinga.helpers({
    counter: function () {
      return Session.get('counter_for_bazinga');
    }
  });

  Template.bazinga.events({
    'click button': function () {
      Session.set('counter_for_bazinga',
                  Session.get('counter_for_bazinga') + 2);
    }
  });


  ////////////////////// breakFree template

  Template.breakFree.helpers({
    freedom: function () {
      return Session.get("counter_for_break");
    }
  });

  Template.breakFree.events({
    "click button" : function () {
        Session.set("counter_for_break",
                    Session.get("counter_for_break") + 3);
      }
  });



}

if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup
  });

}
