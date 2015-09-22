require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post :create, params: { user: { account_number: @user.account_number, account_type: @user.account_type, classification: @user.classification, day_trader: @user.day_trader, name: @user.name, option_level: @user.option_level, status: @user.status } }
    end

    assert_response 201
  end

  test "should show user" do
    get :show, params: { id: @user }
    assert_response :success
  end

  test "should update user" do
    patch :update, params: { id: @user, user: { account_number: @user.account_number, account_type: @user.account_type, classification: @user.classification, day_trader: @user.day_trader, name: @user.name, option_level: @user.option_level, status: @user.status } }
    assert_response 200
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete :destroy, params: { id: @user }
    end

    assert_response 204
  end
end
