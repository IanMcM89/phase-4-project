class Api::ReviewsController < ApplicationController

    # GET /reviews
    def index
      render json: Review.all
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
      params.permit(:comment, :rating)
    end
end
