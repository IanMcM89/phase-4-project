class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :is_weighted, :sets, :reps

  belongs_to :user
end
