Rails.application.routes.draw do
  resources :bookmarks

  get 'logout' => 'clearance/sessions#destroy'
  root to: "pages#index"
end
