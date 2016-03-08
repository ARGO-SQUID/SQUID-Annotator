class Street < ActiveRecord::Base
  has_many :locations
  validates_presence_of :street_name, :bound_one, :bound_one_lat,
                        :bound_one_long, :bound_two, :bound_two_lat,
                        :bound_two_long

end
