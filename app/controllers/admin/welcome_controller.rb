class Admin::WelcomeController < AdminController

  def index
    @street_count   = Street.all.count
    @location_count =  Location.all.count
    @annotated_location_count = Location.with_annotations.count
  end

end
