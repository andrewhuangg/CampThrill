# == Schema Information
#
# Table name: spots
#
#  id          :bigint           not null, primary key
#  host_id     :integer          not null
#  title       :string           not null
#  description :text             not null
#  price       :integer          not null
#  lat         :float            not null
#  lng         :float            not null
#  group_size  :integer          not null
#  amenities   :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Spot < ApplicationRecord
  validates :title, :description, :price, :lat, :lng, :group_size, presence: true

  AMENITIES = [
    'campires', 'toilets', 'pets allowed', 'showers', 'wifi', 'grills', 'signage', 'zip line', 'swimming', 'pool', 'lake', 'water slide', 'fishing', 'kayaks', 'paddleboats', 'canoes', 'golf range', 'soccer field', 'basketball', 'volleyball sandpit', 'whitewater paddling', 'climbing', 'horseback riding', 'biking'
  ].sort.freeze

  validates :amenities, inclusion: { in: AMENITIES,
    message: "%{value} is not a valid amenity" }

  belongs_to :user,
  foreign_key: :host_id,
  class_name: :User
  
end
