class ApiController < ApplicationController

  WHITELIST = ["http://arcane-brushlands-86807.herokuapp.com/",
               "http://squidannotator.herokuapp.com/",
               "http://squidannotator.herokuapp.com/syracuse",
               "http://squidannotator.herokuapp.com/hoboken",
               "http://squidannotator.herokuapp.com/staten_island"]

  before_action :ensure_origin_whitelisted

  def ensure_origin_whitelisted
    return if Rails.env == "development"
    unless WHITELIST.include?(request.referrer)
      head :unauthorized
    end
  end

end
