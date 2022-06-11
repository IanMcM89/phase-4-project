class ExerciseMuscleSerializer < ActiveModel::Serializer
  attributes :id, :group, :title, :sub_groups
end