class Workout < ApplicationRecord
  belongs_to :category
  has_many :reviews
  has_many :users, through: :reviews

  validates :title, :image_url, presence: true
  validates :description, length: { maximum: 500,
  too_long: "500 characters maximum" }
  validates :reps, :sets, numericality: { only_integer: true }
end
