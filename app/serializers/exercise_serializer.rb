class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :is_weighted, :sets, :reps, :posted_by, :created_at

  belongs_to :muscle, serializer: ExerciseMuscleSerializer
  has_many :comments, serializer: ExerciseCommentSerializer
end
