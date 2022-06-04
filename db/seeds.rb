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
  title: "Abs",
  image_url: "/images/body/abs.png",
  coords: "161,328,116,284,116,210,160,189,204,209,435,250,523,250,524,276,435,276,435,250,204,209,204,283"
)
Muscle.create(
  id: 3, 
  group: "back_neck",
  title: "Back/Neck",
  image_url: "/images/body/back_neck.png",
  coords: "452,270,428,190,434,132,480,91,520,132,530,191,505,270,481,285,196,135,126,135,145,109,176,109,196,135"
)
Muscle.create(
  id: 4, 
  group: "upper_arms_shoulders",
  title: "Upper Arms/Shoulders",
  image_url: "/images/body/upper_arms_shoulders.png",
  coords: "99,233,72,216,92,133,126,134,199,133,225,230,256,215,234,133,120,134,408,132,392,214,416,233,443,132,406,132,517,131,544,240,572,225,546,131,125,134"
)
Muscle.create(
  id: 5, 
  group: "forearms",
  title: "Forearms",
  image_url: "/images/body/forearms.png",
  coords: "49,301,71,218,98,237,68,301,252,303,220,238,256,216,280,303,362,305,385,225,418,240,388,305,568,307,540,243,573,225,593,307"
)
Muscle.create(
  id: 6, 
  group: "upper_legs_glutes",
  title: "Upper Legs/Glutes",
  image_url: "/images/body/upper_legs_glutes.png",
  coords: "107,283,110,423,212,423,212,282,427,279,426,431,532,432,532,278"
)
Muscle.create(
  id: 7, 
  group: "lower_legs",
  title: "Lower Legs",
  image_url: "/images/body/lower_legs.png",
  coords: "109,433,120,541,203,540,209,433,423,435,435,553,521,553,532,435"
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
  posted_by: "ianmcm89"
)

Workout.create(
  id: 2,
  title: "Abs", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  muscle_id: 2,
  posted_by: "user1"
)

Workout.create(
  id: 3,
  title: "Back", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: true, 
  muscle_id: 3,
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
  posted_by: "ianmcm89"
)

Workout.create(
  id: 5,
  title: "Forearms", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  muscle_id: 5,
  posted_by: "user1"
)

Workout.create(
  id: 6,
  title: "Upper Legs/Glutes", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  muscle_id: 6,
  posted_by: "user1"
)

Workout.create(
  id: 7,
  title: "Lower Legs", 
  image_url: "https://cdn.pixabay.com/photo/2014/05/18/18/28/icon-347233_960_720.png", 
  description: "", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  muscle_id: 7,
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