'use strict';

var Thermostat = function () {
  this.temp = 20;
  this.min_temp = 10;
};

Thermostat.prototype = {
  up: function (increase_by) {
    this.temp += increase_by;
  },
  down: function (decrease_by) {
    if (this.temp -= decrease_by < this.min_temp) {
      throw new Error('Unable to set temperature.');
    }
    this.temp -= decrease_by;
  },

};