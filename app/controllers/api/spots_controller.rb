class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.all
    render 'api/spots/index'
  end


  def show
    @spot = Spot.find(params[:id])
    render 'api/users/show'
  end

end
