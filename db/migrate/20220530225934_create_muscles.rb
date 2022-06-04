class CreateMuscles < ActiveRecord::Migration[6.1]
  def change
    create_table :muscles do |t|
      t.string :group
      t.string :title
      t.string :image_url
      t.string :coords

      t.timestamps
    end
  end
end
