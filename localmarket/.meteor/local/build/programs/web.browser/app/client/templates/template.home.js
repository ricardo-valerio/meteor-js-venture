(function(){
Template.__checkName("home");
Template["home"] = new Template("Template.home", (function() {
  var view = this;
  return HTML.DIV({
    "class": "page home"
  }, "\n\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Local Market"),
      black: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"));
  }), "\n\n    ", HTML.DIV({
    "class": "content-scrollable"
  }, "\n      ", HTML.Raw('<div class="bg-image home">\n        <h1 class="title-home">\n          <img src="img/app/logo-local.svg" alt="Local Market">\n        </h1>\n        <span class="hours"><span class="title-callout">Hours</span>\n        Mon–Fri 9-6pm, Sat 10-5pm</span>\n        <span class="arrow"></span>\n      </div>'), "\n\n      ", HTML.DIV({
    "class": "callout-news"
  }, "\n        ", HTML.Raw('<span class="title-callout">News</span>'), "\n        ", Blaze.View("lookup:latestNews.text", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("latestNews"), "text"));
  }), "\n      "), "\n\n      ", HTML.Raw('<h2 class="list-title">What\'s Cooking</h2>'), "\n      ", HTML.Raw('<div class="list-subtitle">See what the community is cooking</div>'), "\n      ", HTML.DIV({
    "class": "list-activities"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("activities"));
  }, function() {
    return [ "\n          ", Spacebars.include(view.lookupTemplate("activity")), "\n        " ];
  }, function() {
    return [ "\n          ", HTML.DIV({
      "class": "wrapper-message"
    }, "\n            ", HTML.DIV({
      "class": "title-message"
    }, "No one is cooking yet!"), "\n            ", HTML.DIV({
      "class": "subtitle-message"
    }, "Share that you made a recipe and it will show up here."), "\n          "), "\n        " ];
  }), "\n      "), "\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "feed");
    },
    "class": "btn-primary"
  }, "See what's cooking"), "\n\n      ", HTML.Raw('<h2 class="list-title">Our Favorite Recipes</h2>'), "\n      ", HTML.Raw('<div class="list-subtitle">Hand-picked by neighborhood chefs</div>'), "\n      ", HTML.DIV({
    "class": "list-recipes"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("featuredRecipes"));
  }, function() {
    return [ "\n          ", Blaze._TemplateWith(function() {
      return {
        recipe: Spacebars.call(view.lookup(".")),
        size: Spacebars.call("small")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("recipeItem"));
    }), "\n        " ];
  }), "\n      "), "\n\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "recipes");
    },
    "class": "btn-primary"
  }, "Explore all our recipes"), "\n    "), "\n\n  ");
}));

})();
