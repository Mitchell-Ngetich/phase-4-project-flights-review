import React, {useState, useEffect} from 'react'
import Airline from './Airline'


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

    return <div>This is my Airline</div>
}


export default Combined;