class Location < ActiveRecord::Base
  belongs_to :street
  has_many :annotations, dependent: :destroy

  validates_presence_of :street_id, :lat, :long

  scope :light, -> { select('lat, long') }
  scope :medium, -> { select("id, lat, long, bumpiness, image, to_char(reading_timestamp, 'Mon DD HH24:MI:SS') as display_reading_timestamp") }
  scope :with_annotations, -> { where("annotation_count > ?", 0) }

  def update_annotation_count
    update_attribute(:annotation_count, annotations.count )
    street.update_location_counts
  end

end
