class MuscleSerializer < ActiveModel::Serializer
  attributes :id, :group

  has_many :workouts
end
