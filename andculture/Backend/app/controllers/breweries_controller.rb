class BreweriesController < ApplicationController
  def index
    @breweries = Brewery.all
    render json: @breweries
  end

  def show
    @brewery = Brewery.find(params[:id])
    render json: @brewery
  end

  def create
    @brewery = Brewery.create(brewery_params)
    render json: @brewery
  end

  def update
    get_brewery.update(brewery_params)
    render json: @brewery
  end

  private

  def get_brewery
    @brewery = Brewery.find(params[:id])
  end

  def brewery_params
    params.require(:brewery).permit(:name, :city, :brewery_type, :country, :latitude, :longitude, :phone, :postal_code, :street, :website_url)
  end

end
