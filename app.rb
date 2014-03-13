require 'sinatra'
require 'better_errors'
require 'net/http'

configure :development do
  use BetterErrors::Middleware
  # you need to set the application root in order to abbreviate filenames
  # within the application:
  BetterErrors.application_root = File.expand_path('..', __FILE__)
end

repositories = %w(
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***
)

get '/' do
  repositories_status = Hash.new
  repositories.each do |repo|
    uri = URI("http://***REMOVED***/github.com/#{repo}/status.png?branch=master")

    response = Net::HTTP.get_response(uri)
    location = response.header['Location']
    match = /build-(\w+)-\w+.png/i.match location

    repositories_status[repo.to_sym] = match.captures[0]
  end
  erb :index, :locals => { :repositories_status => repositories_status }
end
