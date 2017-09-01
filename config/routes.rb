Rails.application.routes.draw do
  resources :bookmarks
  root to: "pages#index"
end
