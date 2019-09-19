class AddNullConstraintToSitesInSpots < ActiveRecord::Migration[5.2]
  def change
    change_column_null :spots, :sites, null: false
  end
end
