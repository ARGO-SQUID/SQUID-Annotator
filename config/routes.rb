Rails.application.routes.draw do

  root 'map#index'
  resource :map, only: [:index]
  get "/hoboken" => "map#hoboken"
  get "/syracuse" => "map#syracuse"
  get "/staten_island" => "map#staten_island"


  namespace :api do
    namespace :v1 do
      resources :streets, only: [:index] do
        member do
          get :locations
        end
      end
      resources :annotations, only: [:create, :update, :destroy]
      resources :locations, only: [] do
        member do
          get :annotations
        end
      end
    end
  end

  namespace :admin do
    resources :welcome, only: [:index]
    resources :streets, only: [:index, :show]
    resources :locations, only: [:show, :destroy, :index] do
      collection do
        get :with_annotations
      end
    end
  end
  get "/admin" => "admin/welcome#index"


end
