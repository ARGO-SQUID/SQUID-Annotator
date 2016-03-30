class Api::V1::StreetsController < ApiController

  def index
    @streets = Street.all
    render json: @streets.to_json(include: :locations)
    # render json: @streets.to_json(include: {locations: {include: :annotations} })
    ##todo..make sure these locations are ordered
  end

end
