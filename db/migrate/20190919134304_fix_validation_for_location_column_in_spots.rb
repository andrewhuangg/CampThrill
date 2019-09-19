class FixValidationForLocationColumnInSpots < ActiveRecord::Migration[5.2]
  def change
    change_column_null :spots, :location, null: false
  end
end
