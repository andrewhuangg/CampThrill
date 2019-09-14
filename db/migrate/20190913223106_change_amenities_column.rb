class ChangeAmenitiesColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :spots, :amenities
    add_column :spots, :campires, :boolean, null: false
    add_column :spots, :toilets, :boolean, null: false
    add_column :spots, :pets_allowed, :integer, null: false
    add_column :spots, :showers, :boolean, null: false
    add_column :spots, :grills, :boolean, null: false
    add_column :spots, :signage, :boolean, null: false

  end
end
