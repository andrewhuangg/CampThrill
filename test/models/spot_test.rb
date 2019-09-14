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

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
