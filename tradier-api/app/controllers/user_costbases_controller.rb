class UserCostbasesController < ApplicationController
  before_action :set_user_costbasis, only: [:show, :update, :destroy]

  # GET /user_costbases
  def index
    @user_costbases = UserCostbasis.all

    render json: @user_costbases
  end

  # GET /user_costbases/1
  def show
    render json: @user_costbasis
  end

  # POST /user_costbases
  def create
    @user_costbasis = UserCostbasis.new(user_costbasis_params)

    if @user_costbasis.save
      render json: @user_costbasis, status: :created, location: @user_costbasis
    else
      render json: @user_costbasis.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_costbases/1
  def update
    if @user_costbasis.update(user_costbasis_params)
      render json: @user_costbasis
    else
      render json: @user_costbasis.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_costbases/1
  def destroy
    @user_costbasis.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_costbasis
      @user_costbasis = UserCostbasis.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_costbasis_params
      params.require(:user_costbasis).permit(:user_id, :close_date, :cost, :price, :gain_loss, :price, :gain_loss_percent, :price, :open_date, :proceeds, :price, :quantity, :symbol, :term)
    end
end
