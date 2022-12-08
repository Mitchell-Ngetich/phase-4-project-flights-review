import React from 'react'

function ReviewForm(){
    return (
      <div className="wrapper">
        <form onSubmit={handlesubmit}>
          <div>Share your experience</div>
          <div className="field">
            <input onChange={handleChange}type="text" name="title" placeholder="Review Title"></input>
          </div>
          <div className='field'>
            <div className='rating-container'>
                <div className='rating-title-text'>Rate This Airline</div>
                [Star Rating Here]
            </div>   
          </div>
          <button type='submit'>Submit Review</button>
        </form>
      </div>
    );

}