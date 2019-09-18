class AddSpecificFiltersToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :sites, :integer
    add_column :spots, :tents, :boolean, null: false, default: false
    add_column :spots, :cabins, :boolean, null: false, default: false
    add_column :spots, :parking, :boolean, null: false, default: false
    add_column :spots, :wifi, :boolean, null: false, default: false
    add_column :spots, :picnic, :boolean, null: false, default: false
    add_column :spots, :portable_water, :boolean, null: false, default: false
    add_column :spots, :trash_bins, :boolean, null: false, default: false
    add_column :spots, :activities, :string, array: true, default: []
  end
end
