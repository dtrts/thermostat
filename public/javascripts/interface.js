$(document).ready(function () {

  var message_timeout;
  var thermo = new Thermostat();

  $("#up-1-button").click(up_1_click);
  $("#down-1-button").click(down_1_click);
  $("#reset-button").click(reset_click);
  $("#switch-power-saving-button").click(switch_power_saving_click);
  display_current_temp();


  function set_default_message() {
    $("#message-display").text("Thermostat!");
  };

  function default_message_timeout() {
    return setTimeout(function () {
      set_default_message();
    }, 2500)
  }

  function display_current_temp() {
    $("#temp-display").text(thermo.temp);
  }


  function up_1_click() {
    clearInterval(message_timeout);
    try {
      thermo.up(1);
      $("#message-display").text("Temperature increased");
      display_current_temp();
    } catch (e) {
      $("#message-display").text(e);
    }
    message_timeout = default_message_timeout()
  }

  function down_1_click() {
    clearInterval(message_timeout);
    try {
      thermo.down(1);
      $("#message-display").text("Temperature decreased");
      display_current_temp();
    } catch (e) {
      $("#message-display").text(e);
    }
    message_timeout = default_message_timeout()
  }

  function reset_click() {
    clearInterval(message_timeout);
    thermo.reset()
    $("#message-display").text("Temperature reset");
    display_current_temp();
    message_timeout = default_message_timeout()
  }

  function switch_power_saving_click() {
    clearInterval(message_timeout);
    thermo.switch_power_saving()
    $("#message-display").text(`Power saver switched ${thermo.power_saving ? "on" : "off"}`);
    $("#power-saving-mode-display").text(`POWER SAVING IS ${thermo.power_saving ? "ON" : "OFF"}.`);
    display_current_temp();
    message_timeout = default_message_timeout()
  }

});