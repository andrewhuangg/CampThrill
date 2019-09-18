# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

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
    pets_allowed: 2,
    sites: 4,
    tents: true,
    cabins: true,
    parking: true,
    wifi: false,
    picnic: false,
    portable_water: true,
    trash_bins: false,
    activities: ['Biking', 'Hiking', 'Horseback ridng','Wildlife watching', 'Rock climbing']
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
    pets_allowed: 1,
    sites: 6,
    tents: true,
    cabins: true,
    parking: true,
    wifi: false,
    picnic: true,
    portable_water: true,
    trash_bins: false,
    activities: ['Hiking', 'Wildlife watching', 'Base jumping', 'Rock climbing']
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
    pets_allowed: 0,
    sites: 0,
    tents: true,
    cabins: false,
    parking: false,
    wifi: false,
    picnic: false,
    portable_water: false,
    trash_bins: false,
    activities: ['Hiking', 'Wildlife watching', 'Base jumping', 'Rock climbing']
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
    pets_allowed: 0,
    sites: 2,
    tents: true,
    cabins: false,
    parking: false,
    wifi: false,
    picnic: false,
    portable_water: true,
    trash_bins: false,
    activities: ['Hiking', 'Horseback ridng', 'Wildlife watching']
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
    pets_allowed: 1,
    sites: 3,
    tents: true,
    cabins: true,
    parking: true,
    wifi: true,
    picnic: false,
    portable_water: true,
    trash_bins: true,
    activities: ['Hiking', 'Paddling', 'Boating', 'Fishing', 'Swimming', 'Wildlife watching', 'Rock climbing']
  )

  spot_6 = Spot.create!(
    host_id: user_demo.id,
    title: "Zion National Park",
    description: "Red and cream canyons lead to huge towers of rock filled with natural hanging gardens. Big Horn Sheep face off in the valleys below like something out of Nat Geo. The Virgin River flows through it all, changing colors from neon aquamarine to milky silt depending on the rainfall.",
    price: 35,
    lat: 37.204014,
    lng: -112.983523,
    group_size: 4,
    campfires: true,
    toilets: true,
    showers: false,
    grills: false,
    signage: false,
    pets_allowed: 2,
    sites: 6,
    tents: true,
    cabins: true,
    parking: true,
    wifi: false,
    picnic: false,
    portable_water: true,
    trash_bins: false,
    activities: ['Biking', 'Hiking', 'Horseback ridng', 'Paddling', 'Surfing', 'Boating', 'Fishing', 'Wind sports', 'Swimming', 'Wildlife watching', 'Base jumping', 'Rock climbing']
  )

  spot_7 = Spot.create!(
    host_id: user_demo.id,
    title: "Yellowstone National Park",
    description: "Yellowstone National Park has been a destination for outdoor enthusiasts since being founded in 1872. With over 300 hydrothermal geysers, including a litany of hot springs, the park is one of the most geothermally active in the country, particularly in West Yellowstone.",
    price: 40,
    lat: 44.427950,
    lng: -110.588430,
    group_size: 3,
    campfires: true,
    toilets: true,
    showers: false,
    grills: true,
    signage: true,
    pets_allowed: 1,
    sites: 4,
    tents: true,
    cabins: false,
    parking: true,
    wifi: false,
    picnic: true,
    portable_water: true,
    trash_bins: true,
    activities: ['Hiking', 'Horseback ridng', 'Wildlife watching', 'Rock climbing']
  )

  spot_8 = Spot.create!(
    host_id: user_demo.id,
    title: "Redwood National and State Parks",
    description: "You don't need a magic wand to explore a land of giants; just explore a redwood forest. These trees can grow to nearly 400 feet high and 22 feet wide and live too 2,000 years old. The series of redwood parks starts at Crescent City California and run south along the coastal region to Trinidad.",
    price: 25,
    lat: 41.213166,
    lng: -124.004623,
    group_size: 4,
    campfires: true,
    toilets: true,
    showers: false,
    grills: false,
    signage: true,
    pets_allowed: 2,
    sites: 3,
    tents: true,
    cabins: false,
    parking: true,
    wifi: false,
    picnic: true,
    portable_water: true,
    trash_bins: true,
    activities: ['Hiking', 'Wildlife watching', 'Paddling', 'Swimming']
  )

  spot_9 = Spot.create!(
    host_id: user_demo.id,
    title: "Torres del Paine National Park",
    description: "Torres del Paine National Park, in Chile’s Patagonia region, is known for its soaring mountains, bright blue icebergs that cleave from glaciers and golden pampas (grasslands) that shelter rare wildlife such as llama-like guanacos.",
    price: 25,
    lat: -50.942818,
    lng: -73.406743,
    group_size: 2,
    campfires: true,
    toilets: true,
    showers: false,
    grills: false,
    signage: true,
    pets_allowed: 0,
    sites: 0,
    tents: true,
    cabins: false,
    parking: false,
    wifi: false,
    picnic: false,
    portable_water: false,
    trash_bins: false,
    activities: ['Hiking','Wildlife watching', 'Rock climbing']
  )

  Spot.all.each_with_index do |spot, idx|
    index_url = 'https://campthrill-seed.s3-us-west-1.amazonaws.com/'
    spot_idx = idx + 1
    file_title = "#{spot_idx}" + '.jpg'
    new_url = index_url + "#{spot_idx}" + '.jpg'
    file = open(new_url)
    spot.photo.attach(io: file, filename: file_title)
  end

spot_1_file1 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/glen-canyon/gl1.jpg')
spot_1_file2 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/glen-canyon/gl2.jpg')
spot_1_file3 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/glen-canyon/gl3.jpg')
spot_1_file4 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/glen-canyon/gl4.jpg')
spot_1_file5 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/glen-canyon/gl5.jpg')

spot_1.photos.attach(io: spot_1_file1, filename: 'gl1.jpg')
spot_1.photos.attach(io: spot_1_file2, filename: 'gl2.jpg')
spot_1.photos.attach(io: spot_1_file3, filename: 'gl3.jpg')
spot_1.photos.attach(io: spot_1_file4, filename: 'gl4.jpg')
spot_1.photos.attach(io: spot_1_file5, filename: 'gl5.jpg')

spot_2_file1 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/upper+pines/up1.jpg')
spot_2_file2 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/upper+pines/up2.jpg')
spot_2_file3 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/upper+pines/up3.jpg')
spot_2_file4 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/upper+pines/up4.jpg')
spot_2_file5 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/upper+pines/up5.jpg')
spot_2_file6 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/upper+pines/up6.jpg')

spot_2.photos.attach(io: spot_2_file1, filename: 'up1.jpg')
spot_2.photos.attach(io: spot_2_file2, filename: 'up2.jpg')
spot_2.photos.attach(io: spot_2_file3, filename: 'up3.jpg')
spot_2.photos.attach(io: spot_2_file4, filename: 'up4.jpg')
spot_2.photos.attach(io: spot_2_file5, filename: 'up5.jpg')
spot_2.photos.attach(io: spot_2_file6, filename: 'up6.jpg')


spot_3_file1 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/trollvegen/t1.jpg')
spot_3_file2 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/trollvegen/t2.jpg')
spot_3_file3 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/trollvegen/t3.jpg')
spot_3_file4 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/trollvegen/t4.jpg')
spot_3_file5 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/trollvegen/t5.jpg')

spot_3.photos.attach(io: spot_3_file1, filename: 't1.jpg')
spot_3.photos.attach(io: spot_3_file2, filename: 't2.jpg')
spot_3.photos.attach(io: spot_3_file3, filename: 't3.jpg')
spot_3.photos.attach(io: spot_3_file4, filename: 't4.jpg')
spot_3.photos.attach(io: spot_3_file5, filename: 't5.jpg')

spot_4_file1 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/machu+pichu/mp1.jpg')
spot_4_file2 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/machu+pichu/mp2.jpg')
spot_4_file3 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/machu+pichu/mp3.jpg')
spot_4_file4 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/machu+pichu/mp4.jpg')
spot_4_file5 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/machu+pichu/mp5.jpg')
spot_4_file6 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/machu+pichu/mp6.jpg')

spot_4.photos.attach(io: spot_4_file1, filename: 'mp1.jpg')
spot_4.photos.attach(io: spot_4_file2, filename: 'mp2.jpg')
spot_4.photos.attach(io: spot_4_file3, filename: 'mp3.jpg')
spot_4.photos.attach(io: spot_4_file4, filename: 'mp4.jpg')
spot_4.photos.attach(io: spot_4_file5, filename: 'mp5.jpg')
spot_4.photos.attach(io: spot_4_file6, filename: 'mp6.jpg')

spot_5_file1 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/chugach/c1.jpg')
spot_5_file2 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/chugach/c2.jpg')
spot_5_file3 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/chugach/c3.jpg')
spot_5_file4 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/chugach/c4.jpg')
spot_5_file5 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/chugach/c5.jpg')
spot_5_file6 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/chugach/c6.jpg')

spot_5.photos.attach(io: spot_5_file1, filename: 'c1.jpg')
spot_5.photos.attach(io: spot_5_file2, filename: 'c2.jpg')
spot_5.photos.attach(io: spot_5_file3, filename: 'c3.jpg')
spot_5.photos.attach(io: spot_5_file4, filename: 'c4.jpg')
spot_5.photos.attach(io: spot_5_file5, filename: 'c5.jpg')
spot_5.photos.attach(io: spot_5_file6, filename: 'c6.jpg')

spot_6_file1 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/zion/grant-ritchie-E4Ld8lAu8rc-unsplash.jpg')
spot_6_file2 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/zion/greg-duprat-xZrGCE0Lf_k-unsplash.jpg')
spot_6_file3 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/zion/jamie-hagan-RWzPBcWVdpw-unsplash.jpg')
spot_6_file4 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/zion/nouman-raees-Imms2YbLP-k-unsplash.jpg')


spot_6.photos.attach(io: spot_6_file1, filename: 'grant-ritchie-E4Ld8lAu8rc-unsplash.jpg')
spot_6.photos.attach(io: spot_6_file2, filename: 'greg-duprat-xZrGCE0Lf_k-unsplash.jpg')
spot_6.photos.attach(io: spot_6_file3, filename: 'jamie-hagan-RWzPBcWVdpw-unsplash.jpg')
spot_6.photos.attach(io: spot_6_file4, filename: 'nouman-raees-Imms2YbLP-k-unsplash.jpg')

spot_7_file1 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/yellowstone/cara-fuller-lLi9ebBMU8c-unsplash.jpg')
spot_7_file2 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/yellowstone/david-tostado-5i2xrbED8OU-unsplash.jpg')
spot_7_file3 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/yellowstone/joao-silas-CsPTZw6Ili4-unsplash.jpg')
spot_7_file4 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/yellowstone/lucas-gao-2YC3eJ0ysHY-unsplash.jpg')


spot_7.photos.attach(io: spot_7_file1, filename: 'cara-fuller-lLi9ebBMU8c-unsplash.jpg')
spot_7.photos.attach(io: spot_7_file2, filename: 'david-tostado-5i2xrbED8OU-unsplash.jpg')
spot_7.photos.attach(io: spot_7_file3, filename: 'joao-silas-CsPTZw6Ili4-unsplash.jpg')
spot_7.photos.attach(io: spot_7_file4, filename: 'lucas-gao-2YC3eJ0ysHY-unsplash.jpg')

spot_8_file1 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/redwood/ales-krivec-ygn9SCQRATg-unsplash.jpg')
spot_8_file2 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/redwood/chelsea-bock-S-U6ipzt4Lw-unsplash.jpg')
spot_8_file3 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/redwood/jeff-finley-2J9x7tjgObY-unsplash.jpg')
spot_8_file4 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/redwood/stephy-pariande-nDqA4d5NL0k-unsplash.jpg')


spot_8.photos.attach(io: spot_8_file1, filename: 'ales-krivec-ygn9SCQRATg-unsplash.jpg')
spot_8.photos.attach(io: spot_8_file2, filename: 'chelsea-bock-S-U6ipzt4Lw-unsplash.jpg')
spot_8.photos.attach(io: spot_8_file3, filename: 'jeff-finley-2J9x7tjgObY-unsplash.jpg')
spot_8.photos.attach(io: spot_8_file4, filename: 'stephy-pariande-nDqA4d5NL0k-unsplash.jpg')

spot_9_file1 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/torresdelpain/eddie-lawhead-E5p9lxiYHDY-unsplash.jpg')
spot_9_file2 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/torresdelpain/marcelo-vaz-BmjeZXARWmw-unsplash.jpg')
spot_9_file3 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/torresdelpain/oziel-gomez-IbLZjKcelpM-unsplash.jpg')
spot_9_file4 = open('https://campthrill-seed.s3-us-west-1.amazonaws.com/torresdelpain/thomas-fields-JVVCUxQruv8-unsplash.jpg')


spot_9.photos.attach(io: spot_9_file1, filename: 'eddie-lawhead-E5p9lxiYHDY-unsplash.jpg')
spot_9.photos.attach(io: spot_9_file2, filename: 'marcelo-vaz-BmjeZXARWmw-unsplash.jpg')
spot_9.photos.attach(io: spot_9_file3, filename: 'oziel-gomez-IbLZjKcelpM-unsplash.jpg')
spot_9.photos.attach(io: spot_9_file4, filename: 'thomas-fields-JVVCUxQruv8-unsplash.jpg')
