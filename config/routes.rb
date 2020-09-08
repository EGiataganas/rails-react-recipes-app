Rails.application.routes.draw do
  scope :api do
    resources :recipes, only: [:index, :update]
  end
end
