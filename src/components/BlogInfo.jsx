import React from 'react'
import BlogData from "./BlogData";
import Trip1 from "../assets/1.webp"
import Trip2 from "../assets/2.webp"
import Trip3 from "../assets/3.webp"
import './BlogInfo.css'
const BlogInfo = () => {
  return (
    <div className="trip">
    <h2>A selection of our customers</h2>
    <p>You can discover unique destinatios using Google Maps.</p>
    <div className="tripcard">
      <BlogData
        image={Trip1}
        heading="Örtagubben AB"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla totam
        temporibus ipsa alias quae reiciendis earum vero, laboriosam
        repellendus quas necessitatibus commodi, veniam cupiditate aut eveniet
        vel dolor. Officiis, debitis?"
      />
      <BlogData
        image={Trip2}
        heading="ZM Måleri AB"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla totam
        temporibus ipsa alias quae reiciendis earum vero, laboriosam
        repellendus quas necessitatibus commodi, veniam cupiditate aut eveniet
        vel dolor. Officiis, debitis?"
      />
      <BlogData
        image={Trip3}
        heading="KL Car care"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla totam
        temporibus ipsa alias quae reiciendis earum vero, laboriosam
        repellendus quas necessitatibus commodi, veniam cupiditate aut eveniet
        vel dolor. Officiis, debitis?"
      />
    </div>
      <button className='btn-contact'>Contact</button>
  </div>
  )
}

export default BlogInfo
