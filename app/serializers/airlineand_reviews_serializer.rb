class AirlineandReviewsSerializer < ActiveModel::Serializer
ngetich
  attributes :id, :name, :image_url, :reviews

  attributes :id, :name, :image_url
 main

  has_many :reviews
end
