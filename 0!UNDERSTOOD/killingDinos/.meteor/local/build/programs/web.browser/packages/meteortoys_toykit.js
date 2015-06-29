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
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Mongo = Package.mongo.Mongo;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Session = Package.session.Session;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysData, MeteorToys_Parse, MeteorToysDict, em, pw, MeteorToys_ToyKit, displayStatus;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys:toykit/client/template.main.js                                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.body.addContent((function() {                                                                              // 2
  var view = this;                                                                                                  // 3
  return Blaze.If(function() {                                                                                      // 4
    return Spacebars.call(view.lookup("MeteorToys_Pro"));                                                           // 5
  }, function() {                                                                                                   // 6
    return [ "\n		", Blaze.If(function() {                                                                          // 7
      return Spacebars.call(view.lookup("MeteorToys"));                                                             // 8
    }, function() {                                                                                                 // 9
      return [ "\n			", HTML.DIV({                                                                                  // 10
        "class": "MeteorToys_orbs"                                                                                  // 11
      }, "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_accounts")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_shell")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_method")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_autopub")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_sub")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_intercept")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_status")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_reload")), "\n			"), "\n		" ];
    }), "\n	" ];                                                                                                    // 13
  }, function() {                                                                                                   // 14
    return [ "\n		", Blaze.If(function() {                                                                          // 15
      return Spacebars.call(view.lookup("MeteorToys"));                                                             // 16
    }, function() {                                                                                                 // 17
      return [ "\n			", HTML.DIV({                                                                                  // 18
        "class": "MeteorToys_orbs"                                                                                  // 19
      }, "\n				", Blaze._TemplateWith(function() {                                                                 // 20
        return {                                                                                                    // 21
          template: Spacebars.call(view.lookup("all"))                                                              // 22
        };                                                                                                          // 23
      }, function() {                                                                                               // 24
        return Spacebars.include(function() {                                                                       // 25
          return Spacebars.call(Template.__dynamic);                                                                // 26
        });                                                                                                         // 27
      }), "\n			"), "\n		" ];                                                                                       // 28
    }), "\n	" ];                                                                                                    // 29
  });                                                                                                               // 30
}));                                                                                                                // 31
Meteor.startup(Template.body.renderToDocument);                                                                     // 32
                                                                                                                    // 33
Template.__checkName("MeteorToy");                                                                                  // 34
Template["MeteorToy"] = new Template("Template.MeteorToy", (function() {                                            // 35
  var view = this;                                                                                                  // 36
  return HTML.DIV({                                                                                                 // 37
    "class": function() {                                                                                           // 38
      return [ "MeteorToys_orb ", Spacebars.mustache(view.lookup("type")), " ", Spacebars.mustache(view.lookup("state")) ];
    },                                                                                                              // 40
    id: function() {                                                                                                // 41
      return Spacebars.mustache(view.lookup("name"));                                                               // 42
    }                                                                                                               // 43
  }, "\n		", Blaze.If(function() {                                                                                  // 44
    return Spacebars.call(view.lookup("empty"));                                                                    // 45
  }, function() {                                                                                                   // 46
    return [ "\n			", Blaze._InOuterTemplateScope(view, function() {                                                // 47
      return Spacebars.include(function() {                                                                         // 48
        return Spacebars.call(view.templateContentBlock);                                                           // 49
      });                                                                                                           // 50
    }), "\n		" ];                                                                                                   // 51
  }, function() {                                                                                                   // 52
    return [ "\n			", HTML.DIV({                                                                                    // 53
      "class": "MeteorToys_icon"                                                                                    // 54
    }), "\n			", HTML.DIV({                                                                                         // 55
      "class": "MeteorToys_orb_wrapper"                                                                             // 56
    }, "\n				", Blaze._InOuterTemplateScope(view, function() {                                                     // 57
      return Spacebars.include(function() {                                                                         // 58
        return Spacebars.call(view.templateContentBlock);                                                           // 59
      });                                                                                                           // 60
    }), "\n			"), "\n		" ];                                                                                         // 61
  }), "\n	");                                                                                                       // 62
}));                                                                                                                // 63
                                                                                                                    // 64
Template.__checkName("MeteorToys_basic");                                                                           // 65
Template["MeteorToys_basic"] = new Template("Template.MeteorToys_basic", (function() {                              // 66
  var view = this;                                                                                                  // 67
  return Blaze._TemplateWith(function() {                                                                           // 68
    return {                                                                                                        // 69
      name: Spacebars.call("MeteorToys_basic")                                                                      // 70
    };                                                                                                              // 71
  }, function() {                                                                                                   // 72
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                         // 73
      return [ "\n		", HTML.DIV({                                                                                   // 74
        "class": "MeteorToys_sub_header"                                                                            // 75
      }, "\n			Activate Meteor Toys\n		"), "\n		", HTML.DIV({                                                       // 76
        "class": "MeteorToys_sub_content"                                                                           // 77
      }, "\n\n		", HTML.FORM("\n\n			", HTML.DIV({                                                                  // 78
        "class": "MeteorToys_row"                                                                                   // 79
      }, "\n				", HTML.INPUT({                                                                                     // 80
        id: "meteortoyscadf"                                                                                        // 81
      }), "\n				", HTML.DIV({                                                                                      // 82
        "class": "MeteorToys_row_name"                                                                              // 83
      }, "Email"), "\n			"), "\n\n			", HTML.DIV({                                                                  // 84
        "class": "MeteorToys_row"                                                                                   // 85
      }, "\n				", HTML.INPUT({                                                                                     // 86
        id: "meteortoyspass"                                                                                        // 87
      }), "\n				", HTML.DIV({                                                                                      // 88
        "class": "MeteorToys_row_name"                                                                              // 89
      }, "Serial"), "\n			"), "\n\n\n				", HTML.INPUT({                                                            // 90
        type: "submit",                                                                                             // 91
        value: "Activate",                                                                                          // 92
        style: "margin-top: -4px"                                                                                   // 93
      }), "\n				\n				", HTML.BR(), HTML.BR(), HTML.BR(), HTML.BR(), HTML.BR(), HTML.BR(), HTML.BR(), HTML.BR(), "\n				", HTML.DIV({
        style: "height:10px;"                                                                                       // 95
      }), "\n				Experience the next level", HTML.BR(), " of JetSetter and Mongol. ", HTML.BR(), "\n				", HTML.A({ // 96
        href: "http://bit.ly/1FqdsPM"                                                                               // 97
      }, "See Meteor Toys ", HTML.CharRef({                                                                         // 98
        html: "&raquo;",                                                                                            // 99
        str: "»"                                                                                                    // 100
      })), "\n\n\n		"), "\n		"), "\n	" ];                                                                           // 101
    });                                                                                                             // 102
  });                                                                                                               // 103
}));                                                                                                                // 104
                                                                                                                    // 105
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys:toykit/client/main.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
MeteorToysDict = new ReactiveDict('MeteorToys');                                                                    // 1
                                                                                                                    // 2
UI.registerHelper('MeteorToys', function(){                                                                         // 3
  return MeteorToysDict.get("MeteorToys_display");                                                                  // 4
});                                                                                                                 // 5
                                                                                                                    // 6
Template.MeteorToy.helpers({                                                                                        // 7
  type: function () {                                                                                               // 8
    if (this.type === "button") {                                                                                   // 9
        return "MeteorToys_button";                                                                                 // 10
    }                                                                                                               // 11
  },                                                                                                                // 12
  state: function () {                                                                                              // 13
    if (MeteorToysDict.equals("MeteorToys_current", this.name)) {                                                   // 14
      return "MeteorToys_orb_active";                                                                               // 15
    } else {                                                                                                        // 16
      return "MeteorToys_orb_condensed";                                                                            // 17
    }                                                                                                               // 18
  }                                                                                                                 // 19
});                                                                                                                 // 20
                                                                                                                    // 21
Template.MeteorToy.events({                                                                                         // 22
  'click .MeteorToys_orb': function () {                                                                            // 23
    if (this.name === "MeteorToys_autopub") {                                                                       // 24
      return false;                                                                                                 // 25
    }                                                                                                               // 26
                                                                                                                    // 27
    if (MeteorToysDict.get("MeteorToys_current") === this.name) {                                                   // 28
      MeteorToysDict.set("MeteorToys_current", false)                                                               // 29
    } else {                                                                                                        // 30
      MeteorToysDict.set("MeteorToys_current", this.name)                                                           // 31
    }                                                                                                               // 32
  },                                                                                                                // 33
  'click .MeteorToys_orb_wrapper': function (event, t) {                                                            // 34
    if ($('#' + this.name).hasClass('MeteorToys_orb_active')) {                                                     // 35
      event.stopPropagation();                                                                                      // 36
    }                                                                                                               // 37
  },                                                                                                                // 38
  'click .MeteorToys_name': function () {                                                                           // 39
    MeteorToysDict.set("MeteorToys_current", false);                                                                // 40
  }                                                                                                                 // 41
});                                                                                                                 // 42
                                                                                                                    // 43
Template.body.helpers({                                                                                             // 44
  all: function () {                                                                                                // 45
    if (Package["meteortoys:allthings"]) {                                                                          // 46
      return "MeteorToys_basic";                                                                                    // 47
    }                                                                                                               // 48
  }                                                                                                                 // 49
});                                                                                                                 // 50
                                                                                                                    // 51
Template.MeteorToys_basic.events({                                                                                  // 52
  'submit': function (e, t) {                                                                                       // 53
                                                                                                                    // 54
    e.preventDefault();                                                                                             // 55
                                                                                                                    // 56
    em = $("#meteortoyscadf").val(),                                                                                // 57
    pw = $("#meteortoyspass").val();                                                                                // 58
                                                                                                                    // 59
    if (em === "") {                                                                                                // 60
      alert("Please enter an email");                                                                               // 61
      return false;                                                                                                 // 62
    }                                                                                                               // 63
                                                                                                                    // 64
    if (pw === "") {                                                                                                // 65
      alert("Please enter a license");                                                                              // 66
      return false;                                                                                                 // 67
    }                                                                                                               // 68
                                                                                                                    // 69
                                                                                                                    // 70
    Meteor.call("Mongol_verifyDoc", em, pw, function (e,r) {                                                        // 71
      if (r) {                                                                                                      // 72
        Meteor._reload.reload();                                                                                    // 73
        alert("Thanks for buying Meteor Toys!")                                                                     // 74
      } else {                                                                                                      // 75
        alert("Invalid Credentials. Please try again.");                                                            // 76
      }                                                                                                             // 77
    });                                                                                                             // 78
                                                                                                                    // 79
  }                                                                                                                 // 80
});                                                                                                                 // 81
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys:toykit/client/functions.js                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
// Start by observing                                                                                               // 1
Meteor.startup(function(){                                                                                          // 2
  MeteorToys_ToyKit.hotKeys();                                                                                      // 3
});                                                                                                                 // 4
                                                                                                                    // 5
MeteorToys_ToyKit = {                                                                                               // 6
  observe: function () {                                                                                            // 7
                                                                                                                    // 8
    // first load                                                                                                   // 9
    MeteorToys_ToyKit.runPubSub();                                                                                  // 10
    MeteorToys_ToyKit.runJetSetter();                                                                               // 11
                                                                                                                    // 12
    // start                                                                                                        // 13
    if (!Object.observe) {                                                                                          // 14
      setInterval(function(){                                                                                       // 15
        MeteorToys_ToyKit.runPubSub();                                                                              // 16
        MeteorToys_ToyKit.runJetSetter();                                                                           // 17
      }, 3000);                                                                                                     // 18
    } else {                                                                                                        // 19
      Object.observe(Meteor.default_connection._subscriptions, function() {                                         // 20
        MeteorToys_ToyKit.runPubSub();                                                                              // 21
      })                                                                                                            // 22
      Object.observe(Session.keys, function () {                                                                    // 23
        MeteorToys_ToyKit.runJetSetter();                                                                           // 24
      })                                                                                                            // 25
    }                                                                                                               // 26
    // end                                                                                                          // 27
  },                                                                                                                // 28
  hotKeys: function () {                                                                                            // 29
    // start                                                                                                        // 30
    $(document).keydown(function (e) {                                                                              // 31
      if (e.keyCode === 77 && e.ctrlKey) {                                                                          // 32
        MeteorToys_ToyKit.toggleDisplay();                                                                          // 33
      }                                                                                                             // 34
    });                                                                                                             // 35
    // end                                                                                                          // 36
  },                                                                                                                // 37
  toggleDisplay: function () {                                                                                      // 38
                                                                                                                    // 39
    var displayStatus = MeteorToysDict.get("MeteorToys_display");                                                   // 40
                                                                                                                    // 41
    // Start Toy Processes                                                                                          // 42
    // Break this out into seperate function later                                                                  // 43
    if (typeof displayStatus  === 'undefined') {                                                                    // 44
      MeteorToys_ToyKit.observe();                                                                                  // 45
      Tracker.autorun(function () {                                                                                 // 46
        Meteor.subscribe("MeteorToys", MeteorToysDict.get("MeteorToys_autopublish"));                               // 47
      });                                                                                                           // 48
    }                                                                                                               // 49
                                                                                                                    // 50
    if (displayStatus) {                                                                                            // 51
      MeteorToysDict.set("MeteorToys_display", false);                                                              // 52
    } else {                                                                                                        // 53
      MeteorToysDict.set("MeteorToys_display", true);                                                               // 54
    }                                                                                                               // 55
                                                                                                                    // 56
  },                                                                                                                // 57
  runJetSetter: function () {                                                                                       // 58
    if (Package["msavin:jetsetter"]) {                                                                              // 59
      Package["msavin:jetsetter"].JetSetter.getKeys();                                                              // 60
    }                                                                                                               // 61
  },                                                                                                                // 62
  runPubSub: function () {                                                                                          // 63
    if (Package["msavin:sub"] || Package["msavin:mongol"]) {                                                        // 64
                                                                                                                    // 65
      var subscriptions  = Meteor.default_connection._subscriptions,                                                // 66
          subKeys        = Object.keys(subscriptions);                                                              // 67
                                                                                                                    // 68
      MeteorToysDict.set("MeteorToys_PubSub", subKeys);                                                             // 69
                                                                                                                    // 70
    }                                                                                                               // 71
  }                                                                                                                 // 72
}                                                                                                                   // 73
                                                                                                                    // 74
                                                                                                                    // 75
// Public Function                                                                                                  // 76
                                                                                                                    // 77
MeteorToys_Parse = function (data) {                                                                                // 78
  var newObject = false;                                                                                            // 79
                                                                                                                    // 80
  try {                                                                                                             // 81
    newObject = JSON.parse(data);                                                                                   // 82
                                                                                                                    // 83
  } catch (error) {                                                                                                 // 84
    newObject = String(data)                                                                                        // 85
  }                                                                                                                 // 86
                                                                                                                    // 87
  return newObject;                                                                                                 // 88
}                                                                                                                   // 89
                                                                                                                    // 90
// Fix for Hot Reload                                                                                               // 91
                                                                                                                    // 92
displayStatus = MeteorToysDict.get("MeteorToys_display");                                                           // 93
                                                                                                                    // 94
if (typeof displayStatus  === 'undefined') {                                                                        // 95
                                                                                                                    // 96
} else {                                                                                                            // 97
  MeteorToysDict.set("MeteorToys_PubSub", null);                                                                    // 98
  MeteorToys_ToyKit.observe();                                                                                      // 99
                                                                                                                    // 100
                                                                                                                    // 101
  Tracker.autorun(function () {                                                                                     // 102
    Meteor.subscribe("MeteorToys", MeteorToysDict.get("MeteorToys_autopublish"));                                   // 103
  });                                                                                                               // 104
}                                                                                                                   // 105
                                                                                                                    // 106
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/meteortoys:toykit/lib/collections.js                                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
MeteorToysData = {                                                                                                  // 1
	'Impersonate': new Mongo.Collection("MeteorToys_Impersonate"),                                                     // 2
	'JetSetter':   new Mongo.Collection("MeteorToys_JetSetter"),                                                       // 3
	'Mongol':      new Mongo.Collection("MeteorToys_Mongol"),                                                          // 4
}                                                                                                                   // 5
                                                                                                                    // 6
MeteorToysData.Impersonate.allow({                                                                                  // 7
	insert: function () {                                                                                              // 8
	    return true;                                                                                                   // 9
	},                                                                                                                 // 10
	remove: function (){                                                                                               // 11
	    return true;                                                                                                   // 12
	},                                                                                                                 // 13
	update: function() {                                                                                               // 14
	    return true;                                                                                                   // 15
	}                                                                                                                  // 16
});                                                                                                                 // 17
                                                                                                                    // 18
MeteorToysData.JetSetter.allow({                                                                                    // 19
	insert: function () {                                                                                              // 20
	    return true;                                                                                                   // 21
	},                                                                                                                 // 22
	remove: function (){                                                                                               // 23
	    return true;                                                                                                   // 24
	},                                                                                                                 // 25
	update: function() {                                                                                               // 26
	    return true;                                                                                                   // 27
	}                                                                                                                  // 28
});                                                                                                                 // 29
                                                                                                                    // 30
MeteorToysData.Mongol.allow({                                                                                       // 31
	insert: function () {                                                                                              // 32
	    return true;                                                                                                   // 33
	},                                                                                                                 // 34
	remove: function (){                                                                                               // 35
	    return true;                                                                                                   // 36
	},                                                                                                                 // 37
	update: function() {                                                                                               // 38
	    return true;                                                                                                   // 39
	}                                                                                                                  // 40
});                                                                                                                 // 41
                                                                                                                    // 42
if (Meteor.isServer) {                                                                                              // 43
	MeteorToysData["credentials"] = new Mongo.Collection("MeteorToysCredentials");                                     // 44
}                                                                                                                   // 45
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:toykit'] = {
  MeteorToysData: MeteorToysData,
  MeteorToys_Parse: MeteorToys_Parse,
  MeteorToysDict: MeteorToysDict
};

})();
