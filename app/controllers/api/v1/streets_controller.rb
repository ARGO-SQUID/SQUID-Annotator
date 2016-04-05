class Api::V1::StreetsController < ApiController

  def index
    @streets = Street.all
    render json: @streets.to_json(include: { locations: {only: [:lat, :long, :id]} })
  end

  def locations
    @street = Street.find(params[:id])
    render json: @street.locations.medium.to_json(include: :annotations)
  end

end
