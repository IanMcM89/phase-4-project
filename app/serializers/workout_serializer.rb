class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :is_weighted, :sets, :reps, :target_muscles, :posted_by

  belongs_to :muscle, serializer: WorkoutMuscleSerializer
  has_many :reviews, serializer: WorkoutReviewSerializer
end
