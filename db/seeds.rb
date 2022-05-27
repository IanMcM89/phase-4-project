# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Workout.create(
  title: "Bicep Curls", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: true, 
  user_id: 1
)

Workout.create(
  title: "Pushups", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  user_id: 1
)

Workout.create(
  title: "Tricep Dips", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 20, 
  is_weighted: false, 
  user_id: 1
)