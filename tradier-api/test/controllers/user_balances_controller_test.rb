require 'test_helper'

class UserBalancesControllerTest < ActionController::TestCase
  setup do
    @user_balance = user_balances(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
  end

  test "should create user_balance" do
    assert_difference('UserBalance.count') do
      post :create, params: { user_balance: { cash_available: @user_balance.cash_available, close_pl: @user_balance.close_pl, current_requirement: @user_balance.current_requirement, day_trade_buying_power: @user_balance.day_trade_buying_power, dividend_balance: @user_balance.dividend_balance, equity: @user_balance.equity, fed_call: @user_balance.fed_call, long_liquid_value: @user_balance.long_liquid_value, long_market_value: @user_balance.long_market_value, maintenance_call: @user_balance.maintenance_call, market_value: @user_balance.market_value, net_value: @user_balance.net_value, open_pl: @user_balance.open_pl, option_buying_power: @user_balance.option_buying_power, option_long_value: @user_balance.option_long_value, option_requirement: @user_balance.option_requirement, option_short_value: @user_balance.option_short_value, pending_cash: @user_balance.pending_cash, pending_orders_count: @user_balance.pending_orders_count, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, short_liquid_value: @user_balance.short_liquid_value, short_market_value: @user_balance.short_market_value, stock_buying_power: @user_balance.stock_buying_power, stock_long_value: @user_balance.stock_long_value, stock_short_value: @user_balance.stock_short_value, sweep: @user_balance.sweep, total_cash: @user_balance.total_cash, total_equity: @user_balance.total_equity, uncleared_funds: @user_balance.uncleared_funds, unsettled_funds: @user_balance.unsettled_funds, user_id: @user_balance.user_id } }
    end

    assert_response 201
  end

  test "should show user_balance" do
    get :show, params: { id: @user_balance }
    assert_response :success
  end

  test "should update user_balance" do
    patch :update, params: { id: @user_balance, user_balance: { cash_available: @user_balance.cash_available, close_pl: @user_balance.close_pl, current_requirement: @user_balance.current_requirement, day_trade_buying_power: @user_balance.day_trade_buying_power, dividend_balance: @user_balance.dividend_balance, equity: @user_balance.equity, fed_call: @user_balance.fed_call, long_liquid_value: @user_balance.long_liquid_value, long_market_value: @user_balance.long_market_value, maintenance_call: @user_balance.maintenance_call, market_value: @user_balance.market_value, net_value: @user_balance.net_value, open_pl: @user_balance.open_pl, option_buying_power: @user_balance.option_buying_power, option_long_value: @user_balance.option_long_value, option_requirement: @user_balance.option_requirement, option_short_value: @user_balance.option_short_value, pending_cash: @user_balance.pending_cash, pending_orders_count: @user_balance.pending_orders_count, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, price: @user_balance.price, short_liquid_value: @user_balance.short_liquid_value, short_market_value: @user_balance.short_market_value, stock_buying_power: @user_balance.stock_buying_power, stock_long_value: @user_balance.stock_long_value, stock_short_value: @user_balance.stock_short_value, sweep: @user_balance.sweep, total_cash: @user_balance.total_cash, total_equity: @user_balance.total_equity, uncleared_funds: @user_balance.uncleared_funds, unsettled_funds: @user_balance.unsettled_funds, user_id: @user_balance.user_id } }
    assert_response 200
  end

  test "should destroy user_balance" do
    assert_difference('UserBalance.count', -1) do
      delete :destroy, params: { id: @user_balance }
    end

    assert_response 204
  end
end
