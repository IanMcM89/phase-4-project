class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :workout

  validates :message, presence: true
end
