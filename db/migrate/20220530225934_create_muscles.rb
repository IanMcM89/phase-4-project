class CreateMuscles < ActiveRecord::Migration[6.1]
  def change
    create_table :muscles do |t|
      t.string :group

      t.timestamps
    end
  end
end
