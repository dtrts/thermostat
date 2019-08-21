$(document).ready(function () {
  var thermo = new Thermostat();
  $("#temp-display").text(thermo.temp);
  var t;

  $("#up-1-button").click(function () {
    clearInterval(t);
    try {
      thermo.up(1);
      $("#message-display").text("You clicked the 1up button");
      $("#temp-display").text(thermo.temp);
    } catch (e) {
      $("#message-display").text(e);
    }

    t = setTimeout(function () {
      $("#message-display").text("Thermostat!")
    }, 2500)
  });
  $("#down-1-button").click(function () {
    clearInterval(t);
    try {
      thermo.down(1);
      $("#message-display").text("You clicked the 1down button");
      $("#temp-display").text(thermo.temp);
    } catch (e) {
      $("#message-display").text(e);
    }

    t = setTimeout(function () {
      $("#message-display").text("Thermostat!")
    }, 2500)
  });
  $("#reset-button").click(function () {
    clearInterval(t);
    thermo.reset()
    $("#message-display").text("You clicked the reset button");
    $("#temp-display").text(thermo.temp);

    t = setTimeout(function () {
      $("#message-display").text("Thermostat!")
    }, 2500)
  });
  $("#switch-power-saving-button").click(function () {
    clearInterval(t);
    thermo.switch_power_saving()
    $("#message-display").text("You clicked the switch power saving button");
    $("#power-saving-mode-display").text(`POWER SAVING IS ${thermo.power_saving ? "ON" : "OFF"}.`);
    $("#temp-display").text(thermo.temp);

    t = setTimeout(function () {
      $("#message-display").text("Thermostat!")
    }, 2500)
  });

});