class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :account_number
      t.boolean :day_trader
      t.integer :option_level
      t.string :account_type
      t.string :name
      t.string :status
      t.string :classification

      t.timestamps
    end
  end
end
