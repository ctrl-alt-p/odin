class UserBalancesController < ApplicationController
  before_action :set_user_balance, only: [:show, :update, :destroy]

  # GET /user_balances
  def index
    @user_balances = UserBalance.all

    render json: @user_balances
  end

  # GET /user_balances/1
  def show
    render json: @user_balance
  end

  # POST /user_balances
  def create
    @user_balance = UserBalance.new(user_balance_params)

    if @user_balance.save
      render json: @user_balance, status: :created, location: @user_balance
    else
      render json: @user_balance.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_balances/1
  def update
    if @user_balance.update(user_balance_params)
      render json: @user_balance
    else
      render json: @user_balance.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_balances/1
  def destroy
    @user_balance.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_balance
      @user_balance = UserBalance.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_balance_params
      params.require(:user_balance).permit(:user_id, :cash_available, :price, :price, :close_pl, :price, :current_requirement, :price, :day_trade_buying_power, :price, :price, :dividend_balance, :price, :equity, :price, :fed_call, :price, :long_liquid_value, :price, :long_market_value, :price, :maintenance_call, :price, :price, :market_value, :price, :net_value, :price, :open_pl, :price, :option_buying_power, :price, :option_long_value, :price, :option_requirement, :price, :option_short_value, :price, :pending_cash, :price, :pending_orders_count, :sweep, :short_liquid_value, :price, :short_market_value, :price, :stock_buying_power, :price, :stock_long_value, :price, :stock_short_value, :price, :uncleared_funds, :price, :unsettled_funds, :price, :total_cash, :price, :total_equity, :price)
    end
end
