class CreateUserBalances < ActiveRecord::Migration
  def change
    create_table :user_balances do |t|
      t.references :user, index: true, foreign_key: true
      t.string :cash_available
      t.decimal :price, precision: 15, scale: 2
      t.decimal :price, precision: 15, scale: 2
      t.string :close_pl
      t.decimal :price, precision: 15, scale: 2
      t.string :current_requirement
      t.decimal :price, precision: 15, scale: 2
      t.string :day_trade_buying_power
      t.decimal :price, precision: 15, scale: 2
      t.decimal :price, precision: 15, scale: 2
      t.string :dividend_balance
      t.decimal :price, precision: 15, scale: 2
      t.string :equity
      t.decimal :price, precision: 15, scale: 2
      t.string :fed_call
      t.decimal :price, precision: 15, scale: 2
      t.string :long_liquid_value
      t.decimal :price, precision: 15, scale: 2
      t.string :long_market_value
      t.decimal :price, precision: 15, scale: 2
      t.string :maintenance_call
      t.decimal :price, precision: 15, scale: 2
      t.decimal :price, precision: 15, scale: 2
      t.string :market_value
      t.decimal :price, precision: 15, scale: 2
      t.string :net_value
      t.decimal :price, precision: 15, scale: 2
      t.string :open_pl
      t.decimal :price, precision: 15, scale: 2
      t.string :option_buying_power
      t.decimal :price, precision: 15, scale: 2
      t.string :option_long_value
      t.decimal :price, precision: 15, scale: 2
      t.string :option_requirement
      t.decimal :price, precision: 15, scale: 2
      t.string :option_short_value
      t.decimal :price, precision: 15, scale: 2
      t.string :pending_cash
      t.decimal :price, precision: 15, scale: 2
      t.integer :pending_orders_count
      t.integer :sweep
      t.string :short_liquid_value
      t.decimal :price, precision: 15, scale: 2
      t.string :short_market_value
      t.decimal :price, precision: 15, scale: 2
      t.string :stock_buying_power
      t.decimal :price, precision: 15, scale: 2
      t.string :stock_long_value
      t.decimal :price, precision: 15, scale: 2
      t.string :stock_short_value
      t.decimal :price, precision: 15, scale: 2
      t.string :uncleared_funds
      t.decimal :price, precision: 15, scale: 2
      t.string :unsettled_funds
      t.decimal :price, precision: 15, scale: 2
      t.string :total_cash
      t.decimal :price, precision: 15, scale: 2
      t.string :total_equity
      t.decimal :price, precision: 15, scale: 2

      t.timestamps
    end
  end
end
