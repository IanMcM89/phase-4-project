class Workout < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews
  belongs_to :muscle

  serialize :target_muscles

  validates :title, :image_url, :target_muscles, presence: true
  validates :description, length: { maximum: 500,
  too_long: "500 characters maximum" }
  validates :reps, :sets, numericality: { only_integer: true }
end
