//Button to show next question in the form
Template.submitProblem.events({
  'click .route':function() {
    if (problem.value != '') {
    //show/hide items with removeClass()/addClass()
    $('.part2').addClass('magictime swashIn');
    $('#submit-problem').addClass('hidden');
    $('#submit-why1').removeClass('hidden');
    } else {
      alert("You need to enter problem");
    }
  },
  'keyup input#problem':function(event) {
    Session.set("problem", event.target.value);
  },

  'click .answer1':function() {
    if (why1.value != '') {
    //show/hide items with removeClass()/addClass()
    $('.part3').addClass('magictime swashIn');
    $('#submit-why1').addClass('hidden');
    $('#submit-why2').removeClass('hidden');
    } else {
      alert("You need to answer why is it problem");
    }
  },
  'keyup input#why1':function(event) {
    Session.set("why1", event.target.value);
  },

  'click .answer2':function() {
    if (why2.value != '') {
    //show/hide items with removeClass()/addClass()
    $('.part4').addClass('magictime swashIn');
    $('#submit-why2').addClass('hidden');
    $('#submit-why3').removeClass('hidden');
    } else {
      alert("You need to answer why is it problem");
    }
  }, 
  'keyup input#why2':function(event) {
    Session.set("why2", event.target.value);
  },

  'click .answer3':function() {
    if (why3.value != '') {
    //show/hide items with removeClass()/addClass()
    $('.part5').addClass('magictime swashIn');
    $('#submit-why3').addClass('hidden');
    $('#submit-why4').removeClass('hidden');
    } else {
      alert("You need to answer why is it problem");
    }
  },

  'keyup input#why3':function(event) {
    Session.set("why3", event.target.value);
  },

  'click .answer4':function() {
    if (why4.value != '') {
    //show/hide items with removeClass()/addClass()
    $('.part6').addClass('magictime swashIn');
    $('#submit-why4').addClass('hidden');
    $('#submit-why5').removeClass('hidden');
    } else {
      alert("You need to answer why is it problem");
    }
  },
  'keyup input#why4':function(event) {
    Session.set("why4", event.target.value);
  },

  'click .answer5':function() {
    if (why5.value != '') {
    //show/hide items with removeClass()/addClass()
    $('.part7').addClass('magictime swashIn');
    $('#submit-why5').addClass('hidden');
    $('#submit-solution').removeClass('hidden');
    } else {
      alert("You need to answer why is it problem");
    }
  },

  'keyup input#why5':function(event) {
    Session.set("why5", event.target.value);
  },

  'click .back1':function() {
    //show/hide items with removeClass()/addClass()
    $('#submit-why1').addClass('hidden');
    $('#submit-problem').removeClass('hidden');
  },

  'click .back2':function() {
    //show/hide items with removeClass()/addClass()
    $('#submit-why2').addClass('hidden');
    $('#submit-why1').removeClass('hidden');
  },

  'click .back3':function() {
    //show/hide items with removeClass()/addClass()
    $('#submit-why3').addClass('hidden');
    $('#submit-why2').removeClass('hidden');
  },

  'click .back4':function() {
    //show/hide items with removeClass()/addClass()
    $('#submit-why4').addClass('hidden');
    $('#submit-why3').removeClass('hidden');
  },

  'click .back5':function() {
    //show/hide items with removeClass()/addClass()
    $('#submit-why5').addClass('hidden');
    $('#submit-why4').removeClass('hidden');
  },

  'click .back6':function() {
    //show/hide items with removeClass()/addClass()
    $('#submit-solution').addClass('hidden');
    $('#submit-why5').removeClass('hidden');
  },

  'submit form':function(event) {
    event.preventDefault();

    var post = {
    postProblem: $(event.target).find('[name=problem]').val(),
    postWhy1: $(event.target).find('[name=why1]').val(),
    postWhy2: $(event.target).find('[name=why2]').val(),
    postWhy3: $(event.target).find('[name=why3]').val(),
    postWhy4: $(event.target).find('[name=why4]').val(),
    postWhy5: $(event.target).find('[name=why5]').val(),
    postSolution:$(event.target).find('[name=solution]').val(),
    submitdate: new Date()
    };

    Meteor.call('insertProblem', post, function(error,result) {
        if(!error){
          console.log(result)
          console.log(result._id)
          Router.go('problemPage', result); //it may work to with the + operator
        }
    });
    /*post._id = Problems.insert(post);
    Router.go('problemPage', post);*/
  }
});

Session.setDefault("name", "");
Session.setDefault("why1", "");
Session.setDefault("why2", "");
Session.setDefault("why3", "");
Session.setDefault("why4", "");
Session.setDefault("why5", "");
Session.setDefault("solution", "");




