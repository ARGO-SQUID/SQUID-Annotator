class Street < ActiveRecord::Base
  has_many :locations, dependent: :destroy
  validates_presence_of :street_name

  def update_average_bumpiness_data
    update_attribute(:average_bumpiness, locations.average(:bumpiness).to_f)
  end
end
