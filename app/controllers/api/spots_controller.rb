class Api::SpotsController < ApplicationController

  def index
    @spots = Spot.all
  end

  def create
    @spot = Spot.new(spot_params)
    @spot.host_id = current_user.id
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def edit
    @spot = Spot.find(params[:id])
  end

  def update
    @spot = current_user.spots.find(params[:id])
      if @spot.update_attributes(link_params)
        redirect_to link_url(@link)
      else
        flash.now[:errors] = @link.errors.full_messages
        render :edit
      end
  end
  
  def destroy
    @spot = Spot.find(params[:id])
    @spot.destroy

  end

  private

  def spot_params
    params.require(:spot).permit(:title, :description, :lat, :lng, :price, :group_size, :amenities)
  end

end
