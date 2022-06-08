class CommentSerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id, :workout_id, :created_at

  belongs_to :user, serializer: CommentUserSerializer
  belongs_to :workout, serializer: MuscleWorkoutSerializer
end
