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
    var increase_by = Math.floor(Math.random() * 100) + 1
    thermo.up(increase_by)
    expect(thermo.temp).toEqual(20 + increase_by)
  });
  it('increases temp with down function', function () {
    var decrease_by = Math.floor(Math.random() * 10) - 1
    thermo.up(decrease_by)
    expect(thermo.temp).toEqual(20 + decrease_by)
  });

  it('cannot decrease temp below 10deg', function () {
    expect(thermo.min_temp).toEqual(10)
    expect(function () {
      thermo.down(11)
    }).toThrowError('Unable to set temperature.')
  });

  // POWERSAVING
  it('starts with power saving off', function () {
    expect(thermo.power_saving).toEqual(false);
  });

  it('power saving can be switched off and on', function () {
    thermo.set_power_saving(true);
    expect(thermo.power_saving).toEqual(true);
    thermo.set_power_saving(false);
    expect(thermo.power_saving).toEqual(false);
  });


});