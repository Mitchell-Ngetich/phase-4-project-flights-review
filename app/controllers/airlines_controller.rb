class AirlinesController < ApplicationController
    def index 
        airline = Airline.all
        render json: airline
    end

    def show
        airline = Airline.find_by(id: params[:id])
        render json: airline
    end

    def create
        airline = Airline.create(airline_params)
        if airline
        render json: airline, status: :created
        else 
            render json: {error: airline.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    def airline_params
        params.permit(:name, :image_url)
    end
end
