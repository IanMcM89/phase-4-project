class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :user_id, :workout_id

  belongs_to :user, serializer: ReviewUserSerializer
  belongs_to :workout, serializer: MuscleWorkoutSerializer
end
