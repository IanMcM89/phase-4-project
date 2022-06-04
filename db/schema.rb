# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_30_225934) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "muscles", force: :cascade do |t|
    t.string "group"
    t.string "title"
    t.string "image_url"
    t.string "coords"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string "comment"
    t.integer "rating"
    t.integer "user_id"
    t.integer "workout_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "workouts", force: :cascade do |t|
    t.string "title"
    t.string "image_url"
    t.string "description"
    t.boolean "is_weighted"
    t.integer "sets"
    t.integer "reps"
    t.integer "muscle_id"
    t.string "posted_by"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
