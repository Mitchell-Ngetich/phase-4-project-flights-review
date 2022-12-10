import React, {useState, useEffect} from 'react'
import './ReviewForm.css'


function ReviewForm({airline}){
  //  const review = airline.reviews
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
      console.log(airline)

    alert("added successfully")
    }
    return (
      <>
      

        {/* <div>{review.title}</div>
        <div>{review.description}</div> */}
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="share">Share your review!</div>
            <div className="field">
              <input
                className="input"
                onChange={handleChange}
                type="text"
                name="title"
                placeholder="Review Title"
              ></input>
            </div>
            <div className="field">
              <input
                className="input"
                onChange={handleChange}
                type="text"
                name="description"
                placeholder="Review Description"
              ></input>
            </div>
            <div className="field"></div>
            <button className="submit" type="submit">
              Submit Your Review
            </button>
          </form>
        </div>
      </>
    );
}

export default ReviewForm;