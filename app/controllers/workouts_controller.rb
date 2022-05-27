class WorkoutsController < ApplicationController

  def index
    render json: Workout.all
  end

  def show
    workout = find_workout
    render json: workout
  end

  private

  def find_workout
    Workout.find(params[:id])
  end

end
