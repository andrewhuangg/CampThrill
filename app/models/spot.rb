# == Schema Information
#
# Table name: spots
#
#  id           :bigint           not null, primary key
#  host_id      :integer          not null
#  title        :string           not null
#  description  :text             not null
#  price        :integer          not null
#  lat          :float            not null
#  lng          :float            not null
#  group_size   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  toilets      :boolean          not null
#  pets_allowed :integer          not null
#  showers      :boolean          not null
#  grills       :boolean          not null
#  signage      :boolean          not null
#  campfires    :boolean          not null
#

class Spot < ApplicationRecord
  validates :title, :description, :price, :lat, :lng, :group_size, presence: true
  validates :pets_allowed, inclusion: { in: [ 0, 1, 2, 3] }

  validates :campfires, :toilets, :showers, :grills, :signage, inclusion: { in: [ true, false ]}

  belongs_to :user,
  foreign_key: :host_id,
  class_name: :User

  has_one_attached :photo
  has_many_attached :photos
  
  
end
