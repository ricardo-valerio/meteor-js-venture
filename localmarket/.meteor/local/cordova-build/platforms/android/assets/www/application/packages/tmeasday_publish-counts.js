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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Mongo = Package.mongo.Mongo;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Counts, next, publishCount;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// packages/tmeasday:publish-counts/publish-counts.js                                                //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
if (Meteor.isServer) {                                                                               // 1
  Counts = {};                                                                                       // 2
  Counts.publish = function(self, name, cursor, options) {                                           // 3
    var count = 0;                                                                                   // 4
    var initializing = true;                                                                         // 5
    var handle;                                                                                      // 6
    options = options || {};                                                                         // 7
                                                                                                     // 8
    if (options.countFromFieldLength && options.nonReactive)                                         // 9
      throw new Error("options.nonReactive is not yet supported with options.countFromFieldLength"); // 10
                                                                                                     // 11
    if (options.countFromFieldLength)                                                                // 12
      var prev = {};                                                                                 // 13
                                                                                                     // 14
    // ensure the cursor doesn't fetch more than it has to                                           // 15
    cursor._cursorDescription.options.fields = {_id: true};                                          // 16
    if (options.countFromFieldLength)                                                                // 17
      cursor._cursorDescription.options.fields[options.countFromFieldLength] = true;                 // 18
                                                                                                     // 19
    var observers = {                                                                                // 20
      added: function(id, fields) {                                                                  // 21
        if (options.countFromFieldLength) {                                                          // 22
          if (! fields[options.countFromFieldLength])                                                // 23
            return;                                                                                  // 24
                                                                                                     // 25
          count += fields[options.countFromFieldLength].length;                                      // 26
          prev[id] = count;                                                                          // 27
        } else {                                                                                     // 28
          count += 1;                                                                                // 29
        }                                                                                            // 30
                                                                                                     // 31
        if (! initializing)                                                                          // 32
          self.changed('counts', name, { count: count });                                            // 33
      },                                                                                             // 34
      removed: function(id, fields) {                                                                // 35
        count -= options.countFromFieldLength ? fields[options.countFromFieldLength].length : 1;     // 36
        self.changed('counts', name, { count: count });                                              // 37
      }                                                                                              // 38
    };                                                                                               // 39
                                                                                                     // 40
    if (options.countFromFieldLength) {                                                              // 41
      observers.changed = function(id, fields) {                                                     // 42
        if (! fields[options.countFromFieldLength])                                                  // 43
          return;                                                                                    // 44
                                                                                                     // 45
        next = fields[options.countFromFieldLength].length;                                          // 46
        count += next - prev[id];                                                                    // 47
        prev[id] = next;                                                                             // 48
                                                                                                     // 49
        self.changed('counts', name, { count: count });                                              // 50
      };                                                                                             // 51
    }                                                                                                // 52
                                                                                                     // 53
    if (! options.countFromFieldLength && initializing) {                                            // 54
      self.added('counts', name, { count: cursor.count() });                                         // 55
      if (! options.noReady)                                                                         // 56
        self.ready();                                                                                // 57
    }                                                                                                // 58
                                                                                                     // 59
    if (! options.nonReactive)                                                                       // 60
      handle = cursor.observeChanges(observers);                                                     // 61
                                                                                                     // 62
    if (options.countFromFieldLength)                                                                // 63
      self.added('counts', name, { count: count });                                                  // 64
                                                                                                     // 65
    if (! options.noReady)                                                                           // 66
      self.ready();                                                                                  // 67
                                                                                                     // 68
    initializing = false;                                                                            // 69
                                                                                                     // 70
    self.onStop(function() {                                                                         // 71
      if (handle)                                                                                    // 72
        handle.stop();                                                                               // 73
    });                                                                                              // 74
                                                                                                     // 75
    return {                                                                                         // 76
      stop: function() {                                                                             // 77
        if (handle) {                                                                                // 78
          handle.stop();                                                                             // 79
          handle = undefined;                                                                        // 80
        }                                                                                            // 81
      }                                                                                              // 82
    };                                                                                               // 83
  };                                                                                                 // 84
  // back compatibility                                                                              // 85
  publishCount = Counts.publish;                                                                     // 86
}                                                                                                    // 87
                                                                                                     // 88
if (Meteor.isClient) {                                                                               // 89
  Counts = new Mongo.Collection('counts');                                                           // 90
                                                                                                     // 91
  Counts.get = function(name) {                                                                      // 92
    var count = this.findOne(name);                                                                  // 93
    return count && count.count;                                                                     // 94
  };                                                                                                 // 95
                                                                                                     // 96
  UI.registerHelper('getPublishedCount', function(name) {                                            // 97
    return Counts.get(name);                                                                         // 98
  });                                                                                                // 99
}                                                                                                    // 100
                                                                                                     // 101
///////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['tmeasday:publish-counts'] = {
  Counts: Counts
};

})();
