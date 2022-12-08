import React, {useState, useEffect} from 'react'
import './ReviewForm.css'


function ReviewForm({airline}){
    const [title, setTiltle] = useState({})
    const [description, setDescription] = useState({})
     const [score, setScore] = useState({});
      
     const handleChange = (e) => {
      e.preventDefault()
      console.log(e.target.value);
     }


    const handleSubmit = (e) => {
      e.preventDefault()

      fetch(`http://localhost:3000/airlines`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
          score: score,
        }),
      });
    alert("added successfully")
    }
    return (
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className='share'>Share your review!</div>
          <div className="field">
            <input
              className="input"onChange={handleChange}type="text"name="title"placeholder="Review Title"
            ></input>
          </div>
          <div className="field">
            <input className="input" onChange={handleChange} type="text" name="description" placeholder="Review Description"
            ></input>
          </div>
          <div className="field">
            <div className="rating-container">
              <div className="rating-title-text">Rate This Airline</div>
              [Star Rating Here]
            </div>
          </div>
          <button className='submit' type="submit">Create Review</button>
        </form>
      </div>
    );
}

export default ReviewForm;