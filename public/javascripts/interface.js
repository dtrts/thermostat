$(document).ready(function () {

  var message_timeout;
  var thermo = new Thermostat();
  //  Get settings from server
  // set thermo stat
  // set city select
  retrieve_settings();

  function retrieve_settings() {
    $.get('http://localhost:9292/settings', function (data) {
      var yay = JSON.parse(data)
      thermo.temp = Number(yay.temperature)
      thermo.power_saving = yay.psm === "on" ? true : false
      $('#current-city').val(yay.location);
      update_display();
    });

  };

  function update_settings() {
    $.post("http://localhost:9292/settings", {
      temperature: thermo.temp,
      psm: thermo.psm ? "on" : "off",
      location: $('#current-city').val()
    });
  }



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
      update_settings();
      update_display();
      message_display.text("Temperature increased");
    } catch (e) {
      message_display.text("Maximum temperature reached.");
    }
    message_timeout = default_message_timeout()
  }

  function down_1_click() {
    clearInterval(message_timeout);
    try {
      thermo.down(1);
      update_settings();
      update_display();
      message_display.text("Temperature decreased");
    } catch (e) {
      message_display.text("Minimum temperature reached.");
    }
    message_timeout = default_message_timeout()
  }

  function reset_click() {
    clearInterval(message_timeout);
    thermo.reset()
    update_settings();
    update_display();
    message_display.text("Temperature reset");
    message_timeout = default_message_timeout()
  }

  function switch_power_saving_click() {
    clearInterval(message_timeout);
    thermo.switch_power_saving()
    update_settings();
    update_display();
    message_display.text(`Power saver switched ${thermo.power_saving ? "on" : "off"}`);
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
    display_weather()
  }


  // Weather API
  $('#current-city').change(function () {
    event.preventDefault();
    update_settings();
    display_weather();
  });

  function display_weather() {
    var city = $('#current-city').val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=514c3c2ca0e602abc75532a437e2132b';
    var units = '&units=metric';
    $.get(url + token + units, function (data) {
      $('#current-temperature').text(data.main.temp);
    });
  };


});