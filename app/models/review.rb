class Review < ApplicationRecord
  belongs_to :user
  belongs_to :workout

  validates :comment, :rating, presence: true
  validates :rating, numericality: { only_integer: true }
end
