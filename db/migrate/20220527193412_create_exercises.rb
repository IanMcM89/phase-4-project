class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :title
      t.string :image_url
      t.string :description
      t.boolean :is_weighted
      t.integer :sets
      t.integer :reps
      t.integer :muscle_id
      t.string :posted_by

      t.timestamps
    end
  end
end
