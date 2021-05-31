class CreateSuperheros < ActiveRecord::Migration[5.2]
  def change
    create_table :superheros do |t|
      t.string :name
      t.integer :intelligence
      t.integer :strength
      t.integer :speed
      t.integer :durability
      t.integer :power
      t.integer :combat
      t.string :gender
      t.string :height
      t.string :weight
      t.string :image
    end
  end
end
