class CreateUserOrders < ActiveRecord::Migration
  def change
    create_table :user_orders do |t|
      t.references :user, index: true, foreign_key: true
      t.string :order_type
      t.string :classification
      t.string :symbol
      t.string :side
      t.integer :quantity
      t.string :status
      t.string :duration
      t.string :price
      t.decimal :price, precision: 15, scale: 2
      t.string :option_type
      t.date :expiration_date
      t.string :exch
      t.string :avg_fill_price
      t.decimal :price, precision: 15, scale: 2
      t.integer :exec_quantity
      t.string :exec_exch
      t.string :last_price
      t.decimal :price, precision: 15, scale: 2
      t.integer :last_quantity
      t.integer :remaining_quantity
      t.string :stop_price
      t.decimal :price, precision: 15, scale: 2
      t.integer :num_legs
      t.string :strategy

      t.timestamps
    end
  end
end
