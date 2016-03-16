class Street < ActiveRecord::Base
  has_many :locations
  validates_presence_of :street_name

end
