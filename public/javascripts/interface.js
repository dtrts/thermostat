$(document).ready(function () {

  var message_timeout;
  var thermo = new Thermostat();
  var message_display = $("#message-display")
  update_display();


  $("#up-1-button").click(up_1_click);
  $("#down-1-button").click(down_1_click);
  $("#reset-button").click(reset_click);
  $("#switch-power-saving-button").click(switch_power_saving_click);


  function up_1_click() {
    clearInterval(message_timeout);
    try {
      thermo.up(1);
      message_display.text("Temperature increased");
      update_display();
    } catch (e) {
      message_display.text("Maximum temperature reached.");
    }
    message_timeout = default_message_timeout()
  }

  function down_1_click() {
    clearInterval(message_timeout);
    try {
      thermo.down(1);
      message_display.text("Temperature decreased");
      update_display();
    } catch (e) {
      message_display.text("Minimum temperature reached.");
    }
    message_timeout = default_message_timeout()
  }

  function reset_click() {
    clearInterval(message_timeout);
    thermo.reset()
    message_display.text("Temperature reset");
    update_display();
    message_timeout = default_message_timeout()
  }

  function switch_power_saving_click() {
    clearInterval(message_timeout);
    thermo.switch_power_saving()
    message_display.text(`Power saver switched ${thermo.power_saving ? "on" : "off"}`);
    update_display();
    message_timeout = default_message_timeout()
  }

  function set_default_message() {
    message_display.text("Thermostat!");
  };

  function default_message_timeout() {
    return setTimeout(function () {
      set_default_message();
    }, 2500)
  }

  function display_current_temp() {
    $("#temp-display").text(thermo.temp);
  }

  function display_current_energy_usage() {
    $("#energy-usage-display").text(`Energy usage: ${thermo.energy_usage()}`)
    $("#display").attr('class', thermo.energy_usage())
  }

  function display_current_power_saving() {
    $("#power-saving-mode-display").text(`Power Saving: ${thermo.power_saving ? "ON" : "OFF"}`);
  }

  function update_display() {
    display_current_temp();
    display_current_power_saving();
    display_current_energy_usage();
  }

});