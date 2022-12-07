import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components';

 
function Airline({airline}){
    return (
      <div className="card">
        <div className="airline-logo">
          <img src={airline.image_url} alt={airline.name} />
        </div>
        <div className="airline-name">{airline.name}</div>
        <div className="airline-score">{airline.avg_score}</div>
        <div className="airline-link">
            <Link to={`/airlines/${airline.id}`}>View Airlines</Link>
        </div>
      </div>
    );
}

export default Airline;