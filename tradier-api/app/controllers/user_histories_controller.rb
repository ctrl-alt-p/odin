class UserHistoriesController < ApplicationController
  before_action :set_user_history, only: [:show, :update, :destroy]

  # GET /user_histories
  def index
    @user_histories = UserHistory.all

    render json: @user_histories
  end

  # GET /user_histories/1
  def show
    render json: @user_history
  end

  # POST /user_histories
  def create
    @user_history = UserHistory.new(user_history_params)

    if @user_history.save
      render json: @user_history, status: :created, location: @user_history
    else
      render json: @user_history.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_histories/1
  def update
    if @user_history.update(user_history_params)
      render json: @user_history
    else
      render json: @user_history.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_histories/1
  def destroy
    @user_history.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_history
      @user_history = UserHistory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_history_params
      params.require(:user_history).permit(:user_id, :amount, :price, :date, :transaction_type, :description, :commission, :price, :price, :price, :quantity, :symbol, :trade_type)
    end
end
