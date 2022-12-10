class Airline < ApplicationRecord
    validates :name, presence: true
    validates :image_url, presence: true

    has_many :reviews
    has_many :users

    def avg_score
        reviews.average(:score).round(2).to_f
    end
end
