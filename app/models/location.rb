class Location < ActiveRecord::Base
  belongs_to :street
  has_many :annotations
end
