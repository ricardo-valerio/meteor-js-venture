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
var ReactiveVar = Package['reactive-var'].ReactiveVar;

/* Package-scope variables */
var Geolocation;

(function () {

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/mdg:geolocation/geolocation.js                                            //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
// is location refreshing currently on?                                               // 1
var watchingPosition = false;                                                         // 2
                                                                                      // 3
// current location variable and dependency                                           // 4
var location = new ReactiveVar(null);                                                 // 5
                                                                                      // 6
// error variable and dependency                                                      // 7
var error = new ReactiveVar(null);                                                    // 8
                                                                                      // 9
// options for watchPosition                                                          // 10
var options = {                                                                       // 11
  enableHighAccuracy: true,                                                           // 12
  maximumAge: 0                                                                       // 13
};                                                                                    // 14
                                                                                      // 15
var onError = function (newError) {                                                   // 16
  error.set(newError);                                                                // 17
};                                                                                    // 18
                                                                                      // 19
var onPosition = function (newLocation) {                                             // 20
  location.set(newLocation);                                                          // 21
  error.set(null);                                                                    // 22
};                                                                                    // 23
                                                                                      // 24
var startWatchingPosition = function () {                                             // 25
  if (! watchingPosition && navigator.geolocation) {                                  // 26
    navigator.geolocation.watchPosition(onPosition, onError, options);                // 27
    watchingPosition = true;                                                          // 28
  }                                                                                   // 29
};                                                                                    // 30
                                                                                      // 31
// exports                                                                            // 32
                                                                                      // 33
/**                                                                                   // 34
 * @summary The namespace for all geolocation functions.                              // 35
 * @namespace                                                                         // 36
 */                                                                                   // 37
Geolocation = {                                                                       // 38
  /**                                                                                 // 39
   * @summary Get the current geolocation error                                       // 40
   * @return {PositionError} The                                                      // 41
   * [position error](https://developer.mozilla.org/en-US/docs/Web/API/PositionError) // 42
   * that is currently preventing position updates.                                   // 43
   */                                                                                 // 44
  error: function () {                                                                // 45
    startWatchingPosition();                                                          // 46
    return error.get();                                                               // 47
  },                                                                                  // 48
                                                                                      // 49
  /**                                                                                 // 50
   * @summary Get the current location                                                // 51
   * @return {Position | null} The                                                    // 52
   * [position](https://developer.mozilla.org/en-US/docs/Web/API/Position)            // 53
   * that is reported by the device, or null if no position is available.             // 54
   */                                                                                 // 55
  currentLocation: function () {                                                      // 56
    startWatchingPosition();                                                          // 57
    return location.get();                                                            // 58
  },                                                                                  // 59
  // simple version of location; just lat and lng                                     // 60
                                                                                      // 61
  /**                                                                                 // 62
   * @summary Get the current latitude and longitude                                  // 63
   * @return {Object | null} An object with `lat` and `lng` properties,               // 64
   * or null if no position is available.                                             // 65
   */                                                                                 // 66
  latLng: function () {                                                               // 67
    var loc = Geolocation.currentLocation();                                          // 68
                                                                                      // 69
    if (loc) {                                                                        // 70
      return {                                                                        // 71
        lat: loc.coords.latitude,                                                     // 72
        lng: loc.coords.longitude                                                     // 73
      };                                                                              // 74
    }                                                                                 // 75
                                                                                      // 76
    return null;                                                                      // 77
  }                                                                                   // 78
};                                                                                    // 79
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mdg:geolocation'] = {
  Geolocation: Geolocation
};

})();
