(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var MeteorToysDict, Mongol, currentDocument, revisedDocument, newId, targetCollection, trashDocument;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/lib/common.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
MeteorToysDict = Package["meteortoys:toykit"].MeteorToysDict;                                                          // 1
                                                                                                                       // 2
if (Mongol === undefined) {                                                                                            // 3
                                                                                                                       // 4
  // Create object and reserve name across the package                                                                 // 5
  Mongol = {};                                                                                                         // 6
                                                                                                                       // 7
}                                                                                                                      // 8
                                                                                                                       // 9
Mongol = {                                                                                                             // 10
  'colorize': function (json) {                                                                                        // 11
    // colorized the JSON objects                                                                                      // 12
    if (typeof json != 'string') {                                                                                     // 13
      json = JSON.stringify(json, undefined, 2);                                                                       // 14
    }                                                                                                                  // 15
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');                                    // 16
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
      var cls = 'Mongol_number';                                                                                       // 18
      if (/^"/.test(match)) {                                                                                          // 19
        if (/:$/.test(match)) {                                                                                        // 20
          cls = 'Mongol_key';                                                                                          // 21
        } else {                                                                                                       // 22
          cls = 'Mongol_string';                                                                                       // 23
        }                                                                                                              // 24
      } else if (/true|false/.test(match)) {                                                                           // 25
        cls = 'Mongol_boolean';                                                                                        // 26
      } else if (/null/.test(match)) {                                                                                 // 27
        cls = 'Mongol_null';                                                                                           // 28
      }                                                                                                                // 29
      return '<span class="' + cls + '">' + match + '</span>';                                                         // 30
    });                                                                                                                // 31
  },                                                                                                                   // 32
  'getDocumentUpdate': function (data) {                                                                               // 33
                                                                                                                       // 34
    var elementID = 'MongolDoc_' + data,                                                                               // 35
      newData = document.getElementById(elementID).textContent;                                                        // 36
                                                                                                                       // 37
    return newData;                                                                                                    // 38
                                                                                                                       // 39
  },                                                                                                                   // 40
  'error': function (data) {                                                                                           // 41
                                                                                                                       // 42
    switch (data) {                                                                                                    // 43
      case "json.parse":                                                                                               // 44
        alert("There is an error with your JSON syntax.\n\nNote: keys and string values need double quotes.");         // 45
        break;                                                                                                         // 46
      case "duplicate":                                                                                                // 47
        alert("Strange, there was an error duplicating your document.");                                               // 48
        break;                                                                                                         // 49
      case "remove":                                                                                                   // 50
        alert("Strange, there was an error removing your document.");                                                  // 51
        break;                                                                                                         // 52
      case "insert":                                                                                                   // 53
        alert("Strange, there was an error inserting your document.");                                                 // 54
        break;                                                                                                         // 55
      case "update":                                                                                                   // 56
        alert("There was an error updating your document. Please review your changes and try again.");                 // 57
        break;                                                                                                         // 58
      default:                                                                                                         // 59
        return "Unknown Error";                                                                                        // 60
        break;                                                                                                         // 61
    }                                                                                                                  // 62
                                                                                                                       // 63
  },                                                                                                                   // 64
  'parse': function (data) {                                                                                           // 65
    var newObject = false;                                                                                             // 66
                                                                                                                       // 67
    try {                                                                                                              // 68
      newObject = JSON.parse(data);                                                                                    // 69
    }                                                                                                                  // 70
                                                                                                                       // 71
    catch (error) {                                                                                                    // 72
      Mongol.error("json.parse");                                                                                      // 73
    }                                                                                                                  // 74
                                                                                                                       // 75
    return newObject;                                                                                                  // 76
                                                                                                                       // 77
  },                                                                                                                   // 78
  'setSubscriptionKeys': function () {                                                                                 // 79
                                                                                                                       // 80
      // var subscriptions  = Meteor.default_connection._subscriptions,                                                // 81
          // subKeys        = Object.keys(subscriptions);                                                              // 82
                                                                                                                       // 83
          // MeteorToysDict.set("MeteorToys_PubSub", subKeys)                                                          // 84
                                                                                                                       // 85
  },                                                                                                                   // 86
  'detectCollections': function () {                                                                                   // 87
    if (MeteorToysDict.get('Mongol') === undefined) {                                                                  // 88
        // Note: this returns the actual mongo collection name                                                         // 89
        var collections = _.map(Mongo.Collection.getAll(), function (collection) {                                     // 90
        return collection.name;                                                                                        // 91
      });                                                                                                              // 92
                                                                                                                       // 93
      var defaults = {                                                                                                 // 94
        'collections': collections,                                                                                    // 95
      };                                                                                                               // 96
                                                                                                                       // 97
      MeteorToysDict.set("Mongol", defaults);                                                                          // 98
                                                                                                                       // 99
    }                                                                                                                  // 100
  },                                                                                                                   // 101
  'hideCollection': function (collectionName) {                                                                        // 102
                                                                                                                       // 103
    var MongolConfig = MeteorToysDict.get("Mongol") || {},                                                             // 104
        collections  = MongolConfig.collections || {};                                                                 // 105
                                                                                                                       // 106
    collections = _.without(collections, collectionName);                                                              // 107
    MongolConfig.collections = collections;                                                                            // 108
    MeteorToysDict.set("Mongol", MongolConfig);                                                                        // 109
                                                                                                                       // 110
  },                                                                                                                   // 111
  'showCollection': function (collectionName) {                                                                        // 112
                                                                                                                       // 113
    // In case a collection does not get detected, like a local one                                                    // 114
    var MongolConfig = MeteorToysDict.get("Mongol") || {},                                                             // 115
        collections  = MongolConfig.collections || {};                                                                 // 116
                                                                                                                       // 117
    collections.push(collectionName);                                                                                  // 118
                                                                                                                       // 119
    MeteorToysDict.set("Mongol", MongolConfig);                                                                        // 120
                                                                                                                       // 121
  },                                                                                                                   // 122
  'Collection': function (collectionName) {                                                                            // 123
                                                                                                                       // 124
                                                                                                                       // 125
    // Go through a variety of means of trying to return the correct collection                                        // 126
    return Mongo.Collection.get(collectionName)                                                                        // 127
      // This should automatically match all collections by default                                                    // 128
      // including namespaced collections                                                                              // 129
                                                                                                                       // 130
    || ((Meteor.isServer) ? eval(collectionName) : Meteor._get.apply(null,[window].concat(collectionName.split('.')))) // 131
    // For user defined collection names                                                                               // 132
    // in the form of Meteor's Mongo.Collection names as strings                                                       // 133
                                                                                                                       // 134
    || ((Meteor.isServer) ? eval(firstToUpper(collectionName)) : Meteor._get.apply(null,[window].concat(firstToUpper(collectionName).split('.'))))
    // For user defined collections where the user has typical upper-case collection names                             // 136
    // but they've put actual mongodb collection names into the Mongol config instead of Meteor's Mongo.Collection names as strings
                                                                                                                       // 138
    || null;                                                                                                           // 139
    // If the user has gone for unconventional casing of collection names,                                             // 140
    // they'll have to get them right (i.e. Meteor's Mongo.Collection names as string) in the Mongol config manually   // 141
                                                                                                                       // 142
  }                                                                                                                    // 143
}                                                                                                                      // 144
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/server/methods.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// // // // // // // // // // // // // // // // // // // // // //                                                      // 1
//                                                                                                                     // 2
// TODO:                                                                                                               // 3
// - For update, diff document changes and use $set for changes                                                        // 4
//   to control date fields from database level                                                                        // 5
// - For duplicate, use actual MongoDB duplicate function                                                              // 6
//                                                                                                                     // 7
// Pull request welcome here!                                                                                          // 8
//                                                                                                                     // 9
// // // // // // // // // // // // // // // // // // // // // //                                                      // 10
                                                                                                                       // 11
var dateParser = function (updatedDocumentData) {                                                                      // 12
                                                                                                                       // 13
  // Purpose: Convert date strings to Date()                                                                           // 14
  // This is hacky but works in most cases                                                                             // 15
  // Won't merge into Mongol namespace until its good                                                                  // 16
                                                                                                                       // 17
  currentDocument = updatedDocumentData;                                                                               // 18
  revisedDocument = currentDocument;                                                                                   // 19
                                                                                                                       // 20
  // Loop over object                                                                                                  // 21
  // Replace date strings with dates                                                                                   // 22
  for (var key in currentDocument) {                                                                                   // 23
    if (currentDocument.hasOwnProperty(key)) {                                                                         // 24
                                                                                                                       // 25
      var t_self = currentDocument[key],                                                                               // 26
          t_date;                                                                                                      // 27
                                                                                                                       // 28
                                                                                                                       // 29
      if (t_self) {                                                                                                    // 30
        // check its a string to avoid hooking t/f values                                                              // 31
        if (typeof t_self === 'string') {                                                                              // 32
        // ensure its not just a number                                                                                // 33
        // need a stronger test here                                                                                   // 34
          if (/\s/g.test(t_self)) {                                                                                    // 35
            // attempt to convert to date                                                                              // 36
            t_date = new Date(t_self);                                                                                 // 37
          }                                                                                                            // 38
        }                                                                                                              // 39
      }                                                                                                                // 40
                                                                                                                       // 41
      if (Object.prototype.toString.call(t_date) === '[object Date]') {                                                // 42
        if ( isNaN( t_date.getTime() ) ) {                                                                             // 43
           // do nothing                                                                                               // 44
         }                                                                                                             // 45
         else {                                                                                                        // 46
           revisedDocument[key] = t_date;                                                                              // 47
         }                                                                                                             // 48
      }                                                                                                                // 49
                                                                                                                       // 50
    }                                                                                                                  // 51
  }                                                                                                                    // 52
                                                                                                                       // 53
  // return the processed document                                                                                     // 54
  return revisedDocument;                                                                                              // 55
                                                                                                                       // 56
}                                                                                                                      // 57
                                                                                                                       // 58
var insertDoc = function (MongolCollection, documentData) {                                                            // 59
  if (!!Package['aldeed:simple-schema'] && !!Package['aldeed:collection2'] && _.isFunction(MongolCollection.simpleSchema) && MongolCollection._c2) {
    // This is to nullify the effects of SimpleSchema/Collection2                                                      // 61
    newId = MongolCollection.insert(documentData, {                                                                    // 62
      filter: false,                                                                                                   // 63
      autoConvert: false,                                                                                              // 64
      removeEmptyStrings: false,                                                                                       // 65
      validate: false                                                                                                  // 66
    });                                                                                                                // 67
  }                                                                                                                    // 68
  else {                                                                                                               // 69
    newId = MongolCollection.insert(documentData);                                                                     // 70
  }                                                                                                                    // 71
  return newId;                                                                                                        // 72
}                                                                                                                      // 73
                                                                                                                       // 74
Meteor.methods({                                                                                                       // 75
  Mongol_update: function (collectionName, documentData, originalDocumentData) {                                       // 76
                                                                                                                       // 77
    check(collectionName, String);                                                                                     // 78
    check(documentData, Object);                                                                                       // 79
    check(originalDocumentData, Object);                                                                               // 80
                                                                                                                       // 81
    var MongolCollection = Mongol.Collection(collectionName),                                                          // 82
      documentID = documentData._id;                                                                                   // 83
                                                                                                                       // 84
    var currentDbDoc = MongolCollection.findOne({                                                                      // 85
      _id: documentID                                                                                                  // 86
    }, {                                                                                                               // 87
      transform: null                                                                                                  // 88
    });                                                                                                                // 89
                                                                                                                       // 90
    if (!currentDbDoc) {                                                                                               // 91
      // A document with this _id value is not in the db                                                               // 92
      // Do an insert instead                                                                                          // 93
      Meteor.call("Mongol_insert", collectionName, documentData);                                                      // 94
      return;                                                                                                          // 95
    }                                                                                                                  // 96
                                                                                                                       // 97
    delete documentData._id;                                                                                           // 98
    delete originalDocumentData._id;                                                                                   // 99
    delete currentDbDoc._id;                                                                                           // 100
                                                                                                                       // 101
    var updatedDocumentData = Mongol.diffDocumentData(currentDbDoc, documentData, originalDocumentData),               // 102
        revisedDocument     = dateParser(updatedDocumentData);                                                         // 103
                                                                                                                       // 104
                                                                                                                       // 105
    // Check for packages                                                                                              // 106
                                                                                                                       // 107
    if (!!Package['aldeed:simple-schema'] && !!Package['aldeed:collection2'] && _.isFunction(MongolCollection.simpleSchema) && MongolCollection._c2) {
                                                                                                                       // 109
      // This is to nullify the effects of SimpleSchema/Collection2                                                    // 110
      // Using `upsert` means that a user can change the _id value in the JSON                                         // 111
      // and then press the 'Update' button to create a duplicate (published keys/values only) with a different _id    // 112
                                                                                                                       // 113
      MongolCollection.update({                                                                                        // 114
        _id: documentID                                                                                                // 115
      }, {$set: revisedDocument}, {                                                                                    // 116
        filter: false,                                                                                                 // 117
        autoConvert: false,                                                                                            // 118
        removeEmptyStrings: false,                                                                                     // 119
        validate: false                                                                                                // 120
      });                                                                                                              // 121
                                                                                                                       // 122
      return;                                                                                                          // 123
    }                                                                                                                  // 124
                                                                                                                       // 125
    // Run the magic                                                                                                   // 126
    MongolCollection.update({                                                                                          // 127
        _id: documentID                                                                                                // 128
      },                                                                                                               // 129
      revisedDocument                                                                                                  // 130
    );                                                                                                                 // 131
                                                                                                                       // 132
  },                                                                                                                   // 133
  Mongol_remove: function (collectionName, documentID, doNotTrash) {                                                   // 134
                                                                                                                       // 135
    check(collectionName, String);                                                                                     // 136
    check(documentID, String);                                                                                         // 137
                                                                                                                       // 138
    var MongolCollection = Mongol.Collection(collectionName);                                                          // 139
                                                                                                                       // 140
    var docToBeRemoved = MongolCollection.findOne(documentID, {transform: null});                                      // 141
                                                                                                                       // 142
    MongolCollection.remove(documentID);                                                                               // 143
                                                                                                                       // 144
    // Start Trash Can                                                                                                 // 145
    if(typeof doNotTrash === 'undefined') {                                                                            // 146
      if (Package["meteortoys:toypro"]) {                                                                              // 147
        targetCollection        = Mongol.Collection("MeteorToys_Mongol");                                              // 148
        trashDocument           = docToBeRemoved;                                                                      // 149
        trashDocument["Mongol_origin"] = String(collectionName);                                                       // 150
        trashDocument["Mongol_date"]   = new Date();                                                                   // 151
        targetCollection.insert(trashDocument);                                                                        // 152
      }                                                                                                                // 153
    }                                                                                                                  // 154
    // End Trash Can                                                                                                   // 155
                                                                                                                       // 156
    return docToBeRemoved;                                                                                             // 157
                                                                                                                       // 158
  },                                                                                                                   // 159
  Mongol_duplicate: function (collectionName, documentID) {                                                            // 160
                                                                                                                       // 161
    check(collectionName, String);                                                                                     // 162
    check(documentID, String);                                                                                         // 163
                                                                                                                       // 164
    var MongolCollection = Mongol.Collection(collectionName),                                                          // 165
        OriginalDoc      = MongolCollection.findOne(documentID, {transform: null});                                    // 166
                                                                                                                       // 167
    if (OriginalDoc) {                                                                                                 // 168
                                                                                                                       // 169
      delete OriginalDoc._id;                                                                                          // 170
                                                                                                                       // 171
      // Convert date strings to Date()                                                                                // 172
      var revisedDocument = dateParser(OriginalDoc);;                                                                  // 173
                                                                                                                       // 174
      var NewDocumentId = insertDoc(MongolCollection, revisedDocument);                                                // 175
                                                                                                                       // 176
      return NewDocumentId;                                                                                            // 177
                                                                                                                       // 178
    }                                                                                                                  // 179
                                                                                                                       // 180
  },                                                                                                                   // 181
  Mongol_insert: function(collectionName, documentData) {                                                              // 182
                                                                                                                       // 183
    check(collectionName, String);                                                                                     // 184
    check(documentData, Object);                                                                                       // 185
                                                                                                                       // 186
    var MongolCollection = Mongol.Collection(collectionName),                                                          // 187
        newId = null;                                                                                                  // 188
                                                                                                                       // 189
    if (documentData._id && MongolCollection.findOne({_id: documentData._id}, {transform: null})) {                    // 190
      console.log('Duplicate _id found');                                                                              // 191
      return null;                                                                                                     // 192
    }                                                                                                                  // 193
                                                                                                                       // 194
    revisedDocument = dateParser(documentData);                                                                        // 195
                                                                                                                       // 196
                                                                                                                       // 197
    // Insert it                                                                                                       // 198
                                                                                                                       // 199
    var newId = insertDoc(MongolCollection, revisedDocument);                                                          // 200
                                                                                                                       // 201
    return newId;                                                                                                      // 202
                                                                                                                       // 203
  },                                                                                                                   // 204
});                                                                                                                    // 205
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin:mongol/server/utility_functions.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// This function takes three data points into account:                                                                 // 1
                                                                                                                       // 2
// 1) the actual document as it stands on the server, prior to being updated                                           // 3
// 2) the oldData that was on the client before the user pressed save                                                  // 4
// 3) the newData that the client is trying to save                                                                    // 5
                                                                                                                       // 6
// This function decides which fields it is going to make writes to on this basis:                                     // 7
// 1) The field(s) being overwritten must appear in the db doc and on the client oldData                               // 8
//    (if they only appear in the oldData these must have been added dynamically on the client                         // 9
//     and we don't want to save these fields to the db)                                                               // 10
//    -- this includes fields that are being removed (i.e. they must appear in the db doc and the oldData)             // 11
// 2) Only fields that appear in the newData, but not the oldData or db doc can be added                               // 12
//    (if it appears in the db doc, throw an error that says:                                                          // 13
//     "There is an unpublished field in the database with that name. Update cannot be made.")                         // 14
                                                                                                                       // 15
// The ramifications of all this:                                                                                      // 16
// You can only update/remove fields that are published                                                                // 17
// You can only add new fields if they don't exist in the db already                                                   // 18
                                                                                                                       // 19
                                                                                                                       // 20
Mongol.diffDocumentData = function (dbDoc, newData, oldData) {                                                         // 21
                                                                                                                       // 22
  // TODO -- recurse into subdocuments, performing checks                                                              // 23
  // using the Meteor._get function (as seen in /common/common.js)                                                     // 24
                                                                                                                       // 25
  var finalData = {};                                                                                                  // 26
                                                                                                                       // 27
  var dbDocFields = _.keys(dbDoc),                                                                                     // 28
    newDataFields = _.keys(newData),                                                                                   // 29
    oldDataFields = _.keys(oldData); // console.log("dbDocFields",dbDocFields); console.log("newDataFields",newDataFields); console.log("oldDataFields",oldDataFields);
                                                                                                                       // 31
  // First get the set of fields that we won't be saving because they were dynamically added on the client             // 32
                                                                                                                       // 33
  var dynamicallyAddedFields = _.difference(oldDataFields, dbDocFields);                                               // 34
                                                                                                                       // 35
  // The get the fields that must retain their dbDoc field value, because they we'ren't published                      // 36
                                                                                                                       // 37
  var unpublishedFields = _.difference(dbDocFields, oldDataFields); // console.log("unpublishedFields",unpublishedFields);
                                                                                                                       // 39
  // iterate over all fields, old and new, and ascertain the field value that must be added to the final data object   // 40
                                                                                                                       // 41
  var oldAndNewFields = _.union(dbDocFields, newDataFields);                                                           // 42
                                                                                                                       // 43
  _.each(oldAndNewFields, function(field) {                                                                            // 44
                                                                                                                       // 45
    if (_.contains(dynamicallyAddedFields, field)) {                                                                   // 46
                                                                                                                       // 47
      // We don't want to add this field to the actual mongodb document                                                // 48
      console.log("'" + field + "' appears to be a dynamically added field. This field was not updated.");             // 49
      return;                                                                                                          // 50
                                                                                                                       // 51
    }                                                                                                                  // 52
                                                                                                                       // 53
    if (_.contains(unpublishedFields, field)) {                                                                        // 54
                                                                                                                       // 55
      // We don't want to overwrite the existing mondodb document value                                                // 56
      if (newData[field]) {                                                                                            // 57
        // Give a message to user as to why that field wasn't updated                                                  // 58
        console.log("'" + field + "' is an unpublished field. This field's value was not overwritten.");               // 59
      }                                                                                                                // 60
      // Make sure the old value is retained                                                                           // 61
      finalData[field] = dbDoc[field];                                                                                 // 62
      return;                                                                                                          // 63
                                                                                                                       // 64
    }                                                                                                                  // 65
                                                                                                                       // 66
    finalData[field] = newData[field];                                                                                 // 67
                                                                                                                       // 68
    // This will let unpublished fields into the database,                                                             // 69
    // so the user may be confused by the lack of an update in the client                                              // 70
    // simply because the added field isn't published                                                                  // 71
    // The following solves that problem, but doesn't allow new fields to be published at all:                         // 72
    //     finalData[field] = oldData[field] && newData[field];                                                        // 73
    // We actually need to know the set of fields published by the publication that the client side doc came from      // 74
    // but how do we get that?                                                                                         // 75
                                                                                                                       // 76
  });                                                                                                                  // 77
                                                                                                                       // 78
  return finalData;                                                                                                    // 79
                                                                                                                       // 80
};                                                                                                                     // 81
                                                                                                                       // 82
// Test code for Mongol.diffDocumentData                                                                               // 83
                                                                                                                       // 84
/*Meteor.startup(function() {                                                                                          // 85
                                                                                                                       // 86
  // Take a user document                                                                                              // 87
  var sampleDbDoc = { "_id" : "exampleuser1", "createdAt" : 1375253926213, "defaultPrograms" : { "514d75dc97d9562095578800" : "MYP", "515be9e6a57068c708000000" : "PYP" }, "department_id" : [  "GMsv9YzaCuL6dFBYL" ], "emails" : [  {  "address" : "babrahams@wab.edu",  "verified" : true } ], "myCourses" : [  "QqofG3XyEtQPgFb72",  "fvTxhAyfMxFbhzwK7",  "jcPtgwN2t6pTMQDEp" ], "organization_id" : [  "51f76bcb45623dfb1e0d3100" ], "permContexts" : [ 	{ 	"department_id" : "GMsv9YzaCuL6dFBYL", "perms" : [ 	"editRoles", 	"editCourses", 	"editUnits", 	"editAssessments", 	"editDepartments" ] } ], "roleContexts" : [ 	{ 	"organization_id" : "51f76bcb45623dfb1e0d3100", 	"school_id" : "514d75dc97d9562095578800", 	"department_id" : "GMsv9YzaCuL6dFBYL", 	"roles" : [ 	"iQD4BhnB8PFWwHCcg" ] }, 	{ 	"organization_id" : "2BjJbMyRLWa4iofQm" } ], "school_id" : [  "514d75dc97d9562095578800" ], "services" : { "password" : { "bcrypt" : "$2a$10$M55xiZA6rX0EwZ6xBk3Rre6/J5s3XUunre5.5ijyU3.ilpYZQFmtO" }, "resume" : { "loginTokens" : [ 	{ 	"when" : "2014-12-24T12:00:06.725Z", 	"hashedToken" : "not/telling=" }, 	{ 	"when" : "2015-01-16T04:45:10.574Z", 	"hashedToken" : "bigbadhashedtoken=" }, 	{ 	"when" : "2015-01-22T02:01:57.671Z", 	"hashedToken" : "9HSCRUygOiPYgmUsmWA5jcYutqKnjT9OByHPA6LbBB8=" } ] } }, "superuser" : [  "51f76bcb45623dfb1e0d3100",  "2BjJbMyRLWa4iofQm",  "ZkeRkDEEcp72bAFQY" ], "transaction_id" : "shQ9fzcZYSgLLnptC" };
                                                                                                                       // 89
  // Simulate the oldData getting sent back from the client (the fields should be a subset of the db fields)           // 90
  var sampleOldData = _.extend(_.clone(sampleDbDoc),{dynamicallyAddedField:true, secondDynamicallyAddedField: "Dynamically added value"}); // Simulate two dynamically added fields
  delete sampleOldData.services; // Simulate an unpublished field                                                      // 92
                                                                                                                       // 93
  // Simulate the newData getting sent back from the client                                                            // 94
  // e.g. user adds a new field                                                                                        // 95
  var sampleNewData = _.extend(_.clone(sampleOldData),{brandNewField: true});                                          // 96
  // brandNewField should be added                                                                                     // 97
  delete sampleNewData.createdAt; // This should be gone                                                               // 98
  sampleNewData.secondDynamicallyAddedField = "Dynamically added value overwritten by user"; // seconddynamicallyAddedField should be gone
  sampleNewData.transaction_id = "overwritten transaction id"; // This field should be changed                         // 100
                                                                                                                       // 101
  // Run the test                                                                                                      // 102
                                                                                                                       // 103
  console.log(Mongol.diffDocumentData(sampleDbDoc, sampleNewData, sampleOldData));                                     // 104
                                                                                                                       // 105
});*/                                                                                                                  // 106
                                                                                                                       // 107
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['msavin:mongol'] = {};

})();

//# sourceMappingURL=msavin_mongol.js.map
