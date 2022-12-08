import React, {useState, useEffect} from 'react'
import Airline from './Airline'
import Header from './Header'

function Combined(airline){
    const [airline, setAirline] = useState("")
    const [review, setReview] = useState("")
     
//    console.log(airline)
    useEffect(() => {
        // console.log(airline)
        fetch(`http://localhost:3000/airlines/${id}`)
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    }, [])

    return (
        <div className="wrapper">
            <div className="column">
                <Header
                attributes={airline.data.attributes}
                />
                    <div className="reviews">
                    </div>
                    <div className='column'>
                        <div className='review-form'>[Review Form Goes Here.]</div>
                    </div>
            </div>
        </div>
    )
}


export default Combined;