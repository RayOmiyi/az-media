import React from 'react'
import './AboutUsStyles.css'
const AboutUsData = (props) => {
    return (
        <div className={props.className}>
          <div className="des-text">
            <h2>{props.heading}</h2>
            <p>{props.text}</p> 
          </div>
          <div className="image">
            <img src={props.img1} alt="img" />
            <img src={props.img2} alt="img" /> {/* Assuming img2 should be used here */}
          </div>
        </div>
      );
}

export default AboutUsData
