class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :user_basic_auth

  def user_basic_auth
    return if Rails.env.development?
    authenticate_or_request_with_http_basic('Enter your login information') do |username, password|
      username == ENV['RESURFACE_UN'] && password == ENV['RESURFACE_PASSWORD']
    end
  end
end
