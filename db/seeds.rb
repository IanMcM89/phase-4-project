# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  id: 1,
  username: "ianmcm89",
  password: "Atlas-111",
  password_confirmation: "Atlas-111"
)

User.create(
  id: 2,
  username: "user1",
  password: "password1",
  password_confirmation: "password1"
)

Muscle.create(id: 1, group: "Chest")
Muscle.create(id: 2, group: "Back")
Muscle.create(id: 3, group: "Biceps")
Muscle.create(id: 4, group: "Triceps")
Muscle.create(id: 5, group: "Shoulders")
Muscle.create(id: 6, group: "Abdomen")
Muscle.create(id: 7, group: "Legs")

Workout.create(
  id: 1,
  title: "Bicep Curls", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: true, 
  muscle_id: 3,
  posted_by: "ianmcm89"
)

Workout.create(
  id: 2,
  title: "Pushups", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  muscle_id: 1,
  posted_by: "ianmcm89"
)

Workout.create(
  id: 3,
  title: "Tricep Dips", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  muscle_id: 4,
  posted_by: "ianmcm89"
)

User.second.reviews.create(
  id: 1,
  comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  rating: 3,
  user_id: 2,
  workout_id: 1
)

Review.create(
  id: 2,
  comment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  rating: 3,
  user_id: 2,
  workout_id: 2
)

Review.create(
  id: 3,
  comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  rating: 3,
  user_id: 2,
  workout_id: 3
)