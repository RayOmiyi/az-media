import React from "react";
import Hero from "../components/Hero";
import home from "../assets/Untitled design.webp";
import Entertainment from "../components/Entertainment";
import BlogInfo from "../components/BlogInfo";
const Home = () => {
  return (
    <div>
      <Hero
        cName="hero"
        heroImg={home}
        titles="Your Digital Market agency"
        text={
          <>
            We are your digital marketing agency in Stockholm that helps your business grow online.
            <br />
            We create marketing campaigns with a focus on results.
          </>
        }
        buttonText="Contact Us"
        url="/contact"
        btnClass="show btn-contact"
      />
      <Entertainment/>
      <BlogInfo/>
    </div>
  );
};

export default Home;
