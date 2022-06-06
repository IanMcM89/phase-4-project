Rails.application.routes.draw do
  namespace :api do
    resources :workouts do
      resources :reviews, only: [:show, :index]
    end
    resources :muscles, only: [:index, :show]
    resources :reviews, only: [:index, :show, :create] do
    end
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
