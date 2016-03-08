class Api::V1::StreetsController < ApiController

  def index
    @streets = Street.all
    render json: @streets.to_json(include: :locations)
    ##todo..make sure these locations are ordered
  end

  def show
    #TODO...
  end

end
