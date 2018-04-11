Rails.application.routes.draw do
  get 'about/index'
  get 'kings_cup/index'
  get 'welcome/index'
  get 'power_hour/index'

  root 'welcome#index'
  resources :users
end