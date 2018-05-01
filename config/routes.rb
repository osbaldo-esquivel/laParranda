Rails.application.routes.draw do
  get 'users/new',  to: 'users#new'
  post 'users/new', to: 'users#create'
  get 'about/index'
  get 'kings_cup/index'
  get 'welcome/index'
  get 'power_hour/index'
  get '/login',     to: 'sessions#new'
  post '/login',    to: 'sessions#create'
  delete '/logout',   to: 'sessions#destroy'
  root 'welcome#index'
  resources :users
end