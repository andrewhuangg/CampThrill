class ChangeDataTypeToLocations < ActiveRecord::Migration[5.2]
  def change
    change_column :spots, :location, :string
  end
end
