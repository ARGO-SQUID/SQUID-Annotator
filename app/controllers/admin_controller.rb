class AdminController < ApplicationController
  before_action :admin_auth

  def admin_auth
    return if Rails.env == "development"
    authenticate_or_request_with_http_basic('Enter your admin login information') do |username, password|
      username == ENV['RESURFACE_UN'] && password == ENV['RESURFACE_PASSWORD']
    end
  end
end
