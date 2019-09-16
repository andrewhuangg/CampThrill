# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
ActiveRecord::Base.transaction do

## DEMO USER
User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')

user_demo = User.create!(
  email: "mamba@lakers.com",
  password: "lakers24",
  first_name: "kobe",
  last_name: "bryant"
)


## SPOTS
Spot.destroy_all
Spot.connection.execute('ALTER SEQUENCE spots_id_seq RESTART WITH 1')

spot_1 = Spot.create!(
  host_id: user_demo.id,
  title: "Glen Canyon National Recreation Area",
  description: "This National Park Service-run area consists of over a million acres of lake and desert. The blue waters of Lake Powell are great for swimming, boating, fishing, and kayaking. Whatever your sport, this landscape will have you feeling like you found a desert oasis. Tours of the Glen Canyon Dam offer you the chance to learn about history and engineering. You may also want to go to the sacred, historic Rainbow Bridge National Monument. There's also the incredible Antelope Slot Canyons, only a short drive away. When you get tired of sightseeing, take a hike through wilderness, canyons and secret passageways.In terms of campgrounds, there's a lot to choose from, including many primitive sites. There are also developed sites with full water and electricity hookups.",
  price: 45,
  lat: 37.386593,
  lng: -110.842401,
  group_size: 4,
  campfires: true,
  toilets: true,
  showers: false,
  grills: false,
  signage: true,
  pets_allowed: 2
)

spot_2 = Spot.create!(
  host_id: user_demo.id,
  title: "Upper Pines Campground",
  description: "As with most things in Yosemite, bigger is better. Upper Pines Campground is no exception, boasting 240 campsites. It very well may be the most popular campground in Yosemite Valley, due, in part, to the views of surrounding icons, like El Capitan and Half Dome. Each site features a fire ring, food locker, and picnic table, and costs $26 per night. Upper Pines gets crowded in a hurry, so go in with the knowledge that you'll be nestled up next to your neighbor, with very little privacy (I mean...it is Yosemite Valley after all). That being said, the central location and convenience of Upper Pines makes it a no-brainer when visiting Yosemite. ",
  price: 10,
  lat: 37.736206,
  lng: -119.563828,
  group_size: 3,
  campfires: true,
  toilets: true,
  showers: false,
  grills: true,
  signage: true,
  pets_allowed: 1
)

spot_3 = Spot.create!(
  host_id: user_demo.id,
  title: "Trollveggen camping AS",
  description: "minutes away from the troll wall! The Troll Wall has been a prestigious goal for climbers and base jumpers alike",
  price: 50,
  lat: 62.494605,
  lng: 7.758237,
  group_size: 3,
  campfires: true,
  toilets: true,
  showers: false,
  grills: true,
  signage: false,
  pets_allowed: 0
)

spot_4 = Spot.create!(
  host_id: user_demo.id,
  title: "Machu Pichu Camp",
  description: "Machu Picchu Camping Trek. ... After reaching Machu Picchu, enjoy a private tour of the sacred grounds and a luxurious lunch overlooking Machu Picchu. Finally, cruise the Vistadome train while returning to Cusco, where a Celebration Dinner and cozy lodge awaits.",
  price: 100,
  lat: -13.206784,
  lng: -72.530167,
  group_size: 4,
  campfires: false,
  toilets: false,
  showers: false,
  grills: false,
  signage: true,
  pets_allowed: 0
)

spot_5 = Spot.create!(
  host_id: user_demo.id,
  title: "Chugach National Forest",
  description: "kayak Prince William Sound where you’ll be surrounded by towering glaciers and joined by orcas.",
  price: 50,
  lat: 60.897849,
  lng: -146.333295,
  group_size: 2,
  campfires: true,
  toilets: true,
  showers: false,
  grills: false,
  signage: false,
  pets_allowed: 1
)


Spot.all.each_with_index do |spot, idx|
  index_url = "https://campthrill-seed.s3-us-west-1.amazonaws.com/"

  spot_idx = idx + 1

  file_title = "#{spot_idx}" + ".jpg"
  
  new_url = index_url + "#{spot_idx}" + ".jpg"
  
  file = open(new_url)
  
  spot.photo.attach(io: file, filename: file_title)

end

# looped through all spots
# set photo url to a variable 
# grabbed spot seed and added 1
# open(url of photo on aws) - convets url to file so heroku reads it
# spot.photo.attach (io files, filename: what we want to name our file) and assigned file to the file we made 

end