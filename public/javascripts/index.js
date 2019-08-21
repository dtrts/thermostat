$(document).ready(function () {

  var message_timeout;
  var thermo = new Thermostat();

  console.log(thermo);
  console.log(thermo.constructor);
  console.log(this);
  console.log(this.constructor);
  console.log(this.__proto__);
  console.log("where the fek am i");

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

  function click_down_1() {
    clearInterval(message_timeout);
    try {
      thermo.down(1);
      $("#message-display").text("You clicked the 1down button");
      display_current_temp();
    } catch (e) {
      $("#message-display").text(e);
    }

    message_timeout = default_message_timeout()
  };


  display_current_temp();

  $("#up-1-button").click(function () {
    console.log("Upping 1 nasfhafniuakjnkjsd")
    console.log(this)
    clearInterval(message_timeout);
    try {
      thermo.up(1);
      $("#message-display").text("You clicked the 1up button");
      display_current_temp();
    } catch (e) {
      $("#message-display").text(e);
    }

    message_timeout = default_message_timeout()
  });
  $("#down-1-button").click(click_down_1());

  $("#reset-button").click(function () {
    clearInterval(message_timeout);
    thermo.reset()
    $("#message-display").text("You clicked the reset button");
    display_current_temp();

    message_timeout = default_message_timeout()
  });
  $("#switch-power-saving-button").click(function () {
    clearInterval(message_timeout);
    thermo.switch_power_saving()
    $("#message-display").text("You clicked the switch power saving button");
    $("#power-saving-mode-display").text(`POWER SAVING IS ${thermo.power_saving ? "ON" : "OFF"}.`);
    display_current_temp();

    message_timeout = default_message_timeout()
  });


});