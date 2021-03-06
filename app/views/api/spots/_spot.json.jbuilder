# json.extract! spot, :id, :title, :description, :price, :lat, :lng, :group_size, :campires, :toilets, :pets_allowed, :showers, :grills, :signage

json.set! spot.id do 

  json.id spot.id
  json.title spot.title
  json.description spot.description
  json.price spot.price
  json.lat spot.lat
  json.lng spot.lng
  json.group_size spot.group_size
  json.campfires spot.campires
  json.toilets spot.toilets
  json.pets_allowed spot.pets_allowed
  json.showers spot.showers
  json.grills spot.grills
  json.signage spot.signage
  json.tents spot.tents
  json.sites spot.sites
  json.cabins spot.cabins
  json.parking spot.parking
  json.wifi spot.wifi
  json.picnic spot.picnic
  json.location spot.location
  json.minimum_nights spot.minimum_nights
  json.cancellation_policy spot.cancellation_policy
  json.check_in spot.check_in
  json.check_out spot.check_out
  json.portable_water spot.portable_water
  json.trash_bins spot.trash_bins
  json.user spot.user
  json.host_id spot.host_id
  json.activities spot.activities
  json.indexPhoto url_for(spot.photo)
  json.showPhotos url_for(spot.photos)
  
end