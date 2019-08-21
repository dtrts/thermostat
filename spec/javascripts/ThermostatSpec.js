'user strict';

describe('Thermostat', function () {
  var thermo;
  beforeEach(function () {
    thermo = new Thermostat();
  });
  // Thermostat starts at 20
  it('starts at 20', function () {
    expect(thermo.temp).toEqual(20);
  });
});