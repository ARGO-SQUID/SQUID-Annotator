class Street < ActiveRecord::Base
  has_many :locations, dependent: :destroy
  validates_presence_of :street_name

  def self.update_all_averages
    all.each(&:update_average_bumpiness_data)
  end

  def self.update_all_annotation_counts
    all.each(&:update_location_counts)
  end

  def update_average_bumpiness_data
    update_attribute(:average_bumpiness, locations.average(:bumpiness).to_f)
  end

  def update_location_counts
    update_attributes(location_count:locations.count,
                      annotated_location_count: locations.with_annotations.count)
  end
end
