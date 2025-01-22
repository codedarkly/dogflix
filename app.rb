require 'sinatra'

class DogflixApp < Sinatra::Base

  get '/' do
    #redirect to signup
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

  get '/welcome' do
    #take user on a tour through the app(this is only when you register)
  end

  get '/doggies' do
     #this is the doggy feed
  end

  get '/doggy/:id' do
    #get doggies profile
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

  run!
end
