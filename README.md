# Thermostat

## Setup

Create db thermostat and run migration.
`psql -c "create database thermostat" -U postgres`
`psql -f ./db/migrate/01_create_settings_table.sql -U postgres`
Run
`rackup`



## Specification:

    Thermostat starts at 20 degrees x
    You can increase the temperature with an up function x
    You can decrease the temperature with a down function x
    The minimum temperature is 10 degrees x
    If power saving mode is on, the maximum temperature is 25 degrees
    If power saving mode is off, the maximum temperature is 32 degrees x
    Power saving mode is on by default
    You can reset the temperature to 20 with a reset function
    You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
    (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## Tech Stack:
Javascript
Jasmine for testing (via ruby gem)
Install:
```
gem install jasmine
jasmine init
```
Run tests
```
rake jasmine
```
Head to localhost:8888.


## Domain Model
``` javascript
Class: Thermostat
  this.temp = 20
  this.power_saving = false
  this.min_temp = 10
  this.max_temp = Infinity

Prototype
  .up()
  .down()
  .set_power_saving( (true|false) )
  .reset()
  .energy_usage()
```

