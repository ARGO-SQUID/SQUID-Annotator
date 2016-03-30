require 'csv'
file_name = 'lib/csvs/seeds.csv'
data = []
csv = CSV.parse(File.read(file_name, {encoding: 'UTF-8'}), :headers => true)
csv.each do |row|
  data << row.to_hash
end

data.group_by{|s|s["street_name"]}.each do |street_name, street_locations|
  s = Street.create(street_name: street_name)
  locs = street_locations.sort_by{|l| ['reading_timestamp']}
  locs.each_with_index do |location, index|
    s.locations.create(lat: location['lat'],
                       long: location['long'],
                       reading_device_id: location['reading_device_id'],
                       reading_timestamp: location['reading_timestamp'],
                       bumpiness: location['bumpiness'],
                       image: location['image'],
                       order: index)
  end
end

Street.all.each(&:update_average_bumpiness_data)

# s1 = Street.create(
#   street_name: "Harrison St",
#   bound_one: "S Warren St",
#   bound_one_lat: 43.044356,
#   bound_one_long: -76.150944,
#   bound_two: "Almond St",
#   bound_two_lat: 43.044364,
#   bound_two_long: -76.142179
# )
#
# s1.locations.create(lat: 43.044344, long: -76.150655, order: 1,
#                     image: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg")
# s1.locations.create(lat: 43.044344, long: -76.148488, order: 2,
#                     image: "http://cdn.playbuzz.com/cdn/0079c830-3406-4c05-a5c1-bc43e8f01479/7dd84d70-768b-492b-88f7-a6c70f2db2e9.jpg")
# s1.locations.create(lat: 43.044300, long: -76.146280, order: 3,
#                     image: "https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg")
# s1.locations.create(lat: 43.044300, long: -76.144280, order: 4,
#                     image: "https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg")
# s1.locations.create(lat: 43.044300, long: -76.142280, order: 5,
#                     image: "http://mcdaniel.hu/wp-content/uploads/2015/01/6784063-cute-cats-hd.jpg")
