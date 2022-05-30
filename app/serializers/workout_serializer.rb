class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :is_weighted, :sets, :reps, :category_id, :posted_by

  belongs_to :category
  has_many :reviews
end
