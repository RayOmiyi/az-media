import React from 'react'
import './EntertainmentData.css'
const EntertainmentData = (props) => {
  return (
    <div className={props.className}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p> 
      </div>
      <div className="image">
        <img src={props.img1} alt="img" />
      </div>
    </div>
  );
}

export default EntertainmentData
