class MapController < ApplicationController

  def index
    gon.init_lat = 40.746851
    gon.init_long = -74.031932
  end

  def syracuse
    gon.init_lat = 43.042865
    gon.init_long = -76.158173
    render 'index'
  end

  def hoboken
    gon.init_lat = 40.746851
    gon.init_long = -74.031932
    render 'index'
  end

  def staten_island
    gon.init_lat = 40.636825
    gon.init_long = -74.081810
    render 'index'
  end
end
