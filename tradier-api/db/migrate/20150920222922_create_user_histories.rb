class CreateUserHistories < ActiveRecord::Migration
  def change
    create_table :user_histories do |t|
      t.references :user, index: true, foreign_key: true
      t.string :amount
      t.decimal :price, precision: 15, scale: 2
      t.date :date
      t.string :transaction_type
      t.string :description
      t.string :commission
      t.decimal :price, precision: 15, scale: 2
      t.string :price
      t.decimal :price, precision: 15, scale: 2
      t.integer :quantity
      t.string :symbol
      t.string :trade_type

      t.timestamps
    end
  end
end
