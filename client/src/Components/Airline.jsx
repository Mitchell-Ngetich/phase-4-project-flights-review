import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReviewForm from "./ReviewForm";
import Review from './Review'
import './Airline.css'

const Card = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
const AirlineLogo = styled.div`
  background: #fff;
  max-width: 50%;
  width: 50%;
  float: left;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    background: black;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
  }
  width: 100px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`;
const AirlineName = styled.div`
  padding: 20px 0 10px 0;
  padding-left: 60px;
`;

function Airline() {
  let { id } = useParams();
  const [airline, setAirline] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // console.log(airline)
    fetch(`http://localhost:3000/airlines/${id}`)
      .then((resp) => resp.json())
      .then((data) => setAirline(data))
  }, [id]);
  // console.log(data.reviews)
  // let review = airline.reviews;
  // console.log(review);
  //  console.log(airline)
   const kq = airline.reviews?.map((review) => {
        return <Review key={review.id} review={review} />;
      }) || " "  
  return (
    <Card>
      <div className="review">
        <AirlineLogo>
          <img src={airline?.image_url || ""} alt={airline?.name || ""} />
        </AirlineLogo>
        {/* <div>{review}</div> */}
        <AirlineName>{airline?.name || ""} </AirlineName>
        <div className="airline-score">{airline?.avg_score || ""}</div>
        {kq}
      </div>
      <div>
        <ReviewForm airline={airline} />
      </div>
    </Card>
  );
}

export default Airline;
