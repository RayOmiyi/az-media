import React from "react";
import "./Trip.css";
import News1 from "../assets/save-instagram.webp";
import News2 from "../assets/email.webp";
import News3 from "../assets/facebook.webp";
import News4 from "../assets/media-agency.webp";
import BlogPostData from "./BlogPostData";
const blogPost = () => {
  return (
    <div className="trip">
      <h1>Recent Blogs</h1>
      <div className="tripcard">
        <BlogPostData
         image={News1}
         link="/news1"
         heading="05.01.2024"
         text="How to advertise on Instagram without wasting time"
        />
        <BlogPostData
          image={News2}
          link='/news1'
          heading="08.04.2024"
          text="5 email marketting strategies that drive sales"
        />
        <BlogPostData
          image={News3}
          link='/news1'
          heading="23.10.2023"
          text="Advertise Ratt as a car dealer on Facebook & Instagram"
        />
        <BlogPostData
          image={News4}
          link='/news1'
          heading="08.04.2024"
          text="How to choose the right social media agency"
        />
      </div>
    </div>
  );
};

export default blogPost;
