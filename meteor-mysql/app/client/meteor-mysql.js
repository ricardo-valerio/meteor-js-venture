People = new MysqlSubscription('people');
Template.people.helpers({
  people: function () {
    return People.reactive();
  }
});