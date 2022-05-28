class WorkoutsController < ApplicationController

  # GET /workouts
  def index
    render json: Workout.all
  end

  # GET /workouts/:id
  def show
    workout = find_workout
    render json: workout
  end

  private

  def find_workout
    Workout.find(params[:id])
  end

end
