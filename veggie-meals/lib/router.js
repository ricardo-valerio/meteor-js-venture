// --------------------------------------------------------------------------
// 			Router Configurations
// --------------------------------------------------------------------------
 Router.configure({
   layoutTemplate: 'main',
   notFoundTemplate: 'notFound',

	// https://forums.meteor.com/t/prevent-users-from-browsing-a-cordova-app-through-the-browser/6111
 	// onBeforeAction: function () {
	// 	if (!Meteor.isCordova) {
	// 		window.location.replace("http://www.google.com");
	// 	} else {
	// 		this.next();
	// 	}
	// }

 });


Router.plugin('ensureSignedIn', {
	// except: ['dayRank']
});



// -------------------------------
//		index route
// -------------------------------
Router.route('/', function () {


		this.redirect('/feed');

	}, {
		 name: "index"
	   }
);


// -------------------------------
//		feed route
// -------------------------------
Router.route('/feed', function () {
		this.render('feed');
	}, {
		 name: "feed"
	   }
);


// -------------------------------
//		rank route
// -------------------------------
Router.route('/rank', function () {
		this.render('dayRank');
	}, {
		 name: "rank"
	   }
);


// -------------------------------
//		search route
// -------------------------------
Router.route('/search', function () {
		this.render('search');
	}, {
		 name: "search"
	   }
);


// -------------------------------
//		search route
//
//		given a route like
//
//		/search
//
//		or
//
//		/search/breakfast
// -------------------------------
Router.route('/search/:category_meal', function () {

		var category_meal = this.params.category_meal; // "sigbibs5415"

		this.render('search', {
			data: function () {
				// TODO:
				// 1 - verificar se a categoria é válida: [breakfast, lunch, snack, dinner]
				// 2 - verificar se existe data na bd
				// 3 - retornar consoante a existencia anterior
			    return { "category_meal": category_meal };
			}
	  	});

	}
);


// -------------------------------
//		profile route
// -------------------------------
Router.route('/profile', function () {
		this.render('loggedInUserProfile');
	}, {
		name: "profile"
	   }
);


// -------------------------------
//		settings route
// -------------------------------
Router.route('/settings', function () {
		this.render('loggedInUserSettings');
	}, {
		 name: "settings"
	   }
);


// --------------------------------------------------------------------------
//		showRandomUserProfile route
//
//		given a url like /user/1UF62bibs5415
// --------------------------------------------------------------------------
Router.route('/user/:_id', function () {

		var random_user_id = this.params._id; // "1UF62bibs5415"

		this.render('showProfileOfRandomUser', {
			data: function () {
			      return { "random_user_id" : random_user_id };
			}
	  	});

	}, {
	  	 name: 'showProfileOfRandomUser'
   	   }
);


// --------------------------------------------------------------------------
// 		showMealDetail route
//
//		given a url like    /user/1UF62bibs5415/meal/ugiygw6sbsgswg8s
// --------------------------------------------------------------------------
Router.route('/user/:user_id/meal/:meal_id', function () {

		var random_user_id = this.params.user_id; // "1UF62bibs5415"
		var random_meal_id = this.params.meal_id; // "ugiygw6sbsgswg8s"

		this.render('showMealDetail', {
			data: function () {
			      return {
			      		   "random_user_id": random_user_id,
			      		   "random_meal_id": random_meal_id
			      		  };
			}
	  	});
	}, {
	     name: 'showMealDetail'
	   }
);
