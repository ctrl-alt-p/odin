# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.all.map(&:destroy)

user1 = User.create!(
  account_number: 12345678,
  classification: 'individual',
  day_trader: true,
  option_level: 5,
  status: 'Approved',
  account_type: 'margin',
  name: 'George Costanza',
)
user1.create_balance!(
  close_pl: 0.000000,
  current_requirement: 0.000000,
  equity: 2014.590000,
  long_market_value: 0.000000,
  market_value: 0.000000,
  open_pl: 0.000000,
  option_long_value: 0.000000,
  option_requirement: 0.000000,
  option_short_value: 0,
  pending_orders_count: 1,
  short_market_value: 0.000000,
  stock_long_value: 0.000000,
  total_cash: 2014.590000,
  total_equity: 2014.59000,
  uncleared_funds: 0,
  fed_call:0 ,
  maintenance_call:0 ,
  option_buying_power:1976.1000000000 ,
  stock_buying_power:3952.20000 ,
  stock_short_value:0 ,
  sweep:0 ,
)
user1.costbases.create!(
  close_date: '2013-08-21T22:58:46.427Z',
  cost: 79.01,
  gain_loss: -7.07,
  gain_loss_percent: -8.95,
  open_date: '2013-08-16T22:58:51.267Z',
  proceeds: -71.94,
  quantity: 1.00000,
  symbol: 'QQQ',
  term: 5,
)
user1.histories.create!(
  amount: '71.94',
  date: '2013-08-21T00:00:00Z',
  transaction_type: 'trade',
  commission: '3.49',
  description: 'POWERSHARES QQQ ETF',
  price: '75.44',
  quantity: '-1.00000',
  symbol: 'QQQ',
  trade_type: 'Equity',
)
user1.histories.create!(
  amount: '833.97',
  date: '2013-08-22T00:00:00Z',
  transaction_type: 'trade',
  commission: '5.00',
  description: 'CALL FORD MTR CO NEW',
  price: '839.00',
  quantity: '-1.00000',
  symbol: 'F130921C00008000',
  trade_type: 'Option',
)


user2 = User.create!(
  account_number: 87654321,
  classification: 'individual',
  day_trader: 'false',
  option_level: '3',
  status: 'Approved',
  account_type: 'margin',
  name: 'George Costanza',
)
user2.create_balance!(
  close_pl: 450.000000,
  current_requirement: 133126.070000,
  equity: 228291.410000,
  long_market_value: 214980.000000,
  market_value: 190460.000000,
  open_pl: 5651.920000,
  option_long_value: 14400.000000,
  option_requirement: 32836.070000,
  option_short_value: 24520.0000000,
  pending_orders_count: 1,
  short_market_value: 24520.000000,
  stock_long_value: 200580.000000,
  total_cash: 27711.410000,
  total_equity: 218171.4100000000,
  uncleared_funds: 0,
  day_trade_buying_power: 569840.5100000000,
  fed_call: 0,
  maintenance_call: 0,
  option_buying_power: 95158.350000000001400000000,
  stock_buying_power: 190316.7000000000028000,
  stock_short_value: 0,
)
user2.costbases.create!(
  close_date: '2013-09-26T22:59:43.380Z',
  cost: 433.74,
  gain_loss: -6.74,
  gain_loss_percent: -1.55,
  open_date: '2013-09-26T22:59:43.373Z',
  proceeds: -427.00,
  quantity: 25.00000,
  symbol: 'QQQ',
  term: 1,
)
user2.histories.create!(
  amount: '71.94',
  date: '2013-08-21T00:00:00Z',
  transaction_type: 'trade',
  commission: '3.49',
  description: 'POWERSHARES QQQ ETF',
  price: '75.44',
  quantity: '-1.00000',
  symbol: 'QQQ',
  trade_type: 'Equity',
)
user2.histories.create!(
  amount: '833.97',
  date: '2013-08-22T00:00:00Z',
  transaction_type: 'trade',
  commission: '5.00',
  description: 'CALL FORD MTR CO NEW',
  price: '839.00',
  quantity: '-1.00000',
  symbol: 'F130921C00008000',
  trade_type: 'Option',
)
