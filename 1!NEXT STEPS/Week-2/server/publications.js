Meteor.publish('problems', function(){
	return Problems.find();
});

