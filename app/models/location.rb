class Location < ActiveRecord::Base
  belongs_to :street
  has_many :annotations, dependent: :destroy

  validates_presence_of :street_id, :lat, :long

  scope :light, -> { select('lat, long') }
  scope :with_annotations, -> { select { |a| a.annotations.size > 0 } }

  def update_annotation_count
    update_attribute(:annotation_count, annotations.count )
  end

end
