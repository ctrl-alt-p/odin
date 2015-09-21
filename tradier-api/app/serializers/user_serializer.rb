class UserSerializer < ActiveModel::Serializer
  attributes :id, :account_number, :day_trader, :option_level, :account_type, :name, :status, :classification

  has_one  :balance
  has_many :costbases
  has_many :histories
end
