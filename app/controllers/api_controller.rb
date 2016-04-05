class ApiController < ApplicationController

  WHITELIST = ["http://arcane-brushlands-86807.herokuapp.com/"]

  before_action :ensure_origin_whitelisted

  def ensure_origin_whitelisted
    return if Rails.env == "development"
    unless WHITELIST.include?(request.referrer)
      head :unauthorized
    end
  end

end
