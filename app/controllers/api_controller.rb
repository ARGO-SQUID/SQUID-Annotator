class ApiController < ApplicationController

  WHITELIST = [""]

  before_action :ensure_origin_whitelisted

  def ensure_origin_whitelisted
    return if Rails.env == "development"
    unless WHITELIST.include?(request.env["HTTP_ORIGIN"]) || INTRA_APPLICATION.include?(request.env["HTTP_REFERER"])
      head :unauthorized
    end
  end

end
