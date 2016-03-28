class Api::V1::LocationsController < ApiController

  def annotations
    @location = Location.find(params[:id])
    render json: @location.annotations
  end
end
