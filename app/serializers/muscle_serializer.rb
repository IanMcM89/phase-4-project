class MuscleSerializer < ActiveModel::Serializer
  attributes :id, :group, :sub_groups, :title, :image_url, :coords

  has_many :workouts
end
