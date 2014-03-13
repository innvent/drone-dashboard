require 'sinatra'
require 'better_errors'
require 'json'
require 'net/http'
require 'yaml'

configure :development do
  use BetterErrors::Middleware
  # you need to set the application root in order to abbreviate filenames
  # within the application:
  BetterErrors.application_root = File.expand_path('..', __FILE__)
end

app_config = YAML.load_file('config.yml')

set :drone_url, app_config["drone_url"]
set :repositories, app_config["repositories"]
set :public_folder, 'assets/'

def retrieve_repositories_status()
  repositories_status = Hash.new
  settings.repositories.each do |repo|
    uri = URI("#{settings.drone_url}/github.com/#{repo}/status.png?branch=master")

    response = Net::HTTP.get_response(uri)
    location = response.header['Location']
    match = /build-(\w+)-\w+.png/i.match location

    repositories_status[repo.to_sym] = match.captures[0]
  end
  repositories_status
end

get '/' do
  send_file 'index.html'
end

get '/statuses' do
  repositories_status = retrieve_repositories_status
  erb :statuses, :locals => { :repositories_status => repositories_status }
end

get '/statuses.json' do
  content_type :json
  repos_hash = { repositories: [] }
  repos_status = retrieve_repositories_status()

  repos_status.each do |k, v|
    repos_hash[:repositories] << {name: k, status: v}
  end
  repos_hash.to_json
end


