Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'test_app#index'

  get "admin", to: 'test_app#index'
  # Defines the root path route ("/")
  # root "articles#index"
end
