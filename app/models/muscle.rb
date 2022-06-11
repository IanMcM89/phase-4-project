class Muscle < ApplicationRecord
  has_many :exercises

  serialize :sub_groups
end
