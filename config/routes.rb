Rails.application.routes.draw do
  get 'kings_cup/index'

  get 'welcome/index'
  root 'welcome#index'
  get 'power_hour/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
