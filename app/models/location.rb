class Location < ActiveRecord::Base
  belongs_to :street
  has_many :annotations, dependent: :destroy

  validates_presence_of :street_id, :lat, :long

  scope :light, -> { select('lat, long') }
  scope :with_annotations, -> { where("annotation_count > ?", 0)

  def update_annotation_count
    update_attribute(:annotation_count, annotations.count )
    street.update_location_counts
  end

end
