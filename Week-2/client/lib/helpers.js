Template.submitProblem.helpers({
  problem: function() {
    return Session.get("problem");
  },
  why1: function() {
    return Session.get("why1");
  },
  why2: function() {
    return Session.get("why2");
  },
  why3: function() {
    return Session.get("why3");
  },
  why4: function() {
    return Session.get("why4");
  },
  why5: function() {
    return Session.get("why5");
  }
});