class Street < ActiveRecord::Base
  has_many :locations, dependent: :destroy
  validates_presence_of :street_name

  def self.update_all_averages
    all.each(&:update_average_bumpiness_data)
  end

  def update_average_bumpiness_data
    update_attribute(:average_bumpiness, locations.average(:bumpiness).to_f)
  end
end
