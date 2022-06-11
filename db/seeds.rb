# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  username: "ianmcm89",
  password: "Atlas-111",
  password_confirmation: "Atlas-111"
)

User.create(
  username: "user1",
  password: "password1",
  password_confirmation: "password1"
)

User.create(
  username: "User_02",
  password: "password2",
  password_confirmation: "password2"
)

User.create(
  username: "user_003",
  password: "password3",
  password_confirmation: "password3"
)

User.create(
  username: "USER4",
  password: "password4",
  password_confirmation: "password4"
)

User.create(
  username: "user_005",
  password: "password5",
  password_confirmation: "password5"
)

Muscle.create(
  id: 1, 
  group: "chest",
  sub_groups: ["Pecs"],
  title: "Chest",
  image_url: "/images/body/chest.png",
  coords: "160,186,132,197,115,213,115,145,160,141,206,145,208,210,186,195"
)

Muscle.create(
  id: 2, 
  group: "abs",
  sub_groups: ["Abdominals", "Qbliques"],
  title: "Abs",
  image_url: "/images/body/abs.png",
  coords: "161,328,116,284,116,210,160,189,204,209,435,250,523,250,524,276,435,276,435,250,204,209,204,283"
)

Muscle.create(
  id: 3, 
  group: "back_neck",
  sub_groups: ["Lats", "Traps", "Rhumboids", "Erector Spinae"],
  title: "Back/Neck",
  image_url: "/images/body/back_neck.png",
  coords: "452,270,428,190,434,132,480,91,520,132,530,191,505,270,481,285,196,135,126,135,145,109,176,109,196,135"
)

Muscle.create(
  id: 4, 
  group: "arms_shoulders",
  sub_groups: ["Biceps", "Triceps", "Forearms", "Deltoids"],
  title: "Arms/Shoulders",
  image_url: "/images/body/upper_arms_shoulders.png",
  coords: "45,305,80,154,101,130,128,142,75,305,247,305,364,303,401,150,424,132,445,132,389,303,568,301,512,133,539,133,555,156,594,301,247,305,192,139,223,132,237,153,272,305"
)

Muscle.create(
  id: 5, 
  group: "legs_glutes",
  sub_groups: ["Quads", "Hamstrings", "Glutes", "Calves"],
  title: "Legs/Glutes",
  image_url: "/images/body/legs_glutes.png",
  coords: "117,544,106,297,136,297,157,333,184,295,215,295,204,545,436,549,422,325,432,277,479,285,523,275,535,325,522,550"
)

Exercise.create(
  title: "Pushups", 
  image_url: "/images/camera.png", 
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem nulla pharetra diam sit amet nisl suscipit. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Auctor elit sed vulputate mi sit amet mauris commodo. In pellentesque massa placerat duis ultricies lacus. Risus quis varius quam quisque id diam vel quam. Accumsan in nisl nisi scelerisque eu ultrices. Venenatis lectus magna fringilla urna.", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  muscle_id: 1,
  posted_by: "ianmcm89"
)

Exercise.create(
  title: "Crunches", 
  image_url: "/images/camera.png", 
  description: "Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Scelerisque in dictum non consectetur a erat nam at. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. A arcu cursus vitae congue mauris rhoncus.", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  muscle_id: 2,
  posted_by: "user1"
)

Exercise.create(
  title: "Pull Ups", 
  image_url: "/images/camera.png", 
  description: "Odio morbi quis commodo odio aenean. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Tortor condimentum lacinia quis vel eros. Viverra nam libero justo laoreet sit amet cursus sit amet.", 
  sets: 3,
  reps: 12, 
  is_weighted: true, 
  muscle_id: 3,
  posted_by: "ianmcm89"
)

Exercise.create(
  title: "Tricep Dips", 
  image_url: "/images/camera.png", 
  description: "Massa tincidunt dui ut ornare lectus sit amet est. Leo a diam sollicitudin tempor id eu. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae.", 
  sets: 3,
  reps: 12, 
  is_weighted: false, 
  muscle_id: 4,
  posted_by: "ianmcm89"
)

Exercise.create(
  title: "Weighted Squats", 
  image_url: "/images/camera.png", 
  description: "Faucibus a pellentesque sit amet porttitor eget dolor morbi. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Velit scelerisque in dictum non consectetur a. Mattis nunc sed blandit libero volutpat. Risus viverra adipiscing at in tellus integer feugiat scelerisque.", 
  sets: 3,
  reps: 12, 
  is_weighted: true, 
  muscle_id: 5,
  posted_by: "user1"
)

Exercise.create(
  title: "Incline Bench", 
  image_url: "/images/camera.png", 
  description: "Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sem fringilla ut morbi tincidunt. Nulla pharetra diam sit amet nisl suscipit adipiscing. Amet cursus sit amet dictum sit amet justo donec. Sagittis nisl rhoncus mattis rhoncus urna neque viverra.", 
  sets: 3,
  reps: 12, 
  is_weighted: true, 
  muscle_id: 1,
  posted_by: "User_02"
)

Exercise.create(
  title: "Plank", 
  image_url: "/images/camera.png", 
  description: "Quisque non tellus orci ac auctor. Tempus egestas sed sed risus pretium quam vulputate dignissim. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.", 
  sets: 3,
  reps: 1, 
  is_weighted: false, 
  muscle_id: 2,
  posted_by: "user1"
)

Exercise.create(
  title: "Deadlifts", 
  image_url: "/images/camera.png", 
  description: "Purus gravida quis blandit turpis cursus. Aliquet risus feugiat in ante. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et.", 
  sets: 3,
  reps: 8, 
  is_weighted: true, 
  muscle_id: 3,
  posted_by: "User_02"
)

Exercise.create(
  title: "Skull Crushers", 
  image_url: "/images/camera.png", 
  description: "Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Faucibus pulvinar elementum integer enim neque volutpat ac. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Eget dolor morbi non arcu. ", 
  sets: 3,
  reps: 8, 
  is_weighted: true, 
  muscle_id: 4,
  posted_by: "ianmcm89"
)

Exercise.create(
  title: "Pistol Squats", 
  image_url: "/images/camera.png", 
  description: "Augue ut lectus arcu bibendum. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. In iaculis nunc sed augue lacus viverra vitae.", 
  sets: 3,
  reps: 12, 
  is_weighted: true, 
  muscle_id: 5,
  posted_by: "User_02"
)

# Comments Seeds

Exercise.all.each  do |w| 
  Comment.create(
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    user_id: 1,
    exercise_id: w.id
  )
end

Exercise.all.each  do |w| 
  Comment.create(
    message: "Augue ut lectus arcu bibendum.",
    user_id: 2,
    exercise_id: w.id
  )
end

Exercise.all.each  do |w| 
  Comment.create(
    message: "Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies.",
    user_id: 3,
    exercise_id: w.id
  )
end

Exercise.all.each  do |w| 
  Comment.create(
    message: "Eget nunc lobortis mattis aliquam faucibus purus in massa. Molestie nunc non blandit massa enim nec dui nunc.",
    user_id: 4,
    exercise_id: w.id
  )
end

Exercise.all.each  do |w| 
  Comment.create(
    message: "Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Amet aliquam id diam maecenas ultricies. Et tortor at risus viverra adipiscing at in. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Eget velit aliquet sagittis id consectetur purus ut faucibus. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Lacinia quis vel eros donec ac.",
    user_id: 3,
    exercise_id: w.id
  )
end