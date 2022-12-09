class AirlineandReviewsSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url

  has_many :reviews
end
