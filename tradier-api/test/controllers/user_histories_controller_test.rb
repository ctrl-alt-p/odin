require 'test_helper'

class UserHistoriesControllerTest < ActionController::TestCase
  setup do
    @user_history = user_histories(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
  end

  test "should create user_history" do
    assert_difference('UserHistory.count') do
      post :create, params: { user_history: { amount: @user_history.amount, commission: @user_history.commission, date: @user_history.date, description: @user_history.description, price: @user_history.price, price: @user_history.price, price: @user_history.price, price: @user_history.price, quantity: @user_history.quantity, symbol: @user_history.symbol, trade_type: @user_history.trade_type, transaction_type: @user_history.transaction_type, user_id: @user_history.user_id } }
    end

    assert_response 201
  end

  test "should show user_history" do
    get :show, params: { id: @user_history }
    assert_response :success
  end

  test "should update user_history" do
    patch :update, params: { id: @user_history, user_history: { amount: @user_history.amount, commission: @user_history.commission, date: @user_history.date, description: @user_history.description, price: @user_history.price, price: @user_history.price, price: @user_history.price, price: @user_history.price, quantity: @user_history.quantity, symbol: @user_history.symbol, trade_type: @user_history.trade_type, transaction_type: @user_history.transaction_type, user_id: @user_history.user_id } }
    assert_response 200
  end

  test "should destroy user_history" do
    assert_difference('UserHistory.count', -1) do
      delete :destroy, params: { id: @user_history }
    end

    assert_response 204
  end
end
