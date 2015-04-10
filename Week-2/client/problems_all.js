Template.problemsAll.helpers({
	problems: function() {
		return Problems.find({}, {sort : {submitdate: -1}});
	}
});