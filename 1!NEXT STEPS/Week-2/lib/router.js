Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'submitProblem'});

Router.route('/problems', {name: 'problemsAll'});

// redirect to the current submitted problem
Router.route('/problems/:_id', {
	name: 'problemPage',
	data: function() { return Problems.findOne(this.params._id);
	}
});