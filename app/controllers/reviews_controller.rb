class ReviewsController < ApplicationController

   # before_action :authenticate

      # POST 
      def create
        review = Review.create(review_params)
        if review
          render json: review, status: :created
        else
          render json: {error: review.errors.full_messages}, status: :unprocessable_entity
        end
      end

      # DELETE 
      def destroy
        review = Review.find_by(id: params[:id])

        if review
            review.delete
            head :no_content
        else
          render json: {error:"Review not found"}, status: :unprocessable_entity
        end
      end

      private

      # Strong params
      def review_params
        params.permit(:title, :description, :score, :airline_id)
      end
end
    
