Rails.application.routes.draw do

  root 'map#index'
  resource :map, only: [:index]


  namespace :api do
    namespace :v1 do
      resources :streets, only: [:show, :index]
      resources :annotations, only: [:create]
    end
  end

end
