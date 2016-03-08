class Api::V1::StreetsController < ApiController

  def index
    @streets = Street.all
    render json: @streets
  end

  def show
    #TODO...
  end

end
