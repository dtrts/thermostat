require 'sinatra/base'
require 'sinatra/reloader'
require 'sinatra/flash'
# Active Record
require 'sinatra/activerecord'
require 'active_record'
require_relative './models/setting.rb'

class Thermostat < Sinatra::Base
  register Sinatra::Reloader
  register Sinatra::Flash
  # register Sinatra::ActiveRecordExtension

  # enable :method_override
  # enable :sessions

  set :public_folder, File.dirname(__FILE__) + '/public'

  get '/settings' do
    "{\"temperature\":\"#{Setting.find_by_name('temperature').value}\",\"psm\":\"#{Setting.find_by_name('psm').value}\",\"location\":\"#{Setting.find_by_name('location').value}\"}"
  end

  post '/settings' do
    params.each do |name|
      record = Setting.find_by_name(name[0])
      record.value = name[1]
      record.save!
    end
    return
  end
end
