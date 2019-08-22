
$(document).ready(function() {
  var thermo = new Thermostat ();
  $("#temp-display").text(thermo.temp);
  var t;

  $("#up-1-button").click(function() {
    clearInterval(t);
    try
    {
      thermo.up(1);
      $("#message-display").text("Getting hotter...");
      $("#temp-display").text(thermo.temp);
    }
    catch(e)
    {
      $("#message-display").text(e); 
    }
    $("#energy-usage-display").text(thermo.energy_usage());
        
    t = setTimeout(function() { $("#message-display").text("Thermostat!") } , 2500 )
  });
  $("#down-1-button").click(function() {
    clearInterval(t);
    try
    {
      thermo.down(1);
      $("#message-display").text("Chilling down...");
      $("#temp-display").text(thermo.temp);
    }
    catch(e)
    {
      $("#message-display").text(e); 
    }
    $("#energy-usage-display").text(thermo.energy_usage());
        
    t = setTimeout(function() { $("#message-display").text("Thermostat!") } , 2500 )
  });
  $("#reset-button").click(function() {
    clearInterval(t);
    thermo.reset();
    $("#message-display").text("Temperature reset to default.");
    $("#temp-display").text(thermo.temp);
    $("#energy-usage-display").text(thermo.energy_usage());
        
    t = setTimeout(function() { $("#message-display").text("Thermostat!") } , 2500 )
  });

  $("#switch-power-saving-control").click(function () {
    clearInterval(t);
    thermo.switch_power_saving();
    $("#message-display").text(`Power saving ${thermo.power_saving ? "ON" : "OFF"}`);
    $("#power-saving-mode-display").text(`Power saving ${thermo.power_saving ? "ON" : "OFF"}`);
    $("#temp-display").text(thermo.temp);
    $("#energy-usage-display").text(thermo.energy_usage());
        
    t = setTimeout(function() { $("#message-display").text("Thermostat!") } , 2500 )
  });
});