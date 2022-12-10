 ngetich
# config/initializers/cors.rb

 main

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'
 ngetich
    resource '*', headers: :any, methods: [:get, :post, :patch, :put, :destroy]

    resource '*', headers: :any, methods: [:get, :post, :patch, :put, :delete]
 main
  end
end