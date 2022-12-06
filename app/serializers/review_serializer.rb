class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :score, :airline_id
end
