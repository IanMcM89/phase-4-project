class CommentSerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id, :exercise_id, :created_at

  belongs_to :user, serializer: CommentUserSerializer
  belongs_to :exercise, serializer: MuscleExerciseSerializer
end
