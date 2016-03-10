s1 = Street.create(
  street_name: "Harrison St",
  bound_one: "S Warren St",
  bound_one_lat: 43.044356,
  bound_one_long: -76.150944,
  bound_two: "Almond St",
  bound_two_lat: 43.044364,
  bound_two_long: -76.142179
)

s1.locations.create(lat: 43.044344, long: -76.150655, order: 1,
                    image: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg")
s1.locations.create(lat: 43.044344, long: -76.148488, order: 2,
                    image: "http://cdn.playbuzz.com/cdn/0079c830-3406-4c05-a5c1-bc43e8f01479/7dd84d70-768b-492b-88f7-a6c70f2db2e9.jpg")
s1.locations.create(lat: 43.044300, long: -76.146280, order: 3,
                    image: "https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg")
s1.locations.create(lat: 43.044300, long: -76.144280, order: 4,
                    image: "https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg")
s1.locations.create(lat: 43.044300, long: -76.142280, order: 5,
                    image: "http://mcdaniel.hu/wp-content/uploads/2015/01/6784063-cute-cats-hd.jpg")
