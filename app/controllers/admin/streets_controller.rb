class Admin::StreetsController < AdminController

  def index
    @streets = Street.all
  end

  def show
    @street = Street.find(params['id'])
  end
end
