class CreateUserCostbases < ActiveRecord::Migration
  def change
    create_table :user_costbases do |t|
      t.references :user, index: true, foreign_key: true
      t.date :close_date
      t.string :cost
      t.decimal :price, precision: 15, scale: 2
      t.string :gain_loss
      t.decimal :price, precision: 15, scale: 2
      t.string :gain_loss_percent
      t.decimal :price, precision: 15, scale: 2
      t.date :open_date
      t.string :proceeds
      t.decimal :price, precision: 15, scale: 2
      t.integer :quantity
      t.string :symbol
      t.integer :term

      t.timestamps
    end
  end
end
