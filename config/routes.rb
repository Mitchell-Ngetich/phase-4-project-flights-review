Rails.application.routes.draw do
  resources :pages, only: [:index]
  resources :reviews, only: [:create, :destroy]
  #resources :airline, only: [:index, :show]
  get '/airlines', to: 'airlines#index'
  get '/airlines/:id', to: 'airlines#show'
  post '/airlines', to: 'airlines#create'
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
