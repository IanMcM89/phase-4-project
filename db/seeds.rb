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

Muscle.create(
  id: 1, 
  group: "chest",
  title: "Chest",
  image_url: "/images/body/chest.png",
  coords: "160,186,132,197,115,213,115,145,160,141,206,145,208,210,186,195"
)

Muscle.create(
  id: 2, 
  group: "abs",
  sub_groups: "[Abdominals, Qbliques]",
  title: "Abs",
  image_url: "/images/body/abs.png",
  coords: "161,328,116,284,116,210,160,189,204,209,435,250,523,250,524,276,435,276,435,250,204,209,204,283"
)

Muscle.create(
  id: 3, 
  group: "back_neck",
  sub_groups: "[Lats, Traps, Rhumboids, Erector Spinae]",
  title: "Back/Neck",
  image_url: "/images/body/back_neck.png",
  coords: "452,270,428,190,434,132,480,91,520,132,530,191,505,270,481,285,196,135,126,135,145,109,176,109,196,135"
)

Muscle.create(
  id: 4, 
  group: "arms_shoulders",
  sub_groups: "[Biceps, Triceps, Forearms, Deltoids]",
  title: "Arms/Shoulders",
  image_url: "/images/body/upper_arms_shoulders.png",
  coords: "45,305,80,154,101,130,128,142,75,305,247,305,364,303,401,150,424,132,445,132,389,303,568,301,512,133,539,133,555,156,594,301,247,305,192,139,223,132,237,153,272,305"
)

Muscle.create(
  id: 5, 
  group: "legs_glutes",
  sub_groups: "[Quads, Hamstrings, Glutes, Calves]",
  title: "Legs/Glutes",
  image_url: "/images/body/legs_glutes.png",
  coords: "117,544,106,297,136,297,157,333,184,295,215,295,204,545,436,549,422,325,432,277,479,285,523,275,535,325,522,550"
)

Workout.create(
  id: 1,
  title: "Pushups", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  muscle_id: 1,
  target_muscles: "[Pecs]",
  posted_by: "ianmcm89"
)

Workout.create(
  id: 2,
  title: "Crunches", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  muscle_id: 2,
  target_muscles: "[Abdominals]",
  posted_by: "user1"
)

Workout.create(
  id: 3,
  title: "Pull Ups", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: true, 
  muscle_id: 3,
  target_muscles: "[Lats, Rhomboids]",
  posted_by: "ianmcm89"
)

Workout.create(
  id: 4,
  title: "Tricep Dips", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  muscle_id: 4,
  target_muscles: "[Triceps]",
  posted_by: "ianmcm89"
)

Workout.create(
  id: 5,
  title: "Weighted Squats", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: true, 
  muscle_id: 5,
  target_muscles: "[Glutes, Quads, Hamstrings]",
  posted_by: "user1"
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