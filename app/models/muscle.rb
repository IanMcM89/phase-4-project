class Muscle < ApplicationRecord
  has_many :workouts

  serialize :sub_groups
end
