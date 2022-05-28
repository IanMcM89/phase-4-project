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

  # DELETE /workouts/:id
  def destroy
    workout = find_workout
    workout.destroy
    head :no_content
  end

  private

  def find_workout
    Workout.find(params[:id])
  end

end
