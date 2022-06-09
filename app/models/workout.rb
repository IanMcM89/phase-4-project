class Workout < ApplicationRecord
  has_many :comments
  has_many :users, through: :comments
  belongs_to :muscle

  serialize :target_muscles

  validates :title, :image_url, :target_muscles, presence: true
  validates :description, length: { maximum: 500,
  too_long: "500 characters maximum" }
end
