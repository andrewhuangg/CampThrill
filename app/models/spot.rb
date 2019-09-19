# == Schema Information
#
# Table name: spots
#
#  id                  :bigint           not null, primary key
#  host_id             :integer          not null
#  title               :string           not null
#  description         :text             not null
#  price               :integer          not null
#  lat                 :float            not null
#  lng                 :float            not null
#  group_size          :integer          not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  toilets             :boolean          not null
#  pets_allowed        :integer          not null
#  showers             :boolean          not null
#  grills              :boolean          not null
#  signage             :boolean          not null
#  campfires           :boolean          not null
#  sites               :integer
#  tents               :boolean          default(FALSE), not null
#  cabins              :boolean          default(FALSE), not null
#  parking             :boolean          default(FALSE), not null
#  wifi                :boolean          default(FALSE), not null
#  picnic              :boolean          default(FALSE), not null
#  portable_water      :boolean          default(FALSE), not null
#  trash_bins          :boolean          default(FALSE), not null
#  activities          :string           default([]), is an Array
#  check_in            :integer          not null
#  check_out           :integer          not null
#  minimum_nights      :integer          not null
#  cancellation_policy :string           not null
#  location            :boolean          not null
#



class Spot < ApplicationRecord
  validates :title, :description, :price, :lat, :lng, :group_size, :sites, :check_in, :check_out, :location, :activities, :cancellation_policy, presence: true

  validates :pets_allowed, inclusion: { in: [0, 1, 2, 3] }
  validates :minimum_nights, inclusion: { in: [0, 1, 2, 3] }
  validates :cancellation_policy, inclusion: { in: ["flexible", "moderate", "strict"] }

  validates :campfires, :toilets, :showers, :grills, :signage, :tents, :cabins, :parking, :wifi, :picnic, :portable_water, :trash_bins, inclusion: { in: [ true, false ] }

  belongs_to :user,
  foreign_key: :host_id,
  class_name: :User

  has_one_attached :photo
  has_many_attached :photos
  
  
end
