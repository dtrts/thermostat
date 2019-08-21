'use strict';

describe('Thermostat', function () {
  var thermo;
  beforeEach(function () {
    thermo = new Thermostat();
  });
  // Thermostat starts at 20
  it('starts at 20', function () {
    expect(thermo.temp).toEqual(20);
  });

  it('increases temp with up function', function () {
    var increase_by = Math.floor(Math.random() * 5);
    thermo.up(increase_by);
    expect(thermo.temp).toEqual(20 + increase_by);
  });

  it('increases temp with down function', function () {
    var decrease_by = Math.floor(Math.random() * 9);
    thermo.up(decrease_by);
    expect(thermo.temp).toEqual(20 + decrease_by);
  });

  it('cannot decrease temp below 10deg', function () {
    expect(thermo.min_temp).toEqual(10);
    expect(function () {
      thermo.down(11);
    }).toThrowError('Unable to set temperature.');
  });

  it('cannot increase temp above 25deg when on powersaving mode', function () {
    expect(thermo.max_temp).toEqual(25);
    expect(function () {
      thermo.up(13);
    }).toThrowError('Unable to set temperature.');
  });

  describe('power saving is off', function() {

    beforeEach(function () {
      thermo.switch_power_saving();
    });

    it('cannot increase temp above 32deg when on default', function () {
      expect(thermo.max_temp).toEqual(32);
      expect(function () {
        thermo.up(13);
      }).toThrowError('Unable to set temperature.');
    });

  });

  

  // POWERSAVING
  it('starts with power saving on', function () {
    expect(thermo.power_saving).toEqual(true);
  });

  it('power saving can be switched off and on', function () {
    thermo.switch_power_saving();
    expect(thermo.power_saving).toEqual(false);
    thermo.switch_power_saving();
    expect(thermo.power_saving).toEqual(true);
  });


});