class ApiController < ApplicationController

  WHITELIST = ["http://arcane-brushlands-86807.herokuapp.com/"]

  before_action :ensure_origin_whitelisted
  skip_before_action :user_basic_auth

  def ensure_origin_whitelisted
    # ##TODO FIX THIS

    # return if Rails.env == "development"
    logger.debug("**"*88)
    logger.debug(request.env["HTTP_ORIGIN"].inspect)
    logger.debug("**"*88)
    logger.debug(request.inspect)
    logger.debug("**"*88)
    #
    # unless WHITELIST.include?(request.env["HTTP_ORIGIN"])
    #   head :unauthorized
    # end
  end

end
