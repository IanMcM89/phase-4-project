class Exercise < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :users, through: :comments
  belongs_to :muscle

  validates :title, :image_url, :description, presence: true
  validates :description, length: { maximum: 500,
  too_long: "500 characters maximum" }
end
