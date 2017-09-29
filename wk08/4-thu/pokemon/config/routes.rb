Rails.application.routes.draw do
  get 'pages/home'

  namespace :api do
    resources :pokedex
  end

  root 'pages#home'

  get 'pages/new', to: 'pages#new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
