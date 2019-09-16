class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.all
    render 'api/spots/index'
  end


  def show
    @spot = Spot.with_attached_photos.find(params[:id])
    render 'api/spots/show'
  end

end
