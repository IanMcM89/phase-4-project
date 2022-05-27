class User < ApplicationRecord
  has_secure_password
  has_many :workouts

  validates :username, presence: true, uniqueness: true
end
