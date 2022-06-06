class WorkoutReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating
end