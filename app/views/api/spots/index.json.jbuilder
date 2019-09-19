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
    json.tents spot.tents
    json.cabins spot.cabins
    json.parking spot.parking
    json.wifi spot.wifi
    json.sites spot.sites
    json.picnic spot.picnic
    json.portable_water spot.portable_water
    json.trash_bins spot.trash_bins
    json.activities spot.activities
    json.indexPhoto url_for(spot.photo)

  end


end
