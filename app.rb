require 'sinatra'
require 'net/http'

get '/' do
  uri = URI('http://***REMOVED***/github.com/***REMOVED***/status.png?branch=master')
  response = Net::HTTP.get_response(uri)
  location = response.header['Location']
  match = /build-(\w+)-\w+.png/i.match location
  build_status = match.captures[0]
  erb :index, :locals => { :build_status => build_status }
end
