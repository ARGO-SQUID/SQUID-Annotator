class Admin::LocationsController < AdminController

  def show
    @location = Location.find(params['id'])
  end

  def index
    @locations = Location.all.includes(:street)
  end

  def with_annotations
    @locations = Location.with_annotations.includes(:street)
  end

  def destroy
    @location = Location.find(params['id'])
    @location.destroy
    if @location.destroyed?
      @location.street.update_location_counts
      flash[:notice] = "That location has been deleted"
      redirect_to admin_street_path(@location.street)
    else
      flash[:notice] = "Sorry, we couldn't delete that location.  Please try again."
      redirect_to admin_location_path(@location)
    end
  end

end
