class UserOrderSerializer < ActiveModel::Serializer
  attributes :id, :order_type, :classification, :symbol, :side, :quantity, :status, :duration, :price, :price, :option_type, :expiration_date, :exch, :avg_fill_price, :price, :exec_quantity, :exec_exch, :last_price, :price, :last_quantity, :remaining_quantity, :stop_price, :price, :num_legs, :strategy
  has_one :user
end
