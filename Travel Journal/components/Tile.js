import React from 'react'
// import data from "../data.js"
// console.log(data)
export default function Tiles(props){
    // console.log(props.place)
    return(
        <div className = "tile-container">
            <img src = {props.place.imageUrl} className="place-img"/>
            <div className="tile-content">
                <div className="tile-location">
                    <img src="../images/googleLocation.png" className="tiles-location-logo"/>
                    <p>{props.place.location}</p>
                    <a href={props.place.googleMapsUrl} target = "_blank"> View On Google Maps</a>
                </div>
                <h1>{props.place.title}</h1>
                <p>{`${props.place.startDate} - ${props.place.endDate}`}</p>
                <p>{props.place.description}</p>
            </div>
        </div>
    )
}
/* */