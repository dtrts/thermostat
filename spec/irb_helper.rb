require 'active_record'
ActiveRecord::Base.establish_connection(adapter: 'postgresql', database: 'thermostat')
require_relative '../models/setting.rb'
