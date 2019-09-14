# json.extract! spot, :id, :title, :description, :price, :lat, :lng, :group_size, :campires, :toilets, :pets_allowed, :showers, :grills, :signage

json.set! spot.id do 

  json.id spot.id
  json.title spot.title
  json.description spot.description
  json.price spot.price
  json.lat spot.lat
  json.lng spot.lng
  json.group_size spot.group_size
  json.campires spot.campires
  json.toilets spot.toilets
  json.pets_allowed spot.pets_allowed
  json.showers spot.showers
  json.grills spot.grills
  json.signage spot.signage
  json.indexPhoto url_for(spot.photo)


end