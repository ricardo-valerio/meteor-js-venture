if (Meteor.isClient) {

  amountOfSubstanceUnitFactors = {

    "from_unit_x" : "mol",
    "to_unit_y"   : "mol",

    "quantityToConvert": 1,
    "scientificNotationIsEnabled" : false,

    "millimole": {
      "millimole"  : 1          ,
      "mol"        : 0.001      ,
      "kilomole"   : 0.000001   ,
      "pound_mole" : 0.000002204622621849
    },
    "mol": {
      "millimole"  : 1000       ,
      "mol"        : 1          ,
      "kilomole"   : 0.001      ,
      "pound_mole" : 0.002204622621849
    },
    "kilomole": {
      "millimole"  : 1000000    ,
      "mol"        : 1000       ,
      "kilomole"   : 1          ,
      "pound_mole" : 2.204622621849
    },
    "pound_mole": {
      "millimole"  : 453592.37  ,
      "mol"        : 453.59237  ,
      "kilomole"   : 0.45359237 ,
      "pound_mole" : 1
    },

    from: function(unit) {
      this.from_unit_x = unit;
    },
    to: function(unit) {
      this.to_unit_y = unit;
    },
    convert: function(quantityToConvert) {
      return amountOfSubstanceUnitFactors[this.from_unit_x][this.to_unit_y] * quantityToConvert;
    }
  }


  Template.amountOfSubstance.onCreated(function() {
  });

  Template.amountOfSubstance.onDestroyed(function() {
  });

  Template.amountOfSubstance.onRendered(function() {
    $("#quantityToConvert")[0].value = amountOfSubstanceUnitFactors.quantityToConvert;
    $("#from__" + amountOfSubstanceUnitFactors.from_unit_x).attr("checked", true);
    $("#to__" + amountOfSubstanceUnitFactors.to_unit_y).attr("checked", true);
    $("#scientificNotation")[0].checked = amountOfSubstanceUnitFactors.scientificNotationIsEnabled;
    performConversion();
  });

  Template.amountOfSubstance.helpers({
  });

  Template.amountOfSubstance.events({
    "click .fromUnits input[type='radio']" : function() {

      amountOfSubstanceUnitFactors.from_unit_x = $("input[type='radio'][name='groupFromUnits']:checked")[0].id.slice(6); // remove the initial string "from__"

      fromUnitsNotation = $("input[type='radio'][name='groupFromUnits']:checked").next().text().match(/\(([^\)]+)\)/g)[0];
      $('.fromUnitsNotation').text(fromUnitsNotation.slice(1, -1));


      performConversion();
    },
    "click .toUnits input[type='radio']" : function() {

      amountOfSubstanceUnitFactors.to_unit_y = $("input[type='radio'][name='groupToUnits']:checked")[0].id.slice(4); // remove the initial string "to__"

      var toUnitsNotation = $("input[type='radio'][name='groupToUnits']:checked").next().text().match(/\(([^\)]+)\)/g)[0];
      $('.toUnitsNotation').text(toUnitsNotation.slice(1, -1));


      performConversion();
    },
    "keyup, mouseup #quantityToConvert" : function() {

      performConversion();
    },
    "click #scientificNotation" : function() {
      amountOfSubstanceUnitFactors.scientificNotationIsEnabled = !amountOfSubstanceUnitFactors.scientificNotationIsEnabled;
      performConversion();
    }
  });

  var performConversion = function() {

    var quantityToConvert = Number($("#quantityToConvert")[0].value);
    amountOfSubstanceUnitFactors.quantityToConvert = quantityToConvert;

    var conversionResult = amountOfSubstanceUnitFactors.convert(quantityToConvert);

    if(amountOfSubstanceUnitFactors.scientificNotationIsEnabled)
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
