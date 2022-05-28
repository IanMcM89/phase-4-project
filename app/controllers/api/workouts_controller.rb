class Api::WorkoutsController < ApplicationController

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

  # POST /workouts
  def create
    workout = @current_user.workouts.create!(workout_params)
    render json: workout, status: :created
  end

  private

  def find_workout
    Workout.find(params[:id])
  end

  def workout_params
    params.permit(:title, :image_url, :description, :is_weighted, :sets, :reps)
  end

end