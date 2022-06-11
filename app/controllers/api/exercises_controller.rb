class Api::ExercisesController < ApplicationController

  # GET /exercises
  def index
    render json: Exercise.all, include: [:muscle, :comments]
  end

  # GET /exercises/:id
  def show
    exercise = find_exercise
    render json: exercise
  rescue ActiveRecord::RecordNotFound
    render json: "Exercise not found", status: :not_found
  end

  # DELETE /exercises/:id
  def destroy
    exercise = find_exercise
    exercise.destroy
    head :no_content
  end

  # POST /exercises
  def create
    exercise = Exercise.create!(exercise_params)
    render json: exercise, status: :created
  end

  private

  def find_exercise
    Exercise.find(params[:id])
  end

  def exercise_params
    params.permit(:title, :image_url, :description, :is_weighted, :sets, :reps, :muscle_id, :posted_by)
  end

end
