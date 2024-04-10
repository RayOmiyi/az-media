import React from 'react'
import Hero from "../components/Hero";
import Night from "../assets/about.webp"
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <div>
      <Hero
        cName="hero"
        heroImg={Night}
        title="About Us"
      />
      <AboutUs/>
    </div>
  )
}

export default About
