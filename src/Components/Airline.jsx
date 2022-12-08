import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'
import Header from "./Header";

  const Card = styled.div`
    margin-left: auto;
    margin-right: auto;
  `
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
  const  LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px

    a{
      color: #fff;
      background: #000;
      border-radius: 4px;
      padding: 10px 50px;
      border: 1px solid #000;
      width: 100%;
      text-decoration: none;  
    }
  `
function Airline(){
    let {id} = useParams();
  const [airline, setAirline] = useState({})
   useEffect(() => {
     // console.log(airline)
     fetch(`http://localhost:3000/airlines/${id}`)
       .then((resp) => resp.json())
       .then((data) => setAirline(data));
   }, [id]);

    return (
      <Card>
        <AirlineLogo>
          <img src={airline?.image_url || ""} alt={airline?.name || "airlineName"} />
        </AirlineLogo>
        <AirlineName>{airline?.name || ""}</AirlineName>
        <div className="airline-score">{airline?.avg_score || "4"}</div>
        <ReviewForm/>
      </Card>
    );
}

export default Airline;