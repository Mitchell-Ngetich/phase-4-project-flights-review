class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, uniqueness: true
    has_many :airlines, through: :reviews
    has_many :reviews

   has_secure_password
   
end

