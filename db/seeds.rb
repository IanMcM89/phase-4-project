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

Category.create(id: 1, muscle_group: "Chest")
Category.create(id: 2, muscle_group: "Back")
Category.create(id: 3, muscle_group: "Biceps")
Category.create(id: 4, muscle_group: "Triceps")
Category.create(id: 5, muscle_group: "Shoulders")
Category.create(id: 6, muscle_group: "Abdomen")
Category.create(id: 7, muscle_group: "Legs")

Workout.create(
  id: 1,
  title: "Bicep Curls", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: true, 
  category_id: 3,
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
  category_id: 1,
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
  category_id: 4,
  posted_by: "ianmcm89"
)

Review.create(
  id: 1,
  comment: "",
  rating: 3,
  user_id: 2,
  workout_id: 1
)

Review.create(
  id: 1,
  comment: "",
  rating: 3,
  user_id: 2,
  workout_id: 4,

)

Review.create(
  id: 1,
  comment: "",
  rating: 3,
  user_id: 2,
  workout_id: 3
)