import React from 'react'
import './Trip.css'
import { Link } from 'react-router-dom';
const BlogPostData = (props) => {
    return (
        <div className="t-card">
          <div className="t-image">
            <Link to={props.link}>
            <img src={props.image} alt="img" />
            </Link>
          </div>
          <h4>{props.heading}</h4>
          <p>{props.text}</p>
        </div>
      );
}

export default BlogPostData
