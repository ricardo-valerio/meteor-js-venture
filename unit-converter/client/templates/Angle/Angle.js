if (Meteor.isClient) {

  angleUnitFactors = {

    "from_unit_x" : "degrees",
    "to_unit_y"   : "degrees",

    "quantityToConvert": 1,
    "scientificNotationIsEnabled" : false,

    "degrees": {
      "degrees"     : 1                 ,
      "full_circle" : 0.002777777777778 ,
      "grad"        : 1.111111111111    ,
      "radians"     : 0.01745329251994
    },
    "full_circle": {
      "degrees"     : 360               ,
      "full_circle" : 1                 ,
      "grad"        : 400               ,
      "radians"     : 6.283185307179
    },
    "grad": {
      "degrees"     : 0.9               ,
      "full_circle" : 0.0025            ,
      "grad"        : 1                 ,
      "radians"     : 0.01570796326795
    },
    "radians": {
      "degrees"     : 57.29577951308    ,
      "full_circle" : 0.1591549430919   ,
      "grad"        : 63.66197723676    ,
      "radians"     : 1
    },

    from: function(unit) {
      this.from_unit_x = unit;
    },
    to: function(unit) {
      this.to_unit_y = unit;
    },
    convert: function(quantityToConvert) {
      return angleUnitFactors[this.from_unit_x][this.to_unit_y] * quantityToConvert;
    }
  }


  Template.angle.onCreated(function() {
  });

  Template.angle.onDestroyed(function() {
  });

  Template.angle.onRendered(function() {
    $("#quantityToConvert")[0].value = angleUnitFactors.quantityToConvert;
    $("#from__" + angleUnitFactors.from_unit_x).attr("checked", true);
    $("#to__" + angleUnitFactors.to_unit_y).attr("checked", true);
    $("#scientificNotation")[0].checked = angleUnitFactors.scientificNotationIsEnabled;
    performConversion();
  });

  Template.angle.helpers({

  });

  Template.angle.events({
    "click .fromUnits input[type='radio']" : function() {

      angleUnitFactors.from_unit_x = $("input[type='radio'][name='groupFromUnits']:checked")[0].id.slice(6); // remove the initial string "from__"

      fromUnitsNotation = $("input[type='radio'][name='groupFromUnits']:checked").next().text().match(/\(([^\)]+)\)/g)[0];
      $('.fromUnitsNotation').text(fromUnitsNotation.slice(1, -1));


      performConversion();
    },
    "click .toUnits input[type='radio']" : function() {

      angleUnitFactors.to_unit_y = $("input[type='radio'][name='groupToUnits']:checked")[0].id.slice(4); // remove the initial string "to__"

      var toUnitsNotation = $("input[type='radio'][name='groupToUnits']:checked").next().text().match(/\(([^\)]+)\)/g)[0];
      $('.toUnitsNotation').text(toUnitsNotation.slice(1, -1));


      performConversion();
    },
    "keyup, mouseup #quantityToConvert" : function() {

      performConversion();
    },
    "click #scientificNotation" : function() {
      angleUnitFactors.scientificNotationIsEnabled = !angleUnitFactors.scientificNotationIsEnabled;
      performConversion();
    }
  });

  var performConversion = function() {

    var quantityToConvert = Number($("#quantityToConvert")[0].value);
    angleUnitFactors.quantityToConvert = quantityToConvert;

    var conversionResult = angleUnitFactors.convert(quantityToConvert);

    if(angleUnitFactors.scientificNotationIsEnabled)
      $('#conversionResult')[0].value = conversionResult.toExponential();
    else
      $('#conversionResult')[0].value = conversionResult.valueOf();

  }

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
