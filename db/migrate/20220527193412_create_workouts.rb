class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :title
      t.string :image_url
      t.string :description
      t.boolean :is_weighted
      t.integer :sets
      t.integer :reps
      t.integer :muscle_id
      t.text :target_muscles, default: "[]"
      t.string :posted_by

      t.timestamps
    end
  end
end
