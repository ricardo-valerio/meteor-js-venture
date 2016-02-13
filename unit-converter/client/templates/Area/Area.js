if (Meteor.isClient) {

  areaUnitFactors = {

    "from_unit_x" : "degrees",
    "to_unit_y"   : "degrees",

    "quantityToConvert": 1,
    "scientificNotationIsEnabled" : false,

    "acre" : {
      "acre"              : 1                                 ,
      "are"               : 40.468564224                      ,
      "barn"              : 4.0468564224E+31                  ,
      "hectare"           : 0.40468564224                     ,
      "homestead"         : 0.00625                           ,
      "rood"              : 4                                 ,
      "square centimeter" : 40468564.224                      ,
      "square foot"       : 43560                             ,
      "square inch"       : 6272640                           ,
      "square kilometer"  : 0.0040468564224                   ,
      "square meter"      : 4046.8564224                      ,
      "square mile"       : 0.0015625                         ,
      "square millimeter" : 4046856422.4                      ,
      "square rod"        : 160                               ,
      "square yard"       : 4840                              ,
      "township"          : 0.00004340277777778
    },
    "are" : {
      "acre"              : 0.02471053814672    ,
      "are"               : 1                   ,
      "barn"              : 1E+30               ,
      "hectare"           : 0.01                ,
      "homestead"         : 0.000154440863417   ,
      "rood"              : 0.09884215258687    ,
      "square centimeter" : 1000000             ,
      "square foot"       : 1076.391041671      ,
      "square inch"       : 155000.3100006      ,
      "square kilometer"  : 0.0001              ,
      "square meter"      : 100                 ,
      "square mile"       : 0.00003861021585424 ,
      "square millimeter" : 100000000           ,
      "square rod"        : 3.953686103475      ,
      "square yard"       : 119.5990046301      ,
      "township"          : 0.000001072505995951
    },
    "barn" : {
      "acre"              : 2.471053814672E-32 ,
      "are"               : 1E-30              ,
      "barn"              : 1                  ,
      "hectare"           : 1E-32              ,
      "homestead"         : 1.54440863417E-34  ,
      "rood"              : 9.884215258687E-32 ,
      "square centimeter" : 1E-24              ,
      "square foot"       : 1.076391041671E-27 ,
      "square inch"       : 1.550003100006E-25 ,
      "square kilometer"  : 1E-34              ,
      "square meter"      : 1E-28              ,
      "square mile"       : 3.861021585425E-35 ,
      "square millimeter" : 1E-22              ,
      "square rod"        : 3.953686103475E-30 ,
      "square yard"       : 1.195990046301E-28 ,
      "township"          : 1.072505995951E-36
    },
    "hectare" : {
      "acre"              : 1,
      "are"               : 1,
      "barn"              : 1,
      "hectare"           : 1,
      "homestead"         : 1,
      "rood"              : 1,
      "square centimeter" : 1,
      "square foot"       : 1,
      "square inch"       : 1,
      "square kilometer"  : 1,
      "square meter"      : 1,
      "square mile"       : 1,
      "square millimeter" : 1,
      "square rod"        : 1,
      "square yard"       : 1,
      "township"          : 1
    },
    "homestead" : {
      "acre"              : 1,
      "are"               : 1,
      "barn"              : 1,
      "hectare"           : 1,
      "homestead"         : 1,
      "rood"              : 1,
      "square centimeter" : 1,
      "square foot"       : 1,
      "square inch"       : 1,
      "square kilometer"  : 1,
      "square meter"      : 1,
      "square mile"       : 1,
      "square millimeter" : 1,
      "square rod"        : 1,
      "square yard"       : 1,
      "township"          : 1
    },
    "rood" : {
      "acre"              : 1,
      "are"               : 1,
      "barn"              : 1,
      "hectare"           : 1,
      "homestead"         : 1,
      "rood"              : 1,
      "square centimeter" : 1,
      "square foot"       : 1,
      "square inch"       : 1,
      "square kilometer"  : 1,
      "square meter"      : 1,
      "square mile"       : 1,
      "square millimeter" : 1,
      "square rod"        : 1,
      "square yard"       : 1,
      "township"          : 1
    },
    "square_centimeter" : {
      "acre"              : 1,
      "are"               : 1,
      "barn"              : 1,
      "hectare"           : 1,
      "homestead"         : 1,
      "rood"              : 1,
      "square centimeter" : 1,
      "square foot"       : 1,
      "square inch"       : 1,
      "square kilometer"  : 1,
      "square meter"      : 1,
      "square mile"       : 1,
      "square millimeter" : 1,
      "square rod"        : 1,
      "square yard"       : 1,
      "township"          : 1
    },
    "square_foot" : {
      "acre"              : 1,
      "are"               : 1,
      "barn"              : 1,
      "hectare"           : 1,
      "homestead"         : 1,
      "rood"              : 1,
      "square centimeter" : 1,
      "square foot"       : 1,
      "square inch"       : 1,
      "square kilometer"  : 1,
      "square meter"      : 1,
      "square mile"       : 1,
      "square millimeter" : 1,
      "square rod"        : 1,
      "square yard"       : 1,
      "township"          : 1
    },
    "square_inch" : {
      "acre"              : 1,
      "are"               : 1,
      "barn"              : 1,
      "hectare"           : 1,
      "homestead"         : 1,
      "rood"              : 1,
      "square centimeter" : 1,
      "square foot"       : 1,
      "square inch"       : 1,
      "square kilometer"  : 1,
      "square meter"      : 1,
      "square mile"       : 1,
      "square millimeter" : 1,
      "square rod"        : 1,
      "square yard"       : 1,
      "township"          : 1
    },
    "square_kilometer" : {
      "acre"              : 1,
      "are"               : 1,
      "barn"              : 1,
      "hectare"           : 1,
      "homestead"         : 1,
      "rood"              : 1,
      "square centimeter" : 1,
      "square foot"       : 1,
      "square inch"       : 1,
      "square kilometer"  : 1,
      "square meter"      : 1,
      "square mile"       : 1,
      "square millimeter" : 1,
      "square rod"        : 1,
      "square yard"       : 1,
      "township"          : 1
    },
    "square_meter" : {
      "acre"              : 1,
      "are"               : 1,
      "barn"              : 1,
      "hectare"           : 1,
      "homestead"         : 1,
      "rood"              : 1,
      "square centimeter" : 1,
      "square foot"       : 1,
      "square inch"       : 1,
      "square kilometer"  : 1,
      "square meter"      : 1,
      "square mile"       : 1,
      "square millimeter" : 1,
      "square rod"        : 1,
      "square yard"       : 1,
      "township"          : 1
    },
    "square_mile" : {
      "acre"              : 1,
      "are"               : 1,
      "barn"              : 1,
      "hectare"           : 1,
      "homestead"         : 1,
      "rood"              : 1,
      "square centimeter" : 1,
      "square foot"       : 1,
      "square inch"       : 1,
      "square kilometer"  : 1,
      "square meter"      : 1,
      "square mile"       : 1,
      "square millimeter" : 1,
      "square rod"        : 1,
      "square yard"       : 1,
      "township"          : 1
    },
    "square_millimeter" : {
      "acre"              : 1,
      "are"               : 1,
      "barn"              : 1,
      "hectare"           : 1,
      "homestead"         : 1,
      "rood"              : 1,
      "square centimeter" : 1,
      "square foot"       : 1,
      "square inch"       : 1,
      "square kilometer"  : 1,
      "square meter"      : 1,
      "square mile"       : 1,
      "square millimeter" : 1,
      "square rod"        : 1,
      "square yard"       : 1,
      "township"          : 1
    },
    "square_rod" : {
      "acre"              : 1,
      "are"               : 1,
      "barn"              : 1,
      "hectare"           : 1,
      "homestead"         : 1,
      "rood"              : 1,
      "square centimeter" : 1,
      "square foot"       : 1,
      "square inch"       : 1,
      "square kilometer"  : 1,
      "square meter"      : 1,
      "square mile"       : 1,
      "square millimeter" : 1,
      "square rod"        : 1,
      "square yard"       : 1,
      "township"          : 1
    },
    "square_yard" : {
      "acre"              : 1,
      "are"               : 1,
      "barn"              : 1,
      "hectare"           : 1,
      "homestead"         : 1,
      "rood"              : 1,
      "square centimeter" : 1,
      "square foot"       : 1,
      "square inch"       : 1,
      "square kilometer"  : 1,
      "square meter"      : 1,
      "square mile"       : 1,
      "square millimeter" : 1,
      "square rod"        : 1,
      "square yard"       : 1,
      "township"          : 1
    },
    "township" : {
      "acre"              : 1,
      "are"               : 1,
      "barn"              : 1,
      "hectare"           : 1,
      "homestead"         : 1,
      "rood"              : 1,
      "square centimeter" : 1,
      "square foot"       : 1,
      "square inch"       : 1,
      "square kilometer"  : 1,
      "square meter"      : 1,
      "square mile"       : 1,
      "square millimeter" : 1,
      "square rod"        : 1,
      "square yard"       : 1,
      "township"          : 1
    },

    from: function(unit) {
      this.from_unit_x = unit;
    },
    to: function(unit) {
      this.to_unit_y = unit;
    },
    convert: function(quantityToConvert) {
      return areaUnitFactors[this.from_unit_x][this.to_unit_y] * quantityToConvert;
    }
  }

  Template.area.onCreated(function() {
  });

  Template.area.onDestroyed(function() {
  });

  Template.area.onRendered(function() {
    $("#quantityToConvert")[0].value = areaUnitFactors.quantityToConvert;
    $("#from__" + areaUnitFactors.from_unit_x).attr("checked", true);
    $("#to__" + areaUnitFactors.to_unit_y).attr("checked", true);
    $("#scientificNotation")[0].checked = areaUnitFactors.scientificNotationIsEnabled;
    performConversion();
  });

  Template.area.helpers({

  });

  Template.area.events({
    "click .fromUnits input[type='radio']" : function() {

      areaUnitFactors.from_unit_x = $("input[type='radio'][name='groupFromUnits']:checked")[0].id.slice(6); // remove the initial string "from__"

      fromUnitsNotation = $("input[type='radio'][name='groupFromUnits']:checked").next().text().match(/\(([^\)]+)\)/g)[0];
      $('.fromUnitsNotation').text(fromUnitsNotation.slice(1, -1));


      performConversion();
    },
    "click .toUnits input[type='radio']" : function() {

      areaUnitFactors.to_unit_y = $("input[type='radio'][name='groupToUnits']:checked")[0].id.slice(4); // remove the initial string "to__"

      var toUnitsNotation = $("input[type='radio'][name='groupToUnits']:checked").next().text().match(/\(([^\)]+)\)/g)[0];
      $('.toUnitsNotation').text(toUnitsNotation.slice(1, -1));


      performConversion();
    },
    "keyup, mouseup #quantityToConvert" : function() {

      performConversion();
    },
    "click #scientificNotation" : function() {
      areaUnitFactors.scientificNotationIsEnabled = !areaUnitFactors.scientificNotationIsEnabled;
      performConversion();
    }
  });

  var performConversion = function() {

    var quantityToConvert = Number($("#quantityToConvert")[0].value);
    areaUnitFactors.quantityToConvert = quantityToConvert;

    var conversionResult = areaUnitFactors.convert(quantityToConvert);

    if(areaUnitFactors.scientificNotationIsEnabled)
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
