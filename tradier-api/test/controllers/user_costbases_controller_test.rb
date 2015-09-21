require 'test_helper'

class UserCostbasesControllerTest < ActionController::TestCase
  setup do
    @user_costbasis = user_costbases(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
  end

  test "should create user_costbasis" do
    assert_difference('UserCostbasis.count') do
      post :create, params: { user_costbasis: { close_date: @user_costbasis.close_date, cost: @user_costbasis.cost, gain_loss: @user_costbasis.gain_loss, gain_loss_percent: @user_costbasis.gain_loss_percent, open_date: @user_costbasis.open_date, price: @user_costbasis.price, price: @user_costbasis.price, price: @user_costbasis.price, price: @user_costbasis.price, proceeds: @user_costbasis.proceeds, quantity: @user_costbasis.quantity, symbol: @user_costbasis.symbol, term: @user_costbasis.term, user_id: @user_costbasis.user_id } }
    end

    assert_response 201
  end

  test "should show user_costbasis" do
    get :show, params: { id: @user_costbasis }
    assert_response :success
  end

  test "should update user_costbasis" do
    patch :update, params: { id: @user_costbasis, user_costbasis: { close_date: @user_costbasis.close_date, cost: @user_costbasis.cost, gain_loss: @user_costbasis.gain_loss, gain_loss_percent: @user_costbasis.gain_loss_percent, open_date: @user_costbasis.open_date, price: @user_costbasis.price, price: @user_costbasis.price, price: @user_costbasis.price, price: @user_costbasis.price, proceeds: @user_costbasis.proceeds, quantity: @user_costbasis.quantity, symbol: @user_costbasis.symbol, term: @user_costbasis.term, user_id: @user_costbasis.user_id } }
    assert_response 200
  end

  test "should destroy user_costbasis" do
    assert_difference('UserCostbasis.count', -1) do
      delete :destroy, params: { id: @user_costbasis }
    end

    assert_response 204
  end
end
