if (Meteor.isClient) {

  accelerationUnitFactors = {

    "from_unit_x" : "meter_square_second",
    "to_unit_y"   : "meter_square_second",

    "quantityToConvert": 1,
    "scientificNotationIsEnabled" : false,

    "meter_square_second" : {
        "meter_square_second"      : 1                      ,
        "centimeter_square_second" : 100                    ,
        "foot_square_second"       : 3.280839895            ,
        "standard_gravity"         : 0.1019716213           ,
        "gal"                      : 100                    ,
        "g_force"                  : 0.1019716213           ,
        "kilometer_square_hour"    : 12960                  ,
        "kilometer_hour_second"    : 3.6                    ,
        "mile_hour_minute"         : 134.21617752           ,
        "mile_hour_second"         : 2.2369362921           ,
        "mile_square_second"       : 0.00062137119224       ,
        "inch_square_second"       : 39.37007874
    },
    "centimeter_square_second" : {
        "meter_square_second"      : 0.01                   ,
        "centimeter_square_second" : 1                      ,
        "foot_square_second"       : 0.03280839895          ,
        "standard_gravity"         : 0.001019716213         ,
        "gal"                      : 1                      ,
        "g_force"                  : 0.001019716213         ,
        "kilometer_square_hour"    : 129.6                  ,
        "kilometer_hour_second"    : 0.036                  ,
        "mile_hour_minute"         : 1.3421617752           ,
        "mile_hour_second"         : 0.022369362921         ,
        "mile_square_second"       : 0.0000062137119224     ,
        "inch_square_second"       : 0.3937007874
    },
    "foot_square_second" : {
        "meter_square_second"      : 0.3048000000012        ,
        "centimeter_square_second" : 30.48000000012         ,
        "foot_square_second"       : 1                      ,
        "standard_gravity"         : 0.03108095017236       ,
        "gal"                      : 30.48000000012         ,
        "g_force"                  : 0.03108095017236       ,
        "kilometer_square_hour"    : 3950.208000016         ,
        "kilometer_hour_second"    : 1.097280000004         ,
        "mile_hour_minute"         : 40.90909090826         ,
        "mile_hour_second"         : 0.6818181818348        ,
        "mile_square_second"       : 0.0001893939393955     ,
        "inch_square_second"       : 12

    },
    "standard_gravity" : {
        "meter_square_second"      : 9.806649999788         ,
        "centimeter_square_second" : 980.6649999788         ,
        "foot_square_second"       : 32.17404855561         ,
        "standard_gravity"         : 1                      ,
        "gal"                      : 980.6649999788         ,
        "g_force"                  : 1                      ,
        "kilometer_square_hour"    : 127094.1839972         ,
        "kilometer_hour_second"    : 35.30393999924         ,
        "mile_hour_minute"         : 1316.211077248         ,
        "mile_hour_second"         : 21.93685128845         ,
        "mile_square_second"       : 0.006093569802249      ,
        "inch_square_second"       : 386.0885826673

    },
    "gal" : {
        "meter_square_second"      : 0.01                   ,
        "centimeter_square_second" : 1                      ,
        "foot_square_second"       : 0.03280839895          ,
        "standard_gravity"         : 0.001019716213         ,
        "gal"                      : 1                      ,
        "g_force"                  : 0.001019716213         ,
        "kilometer_square_hour"    : 129.6                  ,
        "kilometer_hour_second"    : 0.036                  ,
        "mile_hour_minute"         : 1.3421617752           ,
        "mile_hour_second"         : 0.022369362921         ,
        "mile_square_second"       : 0.0000062137119224     ,
        "inch_square_second"       : 0.3937007874

    },
    "g_force": {
        "meter_square_second"      : 9.806649999788         ,
        "centimeter_square_second" : 980.6649999788         ,
        "foot_square_second"       : 32.17404855561         ,
        "standard_gravity"         : 1                      ,
        "gal"                      : 980.6649999788         ,
        "g_force"                  : 1                      ,
        "kilometer_square_hour"    : 127094.1839972         ,
        "kilometer_hour_second"    : 35.30393999924         ,
        "mile_hour_minute"         : 1316.211077248         ,
        "mile_hour_second"         : 21.93685128845         ,
        "mile_square_second"       : 0.006093569802249      ,
        "inch_square_second"       : 386.0885826673

    },
    "kilometer_square_hour" : {
        "meter_square_second"      : 0.00007716049382716    ,
        "centimeter_square_second" : 0.007716049382716      ,
        "foot_square_second"       : 0.000253151226466      ,
        "standard_gravity"         : 0.000007868180655864   ,
        "gal"                      : 0.007716049382716      ,
        "g_force"                  : 0.000007868180655864   ,
        "kilometer_square_hour"    : 1                      ,
        "kilometer_hour_second"    : 0.0002777777777778     ,
        "mile_hour_minute"         : 0.01035618653704       ,
        "mile_hour_second"         : 0.0001726031089583     ,
        "mile_square_second"       : 0.00000004794530804321 ,
        "inch_square_second"       : 0.003037814717593

    },
    "kilometer_hour_second" : {
        "meter_square_second"      : 0.2777777777778        ,
        "centimeter_square_second" : 27.77777777778         ,
        "foot_square_second"       : 0.9113444152778        ,
        "standard_gravity"         : 0.02832545036111       ,
        "gal"                      : 27.77777777778         ,
        "g_force"                  : 0.02832545036111       ,
        "kilometer_square_hour"    : 3600                   ,
        "kilometer_hour_second"    : 1                      ,
        "mile_hour_minute"         : 37.28227153333         ,
        "mile_hour_second"         : 0.62137119225          ,
        "mile_square_second"       : 0.0001726031089556     ,
        "inch_square_second"       : 10.93613298333

    },
    "mile_hour_minute" : {
        "meter_square_second"      : 0.007450666666848      ,
        "centimeter_square_second" : 0.7450666666848        ,
        "foot_square_second"       : 0.02444444444494       ,
        "standard_gravity"         : 0.0007597565597843     ,
        "gal"                      : 0.7450666666848        ,
        "g_force"                  : 0.0007597565597843     ,
        "kilometer_square_hour"    : 96.56064000235         ,
        "kilometer_hour_second"    : 0.02682240000065       ,
        "mile_hour_minute"         : 1                      ,
        "mile_hour_second"         : 0.01666666666741       ,
        "mile_square_second"       : 0.000004629629629762   ,
        "inch_square_second"       : 0.2933333333393

    },
    "mile_hour_second" : {
        "meter_square_second"      : 0.4470399999909        ,
        "centimeter_square_second" : 44.70399999909         ,
        "foot_square_second"       : 1.466666666631         ,
        "standard_gravity"         : 0.04558539358502       ,
        "gal"                      : 44.70399999909         ,
        "g_force"                  : 0.04558539358502       ,
        "kilometer_square_hour"    : 5793.638399882         ,
        "kilometer_hour_second"    : 1.609343999967         ,
        "mile_hour_minute"         : 59.99999999732         ,
        "mile_hour_second"         : 1                      ,
        "mile_square_second"       : 0.0002777777777733     ,
        "inch_square_second"       : 17.59999999957

    },
    "mile_square_second" : {
        "meter_square_second"      : 1609.343999993         ,
        "centimeter_square_second" : 160934.3999993         ,
        "foot_square_second"       : 5279.999999956         ,
        "standard_gravity"         : 164.1074169087         ,
        "gal"                      : 160934.3999993         ,
        "g_force"                  : 164.1074169087         ,
        "kilometer_square_hour"    : 20857098.23991         ,
        "kilometer_hour_second"    : 5793.638399975         ,
        "mile_hour_minute"         : 215999.9999938         ,
        "mile_hour_second"         : 3600.000000058         ,
        "mile_square_second"       : 1                      ,
        "inch_square_second"       : 63359.99999947

    },
    "inch_square_second" : {
        "meter_square_second"      : 0.0254000000001        ,
        "centimeter_square_second" : 2.54000000001          ,
        "foot_square_second"       : 0.08333333333333       ,
        "standard_gravity"         : 0.00259007918103       ,
        "gal"                      : 2.54000000001          ,
        "g_force"                  : 0.00259007918103       ,
        "kilometer_square_hour"    : 329.1840000013         ,
        "kilometer_hour_second"    : 0.09144000000037       ,
        "mile_hour_minute"         : 3.409090909022         ,
        "mile_hour_second"         : 0.05681818181957       ,
        "mile_square_second"       : 0.00001578282828296    ,
        "inch_square_second"       : 1
    },
    from: function(unit) {
      this.from_unit_x = unit;
    },
    to: function(unit) {
      this.to_unit_y = unit;
    },
    convert: function(quantityToConvert) {
      return accelerationUnitFactors[this.from_unit_x][this.to_unit_y] * quantityToConvert;
    }
  }


  Template.acceleration.onCreated(function() {
  });

  Template.acceleration.onDestroyed(function() {
  });

  Template.acceleration.onRendered(function() {
    $("#quantityToConvert")[0].value = accelerationUnitFactors.quantityToConvert;
    $("#from__" + accelerationUnitFactors.from_unit_x).attr("checked", true);
    $("#to__" + accelerationUnitFactors.to_unit_y).attr("checked", true);
    $("#scientificNotation")[0].checked = accelerationUnitFactors.scientificNotationIsEnabled;
    performConversion();
  });

  Template.acceleration.helpers({
  });

  Template.acceleration.events({
    "click .fromUnits input[type='radio']" : function() {

      accelerationUnitFactors.from_unit_x = $("input[type='radio'][name='groupFromUnits']:checked")[0].id.slice(6); // remove the initial string "from__"

      fromUnitsNotation = $("input[type='radio'][name='groupFromUnits']:checked").next().text().match(/\(([^\)]+)\)/g)[0];
      $('.fromUnitsNotation').text(fromUnitsNotation.slice(1, -1));


      performConversion();
    },
    "click .toUnits input[type='radio']" : function() {

      accelerationUnitFactors.to_unit_y = $("input[type='radio'][name='groupToUnits']:checked")[0].id.slice(4); // remove the initial string "to__"

      var toUnitsNotation = $("input[type='radio'][name='groupToUnits']:checked").next().text().match(/\(([^\)]+)\)/g)[0];
      $('.toUnitsNotation').text(toUnitsNotation.slice(1, -1));


      performConversion();
    },
    "keyup, mouseup #quantityToConvert" : function() {

      performConversion();
    },
    "click #scientificNotation" : function() {
      accelerationUnitFactors.scientificNotationIsEnabled = !accelerationUnitFactors.scientificNotationIsEnabled;
      performConversion();
    }
  });

  var performConversion = function() {

    var quantityToConvert = Number($("#quantityToConvert")[0].value);
    accelerationUnitFactors.quantityToConvert = quantityToConvert;

    var conversionResult = accelerationUnitFactors.convert(quantityToConvert);

    if(accelerationUnitFactors.scientificNotationIsEnabled)
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
