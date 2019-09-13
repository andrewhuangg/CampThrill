class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :price, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :group_size, null: false
      t.boolean :amenities, default: false
      t.boolean :filter, default: false
      t.timestamps
    end

    add_index :spots, :host_id
  end
end
