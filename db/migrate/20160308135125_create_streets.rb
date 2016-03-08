class CreateStreets < ActiveRecord::Migration
  def change
    create_table :streets do |t|
      t.string :street_name

      t.string :bound_one
      t.float :bound_one_lat
      t.float :bound_one_long

      t.string :bound_two
      t.float :bound_two_lat
      t.float :bound_two_long

      t.timestamps null: false
    end
  end
end
