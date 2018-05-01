Rails.application.routes.draw do
  get 'users/new',  to: 'users#new'
  post 'users/new', to: 'users#create'
  get '/login',     to: 'sessions#new'
  post '/login',    to: 'sessions#create'
  delete '/logout',   to: 'sessions#destroy'
  get 'kings_cup/index'
  get 'welcome/index'
  get 'power_hour/index'
  root 'welcome#index'
  resources :users
end