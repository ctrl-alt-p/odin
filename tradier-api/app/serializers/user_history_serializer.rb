class UserHistorySerializer < ActiveModel::Serializer
  attributes :id, :amount, :price, :date, :transaction_type, :description, :commission, :price, :price, :price, :quantity, :symbol, :trade_type
  has_one :user
end
