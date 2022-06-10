class WorkoutMuscleSerializer < ActiveModel::Serializer
  attributes :id, :group, :title, :sub_groups
end