class Api::PokedexController < ApplicationController
  def index
    render json: Pokedex.all
  end
  def new
  end

  def create
  end

  def update
  end

  def destroy
  end
end
