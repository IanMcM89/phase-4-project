class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :user_id, :workout_id

  belongs_to :user
end
