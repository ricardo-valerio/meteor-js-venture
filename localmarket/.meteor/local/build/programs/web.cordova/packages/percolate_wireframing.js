//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/percolate:wireframing/template.placeholder.js                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("placeholder");                                                                              // 2
Template["placeholder"] = new Template("Template.placeholder", (function() {                                      // 3
  var view = this;                                                                                                // 4
  return HTML.DIV({                                                                                               // 5
    "class": function() {                                                                                         // 6
      return [ "placeholder ", Spacebars.mustache(view.lookup("name")) ];                                         // 7
    },                                                                                                            // 8
    style: function() {                                                                                           // 9
      return Spacebars.mustache(view.lookup("style"));                                                            // 10
    }                                                                                                             // 11
  }, "\n    ", Blaze.View(function() {                                                                            // 12
    return Spacebars.mustache(view.lookup("name"));                                                               // 13
  }), "\n    ", Blaze._InOuterTemplateScope(view, function() {                                                    // 14
    return Spacebars.include(function() {                                                                         // 15
      return Spacebars.call(view.templateContentBlock);                                                           // 16
    });                                                                                                           // 17
  }), "\n  ");                                                                                                    // 18
}));                                                                                                              // 19
                                                                                                                  // 20
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/percolate:wireframing/placeholder.js                                                                  //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
/* A simple template for rendering placeholders for design implementation                                         // 1
 * Usage:                                                                                                         // 2
 *   {{> placeholder 'foobar'}} or {{> placeholder name='foobar'}}                                                // 3
 *                                                                                                                // 4
 * To give the placeholder a min-height of UNIT * height, do:                                                     // 5
 *   {{> placeholder name='foobar' height=3}}                                                                     // 6
 */                                                                                                               // 7
                                                                                                                  // 8
var UNIT = 20;                                                                                                    // 9
                                                                                                                  // 10
function getName(context) {                                                                                       // 11
  return context.name || context;                                                                                 // 12
}                                                                                                                 // 13
                                                                                                                  // 14
function getHeight(context) {                                                                                     // 15
  return context.height || 1;                                                                                     // 16
}                                                                                                                 // 17
                                                                                                                  // 18
Template.placeholder.helpers({                                                                                    // 19
  name: function() {                                                                                              // 20
    return getName(this);                                                                                         // 21
  },                                                                                                              // 22
  style: function() {                                                                                             // 23
    var bgColor = stringToColour(getName(this));                                                                  // 24
    var color = isDark(bgColor) ? 'white' : 'black';                                                              // 25
                                                                                                                  // 26
    return 'background-color: ' + bgColor + ';'                                                                   // 27
      + 'color: ' + color + ';'                                                                                   // 28
      + 'min-height: ' + getHeight(this) * UNIT + 'px;'                                                           // 29
      + 'min-width:' + UNIT + 'px;'                                                                               // 30
      + 'text-align: center';                                                                                     // 31
  }                                                                                                               // 32
})                                                                                                                // 33
                                                                                                                  // 34
// from: http://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript // 35
var stringToColour = function(str) {                                                                              // 36
                                                                                                                  // 37
    // str to hash                                                                                                // 38
    for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));                 // 39
                                                                                                                  // 40
    // int/hash to hex                                                                                            // 41
    for (var i = 0, colour = "#"; i < 3; colour += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));   // 42
                                                                                                                  // 43
    return colour;                                                                                                // 44
}                                                                                                                 // 45
                                                                                                                  // 46
var isDark = function(rgb) {                                                                                      // 47
  var r = parseInt(rgb.slice(1, 3));                                                                              // 48
  var g = parseInt(rgb.slice(3, 5));                                                                              // 49
  var b = parseInt(rgb.slice(3, 7));                                                                              // 50
                                                                                                                  // 51
  var hsp = Math.sqrt( // HSP equation from http://alienryderflex.com/hsp.html                                    // 52
    0.299 * (r * r) +                                                                                             // 53
    0.587 * (g * g) +                                                                                             // 54
    0.114 * (b * b)                                                                                               // 55
  );                                                                                                              // 56
                                                                                                                  // 57
  if (hsp > 127.5) {                                                                                              // 58
    return true;                                                                                                  // 59
  }                                                                                                               // 60
                                                                                                                  // 61
  return false;                                                                                                   // 62
}                                                                                                                 // 63
                                                                                                                  // 64
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['percolate:wireframing'] = {};

})();
