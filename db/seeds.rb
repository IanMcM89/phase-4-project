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

Workout.create(
  id: 1,
  title: "Bicep Curls", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: true, 
  user_id: 1
)

Workout.create(
  id: 2,
  title: "Pushups", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  user_id: 1
)

Workout.create(
  id: 3,
  title: "Tricep Dips", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  user_id: 1
)