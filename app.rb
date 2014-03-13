require 'sinatra'
require 'better_errors'
require 'net/http'

configure :development do
  use BetterErrors::Middleware
  # you need to set the application root in order to abbreviate filenames
  # within the application:
  BetterErrors.application_root = File.expand_path('..', __FILE__)
end

get '/' do
  uri = URI('http://***REMOVED***/github.com/***REMOVED***/status.png?branch=master')
  response = Net::HTTP.get_response(uri)
  location = response.header['Location']
  match = /build-(\w+)-\w+.png/i.match location
  build_status = match.captures[0]
  erb :index, :locals => { :build_status => build_status }
end
