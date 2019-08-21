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

  it('increases temp with up function', function () {
    increase_by = Math.floor(Math.random() * 100) + 1
    thermo.up(increase_by)
    expect(thermo.temp).toEqual(20 + increase_by)
  });
  it('increases temp with down function', function () {
    decrease_by = Math.floor(Math.random() * 10) - 1
    thermo.up(decrease_by)
    expect(thermo.temp).toEqual(20 + decrease_by)
  });

  it('cannot decrease temp below 10deg', function () {
    Expect(function () {
      thermo.down(11)
    }).toThrowError('Unable to set temperature.')
  });

});


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}