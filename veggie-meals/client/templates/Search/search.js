if (Meteor.isClient) {

  /***********************************************************
  *     Session Variables
  ***********************************************************/

  Session.set('numberOfMealsReturnedInSearch', 0);
  Session.set('numberOfPeopleReturnedInSearch', 0);


  /***********************************************************
  *     Rendered
  ***********************************************************/

  Template.search.onRendered(function () {
      $('ul.tabs-search').tabs();

      // focus cursor on input search
	    $('#search-bar').focus();


      if ( ! $.isEmptyObject(this.data) )
      {
        // input query
        var queryToSearch = $('#search-bar').val();

        // urlParam of a category meal
        var category_meal = this.data.category_meal.toLowerCase();

        // TODO:
        // verify if urlParam is a valid cagetory meal
        // if it is not valid do something about it

        // if okay change the input value
        $('#search-bar').val("@" + category_meal);

        //---------- TODO: ------------------------------------
        //    mongoDB queries
        //------------------------------------------------------

        //------------------------------------------------------

        // show the content
        $('.tabs-search').removeClass('hideSearchTabResults');

        // actualize the counter results returned in mongo db
        Session.set('numberOfMealsReturnedInSearch', queryToSearch.length);
        Session.set('numberOfPeopleReturnedInSearch', queryToSearch.length);
      }

  });


  /***********************************************************
  *     Helpers
  ***********************************************************/

  Template.search.helpers({
  	numberOfMealsReturnedInSearch : function() {
  		return Session.get('numberOfMealsReturnedInSearch');
  	},
  	numberOfPeopleReturnedInSearch : function() {
  		return Session.get('numberOfPeopleReturnedInSearch');
  	},
    user_id: function() {
      return Meteor.userId();
    }
  });


  /***********************************************************
  *     Events
  ***********************************************************/

  Template.search.events({
  	"keyup #search-bar" : function() {

  		// input query to lower case
  		var queryToSearch = $('#search-bar').val().toLowerCase();

      // TODO:
      // 1 - verify the first character in the query
      // @ -> category of a meal [breakfast, lunch, snack, dinner]
      // # -> tag of a meal or feeling
      // "" -> search everything in a meal & restaurants

      //----------------TODO:------------------------------------
      //    mongoDB queries
      //---------------------------------------------------------

      //---------------------------------------------------------


      //----------------TODO:------------------------------------
      //    counter of the returned results
      //---------------------------------------------------------
  		// actualize the counter results returned in mongo db
  		Session.set('numberOfMealsReturnedInSearch', queryToSearch.length);
  		Session.set('numberOfPeopleReturnedInSearch', queryToSearch.length);
      //---------------------------------------------------------


      // toggle css class for content visibility
  		if ( queryToSearch.length > 0 &&
           $('.tabs-search').hasClass('hideSearchTabResults') ) {
        $('.tabs-search').removeClass('hideSearchTabResults');
        $('#searched-meals').removeClass('hideSearchTabResults');
        $('a[href="#searched-meals"]').click();
        $('#searched-people').removeClass('hideSearchTabResults');
  		}

  		if ( queryToSearch.length === 0 &&
           ! $('.tabs-search').hasClass('hideSearchTabResults') ) {
        $('.tabs-search').addClass('hideSearchTabResults');
        $('#searched-meals').addClass('hideSearchTabResults');
  			$('#searched-people').addClass('hideSearchTabResults');
  		}

  	}
  });
}

