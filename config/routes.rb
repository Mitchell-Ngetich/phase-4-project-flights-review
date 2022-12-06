Rails.application.routes.draw do
  get '/airlines', to: 'airlines#index'
  get '/airlines/:id', to: 'airlines#show'
  post '/airlines', to: 'airlines#create'
  patch '/airlines/:id', to: 'airlines#update'
  delete '/airlines/:id', to: 'airlines#destroy'
  post '/reviews', to: 'reviews#create'
  delete '/reviews/:id', to: 'reviews#destroy'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
