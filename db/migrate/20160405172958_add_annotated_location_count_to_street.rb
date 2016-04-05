class AddAnnotatedLocationCountToStreet < ActiveRecord::Migration
  def change
    add_column :streets, :annotated_location_count, :integer
  end
end
