import React from 'react'
import './Destination.css'; 
import data from '../../assets/data.json';


function Destination() {
  return (
    <div className="destination-main">
        <p className="title"><h2>01</h2>PICK YOUR DESTINATION</p>
        <div className="destination-options">
            {data.destinations.map((destination)=>(
                <span className="dest-option">{destination.name}</span>
            ))}
        </div>
        {data.destinations.map((destination)=>(
            <div className="destination">
                <div className="dest-info">
                    <img src={destination.images.png} alt="" /> 
                    <div className="dest-Subinfo">
                        <p className="name">{destination.name}</p>
                        <p className="description">{destination.description}</p>
                        <div className="distance">
                            <p className="distance-info">AVG. DISTANCE <span>{destination.distance}</span></p>
                            <p className="distance-info">EST. TRAVEL TIME <span>{destination.travel}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Destination