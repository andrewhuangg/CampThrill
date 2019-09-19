class DropLocationColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :spots, :locations
    remove_column :spots, :location
    add_column :spots, :location, :boolean, null: false
  end
end
