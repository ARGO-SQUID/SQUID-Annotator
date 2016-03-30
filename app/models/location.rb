class Location < ActiveRecord::Base
  belongs_to :street
  has_many :annotations

  validates_presence_of :street_id, :lat, :long
end
