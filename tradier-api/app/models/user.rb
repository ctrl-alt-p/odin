class User < ActiveRecord::Base
  has_one  :balance,   class_name: 'UserBalance',   dependent: :destroy
  has_many :costbases, class_name: 'UserCostbasis', dependent: :destroy
  has_many :histories, class_name: 'UserHistory',   dependent: :destroy
end
