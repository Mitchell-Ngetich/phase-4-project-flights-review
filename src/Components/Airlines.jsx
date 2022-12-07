import React, {useState, useEffect} from "react";
import Airline from "./Airline";
import styled from "styled-components";

const Home = styled.div`
  text-align: center;
  max-width: 100px;
  margin-right: auto;
  margin-left: auto;
`
const Header = styled.div`
  padding: 50px 50px 10px 50px

  h1 {
    font-size: 42px;
  }
`
const  Subheader= styled.div`
font-weight: 300;
font-size: 25px;
`
const Grid = styled.div`
// display: grid;
grid-template-columns: repeat(1, 1fr);
grid-gap: 2px;
width: 10%;
padding: 5px

`

function Airlines() {
    const [airlines, setAirlines] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/airlines")
          .then((resp) => resp.json())
        //  .then((data) => console.log(data))
        .then((data) => setAirlines(data))
        .catch((error) => console.log(error))
    }, []);
        const air = airlines.map((airline)=> {
          return ( 
          <Airline key={airline.id} airline={airline}/>
          )

        })
        console.log(airlines)
    return (
      <Home>
        <Header>
          <h1>OpenFlights</h1>
          <Subheader>Honest, accurate airline reviews.</Subheader>
        </Header>
        <Grid>{air}</Grid>
      </Home>
    );
}

export default Airlines;
