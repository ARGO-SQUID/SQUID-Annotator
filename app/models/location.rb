class Location < ActiveRecord::Base
  belongs_to :street
  has_many :annotations

  validates_presence_of :street_id, :lat, :long

  scope :light, -> { select('lat, long') }
  scope :with_annotations, -> { select { |a| a.annotations.size > 0 } }

end
