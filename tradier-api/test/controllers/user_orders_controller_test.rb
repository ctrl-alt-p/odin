require 'test_helper'

class UserOrdersControllerTest < ActionController::TestCase
  setup do
    @user_order = user_orders(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
  end

  test "should create user_order" do
    assert_difference('UserOrder.count') do
      post :create, params: { user_order: { avg_fill_price: @user_order.avg_fill_price, classification: @user_order.classification, duration: @user_order.duration, exch: @user_order.exch, exec_exch: @user_order.exec_exch, exec_quantity: @user_order.exec_quantity, expiration_date: @user_order.expiration_date, last_price: @user_order.last_price, last_quantity: @user_order.last_quantity, num_legs: @user_order.num_legs, option_type: @user_order.option_type, order_type: @user_order.order_type, price: @user_order.price, price: @user_order.price, price: @user_order.price, price: @user_order.price, price: @user_order.price, quantity: @user_order.quantity, remaining_quantity: @user_order.remaining_quantity, side: @user_order.side, status: @user_order.status, stop_price: @user_order.stop_price, strategy: @user_order.strategy, symbol: @user_order.symbol, user_id: @user_order.user_id } }
    end

    assert_response 201
  end

  test "should show user_order" do
    get :show, params: { id: @user_order }
    assert_response :success
  end

  test "should update user_order" do
    patch :update, params: { id: @user_order, user_order: { avg_fill_price: @user_order.avg_fill_price, classification: @user_order.classification, duration: @user_order.duration, exch: @user_order.exch, exec_exch: @user_order.exec_exch, exec_quantity: @user_order.exec_quantity, expiration_date: @user_order.expiration_date, last_price: @user_order.last_price, last_quantity: @user_order.last_quantity, num_legs: @user_order.num_legs, option_type: @user_order.option_type, order_type: @user_order.order_type, price: @user_order.price, price: @user_order.price, price: @user_order.price, price: @user_order.price, price: @user_order.price, quantity: @user_order.quantity, remaining_quantity: @user_order.remaining_quantity, side: @user_order.side, status: @user_order.status, stop_price: @user_order.stop_price, strategy: @user_order.strategy, symbol: @user_order.symbol, user_id: @user_order.user_id } }
    assert_response 200
  end

  test "should destroy user_order" do
    assert_difference('UserOrder.count', -1) do
      delete :destroy, params: { id: @user_order }
    end

    assert_response 204
  end
end
