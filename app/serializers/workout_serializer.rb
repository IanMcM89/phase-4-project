class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :is_weighted, :sets, :reps, :muscle_id, :posted_by

  belongs_to :muscle
  has_many :reviews
end
