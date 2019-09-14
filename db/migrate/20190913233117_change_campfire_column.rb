class ChangeCampfireColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :spots, :campires
    add_column :spots, :campfires, :boolean, null: false
  end
end
