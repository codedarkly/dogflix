require 'sinatra'
require 'sinatra/activerecord'
require 'dotenv'
require 'pony'
require 'redis'
require 'pg'



Dotenv.load
Dir[File.join(File.dirname(__FILE__), 'models', '*.rb')].each { |model| require model}


class DogFlixApp < Sinatra::Base

  get '/' do
    #redirect to signup
    'hello'
  end

  get '/signup' do
    #get user email
  end

  post '/signup' do
    #confirm user email template and trigger magic link
  end

  get '/signin' do
    #get user email
  end

  post '/signin' do
   #confirm user email template and trigger magic link
  end

  post '/send/magic-link' do
    #send e-mail template with magic link
  end

  get '/setup/profile' do
    #user info(name, username, gender, city, country)
  end

  post '/setup/profile' do
    #save user data to db
  end

  get '/setup/doggy/profile' do
    #tells us about your doggy (name, breed, gender, age)
  end

  post '/setup/doggy/profile' do
    #cache in redis
  end

  get '/setup/doggy/profile/image' do
    #add your doggies photo
  end

  post '/setup/doggy/profile/image' do
    #cache in redis
  end

  get '/setup/add/schedule' do
    #add play date schedule
  end

  post '/setup/add/schedule' do
    #save everything to db
  end

  get '/welcome' do
    #take user on a tour through the app(this is only when you register)
  end

  get '/doggies' do
     #this is the doggy feed
     doggy = Doggy.new
     @doggies = doggy.get_all_dogs
     #@result = DogParent.includes({:doggies => [:galleries]}).find(1)
     erb :doggies
  end

  get '/doggy/:id' do
    #get doggies profile
    content_type :json
    doggies = []
    dog_parent = DogParent.includes({:doggies => [:galleries]}).find(params[:id])
    dog_parent.doggies.each do |doggy|
      doggies << {
        name: doggy.name,
        breed: doggy.breed,
        age: doggy.doggy_age,
        gender: doggy.gender,
        image: doggy.image,
        bio: doggy.bio
      }
    end
    doggies.to_json
    @result = {owner: dog_parent, doggies: doggies}.to_json
  end

  get '/api/doggy/:parent_id' do
    #get doggies profile
    content_type :json
    dog = Dog.new
    #user = User.find()
    #@result = dog.get_dog(params[:id]).to_json
  end


  get '/doggy/parent/:id' do
    #get doggy parents profile
  end

  get '/profile' do
    #users profile
  end

  get '/doggy/profile' do
    #dogs profile
  end

  get '/doggy/profile/gallery' do
    #photos of the doggy
  end

  post '/create/doggy/gallery' do
    #create an album of photos of the doggy
  end

  post '/update/profile' do
    #update user profile
  end

  post '/update/doggy/profile' do
    #update doggy profile
  end

  get '/doggy/dates' do
    #doggy date schedule
  end

  post '/add/doggy/date' do
    #add doggy date
  end

  post '/request/doggy/date' do
    #send a message and a request to go on a doggy date
  end

  get '/settings' do
    #reminders, deactivate account etc
  end

  post '/settings' do
    #reminders, deactivate account etc
  end

  get '/messages' do

  end

  post '/messages' do

  end

  get '/message' do

  end

  post '/messages' do

  end


  run!
end
