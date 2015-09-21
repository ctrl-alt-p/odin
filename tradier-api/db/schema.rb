# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150920223600) do

  create_table "user_balances", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "cash_available"
    t.decimal  "price",                  precision: 15, scale: 2
    t.string   "close_pl"
    t.string   "current_requirement"
    t.string   "day_trade_buying_power"
    t.string   "dividend_balance"
    t.string   "equity"
    t.string   "fed_call"
    t.string   "long_liquid_value"
    t.string   "long_market_value"
    t.string   "maintenance_call"
    t.string   "market_value"
    t.string   "net_value"
    t.string   "open_pl"
    t.string   "option_buying_power"
    t.string   "option_long_value"
    t.string   "option_requirement"
    t.string   "option_short_value"
    t.string   "pending_cash"
    t.integer  "pending_orders_count"
    t.integer  "sweep"
    t.string   "short_liquid_value"
    t.string   "short_market_value"
    t.string   "stock_buying_power"
    t.string   "stock_long_value"
    t.string   "stock_short_value"
    t.string   "uncleared_funds"
    t.string   "unsettled_funds"
    t.string   "total_cash"
    t.string   "total_equity"
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
    t.index ["user_id"], name: "index_user_balances_on_user_id"
  end

  create_table "user_costbases", force: :cascade do |t|
    t.integer  "user_id"
    t.date     "close_date"
    t.string   "cost"
    t.decimal  "price",             precision: 15, scale: 2
    t.string   "gain_loss"
    t.string   "gain_loss_percent"
    t.date     "open_date"
    t.string   "proceeds"
    t.integer  "quantity"
    t.string   "symbol"
    t.integer  "term"
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
    t.index ["user_id"], name: "index_user_costbases_on_user_id"
  end

  create_table "user_histories", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "amount"
    t.decimal  "price",            precision: 15, scale: 2
    t.date     "date"
    t.string   "transaction_type"
    t.string   "description"
    t.string   "commission"
    t.integer  "quantity"
    t.string   "symbol"
    t.string   "trade_type"
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.index ["user_id"], name: "index_user_histories_on_user_id"
  end

  create_table "user_orders", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "order_type"
    t.string   "classification"
    t.string   "symbol"
    t.string   "side"
    t.integer  "quantity"
    t.string   "status"
    t.string   "duration"
    t.decimal  "price",              precision: 15, scale: 2
    t.string   "option_type"
    t.date     "expiration_date"
    t.string   "exch"
    t.string   "avg_fill_price"
    t.integer  "exec_quantity"
    t.string   "exec_exch"
    t.string   "last_price"
    t.integer  "last_quantity"
    t.integer  "remaining_quantity"
    t.string   "stop_price"
    t.integer  "num_legs"
    t.string   "strategy"
    t.datetime "created_at",                                  null: false
    t.datetime "updated_at",                                  null: false
    t.index ["user_id"], name: "index_user_orders_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.integer  "account_number"
    t.boolean  "day_trader"
    t.integer  "option_level"
    t.string   "account_type"
    t.string   "name"
    t.string   "status"
    t.string   "classification"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

end
