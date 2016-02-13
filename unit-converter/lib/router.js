Router.configure({
   layoutTemplate: 'appLayout',
   notFoundTemplate: 'notFound'
});

Router.route('/why-learn-units-of-measurement', function() {
    this.render("why");
});

Router.route('/SI_units', function() {
    this.render("SI");
});

Router.route('/', function() {
    this.render("why");
});

Router.route('/SI-units', function() {
    this.render("SI");
});

Router.route('/acceleration', function() {
    this.render("acceleration")
});

Router.route('/amount-of-substance', function() {
    this.render("amountOfSubstance");
});

Router.route('/angle', function() {
    this.render("angle");
});

Router.route('/area', function() {
    this.render("area");
});

Router.route('/astronomical', function() {
    this.render("astronomical");
});

Router.route('/blood-sugar', function() {
    this.render("bloodSugar");
});

Router.route('/capacitance', function() {
    this.render("capacitance");
});

Router.route('/computer-data-storage', function() {
    this.render("computerDataStorage");
});

Router.route('/data-transfer', function() {
    this.render("dataTransfer");
});

Router.route('/density', function() {
    this.render("density");
});

Router.route('/dinamic-viscosity', function() {
    this.render("dinamicViscosity");
});

Router.route('/electrical-resistance', function() {
    this.render("electricalResistance");
});

Router.route('/electric-charge', function() {
    this.render("electricCharge");
});

Router.route('/energy', function() {
    this.render("energy");
});

Router.route('/force', function() {
    this.render("force");
});

Router.route('/illuminance', function() {
    this.render("illuminance");
});

Router.route('/inductance', function() {
    this.render("inductance");
});

Router.route('/length-unit', function() {
    this.render("lengthUnit");
});

Router.route('/luminance', function() {
    this.render("luminance");
});

Router.route('/luminous-energy', function() {
    this.render("luminousEnergy");
});

Router.route('/luminous-intensity', function() {
    this.render("luminousIntensity");
});

Router.route('/magnetic-field', function() {
    this.render("magneticField");
});

Router.route('/magnetic-field-strength', function() {
    this.render("magneticFieldStrength");
});

Router.route('/magnetic-flux', function() {
    this.render("magneticFlux");
});

Router.route('/magnetomotive-force', function() {
    this.render("magnetomotiveForce");
});

Router.route('/metric', function() {
    this.render("metric");
});

Router.route('/molar-mass', function() {
    this.render("molarMass");
});

Router.route('/power', function() {
    this.render("power");
});

Router.route('/pressure', function() {
    this.render("pressure");
});

Router.route('/radioactive-decay', function() {
    this.render("radioactiveDecay");
});

Router.route('/radioactivity-equivalent-dose', function() {
    this.render("radioactivityEquivalentDose");
});

Router.route('/speed', function() {
    this.render("speed");
});

Router.route('/speed-of-wind', function() {
    this.render("speedOfWind");
});

Router.route('/temperature', function() {
    this.render("temperature");
});

Router.route('/time', function() {
    this.render("time");
});

Router.route('/torque', function() {
    this.render("torque");
});

Router.route('/volume', function() {
    this.render("volume");
});

Router.route('/weight', function() {
    this.render("weight");
});
