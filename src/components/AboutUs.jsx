import React from "react";
import Mountain1 from "../assets/corevalue.webp";
import Mountain2 from "../assets/Untitled design.webp";
import Mountain3 from "../assets/destination.webp";
import Mountain4 from "../assets/about.webp";
import AboutUsData from "./AboutUsData";
const AboutUs = () => {
  return (
    <div className="destination">
      <h2>We are A1 Media</h2>
      <AboutUsData
        className="first-des"
        heading="We put people first"
        text="With us, people always come first.

        We strive to put people at the center of everything we do. We prioritize the needs of our customers, their customers and our own employees.
        
        When a business comes to us for help with marketing, we take the time to understand their unique business and goals. We study their target audience in depth so we can speak to them authentically. 
        
        For the customers' customers, we create experiences that educate and inspire them, which in turn lead to a satisfied customer.
        
        For our own team, we foster a culture characterized by growth, support and balance between work and leisure. Their well-being and success is critical to us being able to deliver outstanding work for our clients."
        img1={Mountain1}
        img2={Mountain2}
      />
      <AboutUsData
        className="first-des-reverse"
        heading="Core values "
        text="As a digital marketing agency, our core values ​​are focused on building valuable relationships with our clients as well as offering tailored solutions and delivering measurable results.

        Relationships : We focus on establishing long-term relationships with customers by understanding their unique needs and goals.
        
        Tailored solutions : We tailor our strategies and tactics to each individual client to provide the best possible solution for their specific circumstances.
        
        Simplicity : We believe that efficiency does not have to be complicated. We have simple strategies that are easy to understand and implement.
        
        Transparency : We are open and transparent in our work so that customers always know what they are doing and why. Their main goal is to build trust through transparency."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default AboutUs;
