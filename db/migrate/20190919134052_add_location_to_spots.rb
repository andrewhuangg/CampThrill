class AddLocationToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :location, :string
  end
end
