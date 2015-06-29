(function(){
Template.__checkName("about");
Template["about"] = new Template("Template.about", (function() {
  var view = this;
  return HTML.DIV({
    "class": "page about"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("About"),
      black: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"));
  }), HTML.Raw('\n\n    <div class="content-scrollable">\n      <div class="bg-image about">\n        <h1 class="title-about">\n          <img src="img/app/title-about.svg" alt="Go Local">\n        </h1>\n      </div>\n      <div class="description-about">\n        <p>Be a local wherever you go. Connect to Local Market’s community to get the latest news, hand-picked recipes, and share with other locals. This season\'s recipes were chosen by San Francisco chefs Colin Kull of <a href="http://www.rangesf.com/" target="_blank" class="js-open">Range</a>, Laurie Ellen Pellicano of <a href="http://www.tartinebakery.com/" target="_blank" class="js-open">Tartine Bakery</a>, and Ren Rossini of <a href="http://www.fattedcalf.com/" target="_blank" class="js-open">Fatted Calf</a>.</p>\n\n        <p>Local Market was made by <a href="http://percolatestudio.com" target="_blank" class="js-open">Percolate Studio</a> as an example of a cross platform mobile app built in <a href="https://www.meteor.com" target="_blank" class="js-open">Meteor</a>. The entire app is less than 1,000 lines of JavaScript. View the source on <a href="https://github.com/meteor/meteor/tree/devel/examples/localmarket" target="_blank" class="js-open">GitHub</a>.</p>\n      </div>\n\n    </div>\n    <a href="https://www.meteor.com" class="btn-primary js-open" target="_blank">Learn More</a>\n  '));
}));

})();
