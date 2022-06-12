class Api::CommentsController < ApplicationController

  # GET /comments
  def index
    if params[:exercise_id]
      exercise = Exercise.find(params[:exercise_id])
      comments = exercise.comments
    else
      comments = Comment.all
    end
    render json: comments, include: [:user, :exercise]
  end

  # GET /comments/:id
  def show
    comment = find_comment
    render json: comment
  rescue ActiveRecord::RecordNotFound
    render json: "Comment not found", status: :not_found
  end

  # POST /comments
  def create
    comment = @current_user.comments.create!(comment_params)
    render json: comment, status: :created
  end

  # PATCH /comments/:id
  def update
    comment = find_comment
    comment.update(comment_params)
    render json: comment
  end

  # DELETE /comments/:id
  def destroy
    comment = find_comment
    comment.destroy
    head :no_content
  end

  private

  def find_comment
    Comment.find(params[:id])
  end

  def comment_params
    params.permit(:message, :user_id, :exercise_id)
  end
end
