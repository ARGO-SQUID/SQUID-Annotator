Rails.application.routes.draw do

  root 'map#index'
  resource :map, only: [:index]


  namespace :api do
    namespace :v1 do
      resources :streets, only: [:index, :show]
      resources :annotations, only: [:create, :update, :destroy]
      resources :locations, only: [] do
        member do
          get :annotations
        end
      end
    end
  end

end
