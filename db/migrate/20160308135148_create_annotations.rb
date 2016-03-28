class CreateAnnotations < ActiveRecord::Migration
  def change
    create_table :annotations do |t|
      t.integer :location_id
      t.text :text
      t.text :image_url
      t.string :category
      t.float :height
      t.float :width
      t.float :x
      t.float :y
      t.string :shape
      t.timestamps null: false
    end
  end
end
