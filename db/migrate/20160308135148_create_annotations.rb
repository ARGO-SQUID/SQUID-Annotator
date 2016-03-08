class CreateAnnotations < ActiveRecord::Migration
  def change
    create_table :annotations do |t|
      t.integer :location_id
      t.timestamps null: false
    end
  end
end
