require 'sinatra'
require 'better_errors'
require 'json'
require 'net/http'

configure :development do
  use BetterErrors::Middleware
  # you need to set the application root in order to abbreviate filenames
  # within the application:
  BetterErrors.application_root = File.expand_path('..', __FILE__)
end

def retrieve_repositories_status()
  repositories = %w(
    ***REMOVED***
    ***REMOVED***
    ***REMOVED***
  )

  repositories_status = Hash.new
  repositories.each do |repo|
    uri = URI("http://***REMOVED***/github.com/#{repo}/status.png?branch=master")

    response = Net::HTTP.get_response(uri)
    location = response.header['Location']
    match = /build-(\w+)-\w+.png/i.match location

    repositories_status[repo.to_sym] = match.captures[0]
  end
  repositories_status
end

get '/' do
  repositories_status = retrieve_repositories_status
  erb :index, :locals => { :repositories_status => repositories_status }
end

get '/statuses.json' do
  content_type :json
  retrieve_repositories_status().to_json

end


