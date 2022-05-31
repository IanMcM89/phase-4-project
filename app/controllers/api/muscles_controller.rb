class Api::MusclesController < ApplicationController

  # GET /muscles
  def index
    render json: Muscle.all
  end

  # GET /muscles/:id
  def show
    muscle = find_muscle
    render json: muscle
  rescue ActiveRecord::RecordNotFound
    render json: "Muscle group not found", status: :not_found
  end

  private

  def find_muscle
    Muscle.find(params[:id])
  end
end
