# @spots.each do |spot|
#   json.set! spot.id do
#     json.partial! "api/spots/spot", spot: spot
#   end
# end

@spots.each do |spot|
  
  json.set! spot.id do 

    json.id spot.id
    json.title spot.title
    json.description spot.description
    json.price spot.price
    json.lat spot.lat
    json.lng spot.lng
    json.group_size spot.group_size
    json.campfires spot.campfires
    json.toilets spot.toilets
    json.pets_allowed spot.pets_allowed
    json.showers spot.showers
    json.grills spot.grills
    json.signage spot.signage
    json.indexPhoto url_for(spot.photo)


  end


end

#looped through all spots

=begin
  what above code does
  json.<variableName> - sets a key name
  url_for(attach photo for heroku and db)
=end