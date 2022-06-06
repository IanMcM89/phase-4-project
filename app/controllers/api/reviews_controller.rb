class Api::ReviewsController < ApplicationController

    # GET /reviews
    def index
      if params[:workout_id]
        workout = Workout.find(params[:workout_id])
        reviews = workout.reviews
      else
        reviews = Review.all
      end
      render json: reviews, include: :workout
    end
  
    # GET /reviews/:id
    def show
      review = find_review
      render json: review
    rescue ActiveRecord::RecordNotFound
      render json: "Review not found", status: :not_found
    end
  
    # POST /reviews
    def create
      review = @current_user.reviews.create!(review_params)
      render json: review, status: :created
    end
  
    private
  
    def find_review
      Review.find(params[:id])
    end
  
    def review_params
      params.permit(:comment, :rating, :user_id, :workout_id)
    end
end
