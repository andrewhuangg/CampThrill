# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create!(
  id: 1,
  email: "mamba@lakers.com",
  password: "lakers24",
  first_name: "kobe",
  last_name: "bryant"
)

User.create!(
  id: 2,
  email: Faker::Internet.email,
  password: "123456",
  first_name: Faker::Sports::Basketball.player,
  last_name: Faker::Sports::Basketball.position
)

User.create!(
  id: 3,
  email: Faker::Internet.email,
  password: "123456",
  first_name: Faker::Sports::Basketball.player,
  last_name: Faker::Sports::Basketball.position
)

User.create!(
  id: 4,
  email: Faker::Internet.email,
  password: "123456",
  first_name: Faker::Sports::Basketball.player,
  last_name: Faker::Sports::Basketball.position
)

User.create!(
  id: 5,
  email: Faker::Internet.email,
  password: "123456",
  first_name: Faker::Sports::Basketball.player,
  last_name: Faker::Sports::Basketball.position
)

User.create!(
  id: 6,
  email: Faker::Internet.email,
  password: "123456",
  first_name: Faker::Sports::Basketball.player,
  last_name: Faker::Sports::Basketball.position
)

User.create!(
  id: 7,
  email: Faker::Internet.email,
  password: "123456",
  first_name: Faker::Sports::Basketball.player,
  last_name: Faker::Sports::Basketball.position
)

User.create!(
  id: 8,
  email: Faker::Internet.email,
  password: "123456",
  first_name: Faker::Sports::Basketball.player,
  last_name: Faker::Sports::Basketball.position
)

User.create!(
  id: 9,
  email: Faker::Internet.email,
  password: "123456",
  first_name: Faker::Sports::Basketball.player,
  last_name: Faker::Sports::Basketball.position
)

User.create!(
  id: 10,
  email: Faker::Internet.email,
  password: "123456",
  first_name: Faker::Sports::Basketball.player,
  last_name: Faker::Sports::Basketball.position
)

User.create!(
  id: 11,
  email: Faker::Internet.email,
  password: "123456",
  first_name: Faker::Sports::Basketball.player,
  last_name: Faker::Sports::Basketball.position
)
