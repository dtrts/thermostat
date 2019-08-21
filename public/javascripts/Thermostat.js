'use strict';

var Thermostat = function () {
  this.temp = 20;
  this.min_temp = 10;
  this.max_temp = 25;
  this.power_saving = true;
};

Thermostat.prototype = {

  up: function (increase_by) {
    if ((this.temp + increase_by) > this.max_temp) {
      throw new Error('Unable to set temperature.');
    }
    this.temp += increase_by;
  },

  down: function (decrease_by) {
    if ((this.temp - decrease_by) < this.min_temp) {
      throw new Error('Unable to set temperature.');
    }
    this.temp -= decrease_by;
  },

  switch_power_saving: function () {
    this.power_saving = !this.power_saving;
    this.max_temp = this.power_saving ? 25 : 32;
  }

};