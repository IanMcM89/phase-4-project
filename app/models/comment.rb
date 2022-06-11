class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :exercise

  validates :message, presence: true
end
