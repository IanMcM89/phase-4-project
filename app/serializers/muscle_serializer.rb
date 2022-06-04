class MuscleSerializer < ActiveModel::Serializer
  attributes :id, :group, :title, :image_url, :coords

  has_many :workouts
end
