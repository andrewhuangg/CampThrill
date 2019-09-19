class AddAdditionalFilterDetailsToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :check_in, :integer, null: false
    add_column :spots, :check_out, :integer, null: false
    add_column :spots, :minimum_nights, :integer, null: false
    add_column :spots, :cancellation_policy, :string, null: false
    add_column :spots, :locations, :string, null: false
  end
end
