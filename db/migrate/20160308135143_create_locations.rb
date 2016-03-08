class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.integer :street_id
      t.float :lat
      t.float :long
      t.string :image
      t.integer :order
      t.timestamps null: false
    end
  end
end
