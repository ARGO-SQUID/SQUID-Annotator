class AddCountsToModels < ActiveRecord::Migration
  def change
    add_column :streets, :location_count, :integer
    add_column :locations, :annotation_count, :integer
  end
end
