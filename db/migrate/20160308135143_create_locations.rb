class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.integer :street_id
      t.float :lat
      t.float :long
      t.string :image
      t.integer :order
      t.float :bumpiness
      t.string :reading_device_id
      t.datetime :reading_timestamp

      t.timestamps null: false
    end
  end
end
