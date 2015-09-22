class UserCostbasisSerializer < ActiveModel::Serializer
  attributes :id, :close_date, :cost, :price, :gain_loss, :price, :gain_loss_percent, :price, :open_date, :proceeds, :price, :quantity, :symbol, :term
  has_one :user
end
