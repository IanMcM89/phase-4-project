class Api::CategoriesController < ApplicationController

  # GET /categories
  def index
    render json: Category.all
  end

  # GET /categories/:id
  def show
    category = find_category
    render json: category
  rescue ActiveRecord::RecordNotFound
    render json: "Category not found", status: :not_found
  end

  private

  def find_category
    Category.find(params[:id])
  end
end
