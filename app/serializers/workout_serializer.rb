class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :is_weighted, :sets, :reps, :posted_by, :created_at

  belongs_to :muscle, serializer: WorkoutMuscleSerializer
  has_many :comments, serializer: WorkoutCommentSerializer
end
