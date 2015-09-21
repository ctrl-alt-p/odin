class UserOrdersController < ApplicationController
  before_action :set_user_order, only: [:show, :update, :destroy]

  # GET /user_orders
  def index
    @user_orders = UserOrder.all

    render json: @user_orders
  end

  # GET /user_orders/1
  def show
    render json: @user_order
  end

  # POST /user_orders
  def create
    @user_order = UserOrder.new(user_order_params)

    if @user_order.save
      render json: @user_order, status: :created, location: @user_order
    else
      render json: @user_order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_orders/1
  def update
    if @user_order.update(user_order_params)
      render json: @user_order
    else
      render json: @user_order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_orders/1
  def destroy
    @user_order.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_order
      @user_order = UserOrder.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_order_params
      params.require(:user_order).permit(:user_id, :order_type, :classification, :symbol, :side, :quantity, :status, :duration, :price, :price, :option_type, :expiration_date, :exch, :avg_fill_price, :price, :exec_quantity, :exec_exch, :last_price, :price, :last_quantity, :remaining_quantity, :stop_price, :price, :num_legs, :strategy)
    end
end
