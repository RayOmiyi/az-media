import React from "react";
import Hero from "../components/Hero";
import News1 from "../assets/save-instagram.webp";
import insta from '../assets/Instagram-annons.webp';
import "./news.css";

const news = () => {
  return (
    <div>
      <Hero cName="hero" heroImg={News1} />
    <div className="news-container">
      <h1>How to advertise on Instagram without wasting your money</h1>
      <p>
        05.01.2024 So you've decided to take the plunge and try advertising on
        Instagram. Smart move - Instagram has over 1 billion monthly active
        users <br /> and over 500 million daily active users, making it a huge
        opportunity for businesses. But before you dive headfirst into it, you
        need to have a plan.
      </p>
      <h4>Assign goals</h4>
      <p>Define your goals</p>
      <p>
        Before you start advertising on Instagram, you need to decide exactly what you want to achieve. Do you want to increase brand awareness? Drive traffic to your website? Get more followers? Sell ​​products? Start by defining 1-2 specific, measurable goals.
      </p>
      <ul>
        <li>Whatever your goals are, make sure they are:</li>
        <ul>
          <li>Specific (get 25% more followers, not just "more followers")</li>
          <li>Measurable (you can track your progress)</li>
          <li>Attainable (set realistic goals based on your current numbers)</li>
          <li>Relevant (to your overall business and marketing goals)</li>
          <li>Time bound (have an end date to work towards)</li>
        </ul>
      </ul>
      <p>
        Once you've determined your Instagram advertising goals, you can then choose ad formats, creative, targeting, and bid options to help you achieve them. But without clearly defined goals, you're just wasting money. So put in the work up front to set measurable goals that will in turn lead to success with your Instagram advertising.
      </p>
      <img src={insta} alt="" className="instagram-ad" />
      <h4>Conclusion</h4>
      <p>
        So there you have it, how to effectively advertise on Instagram without breaking the bank. By focusing on high-quality images, interacting with your audience, optimizing your profile and choosing the right marketing options for your needs, you can achieve great results with a small budget. Instagram ads and influencer marketing don't have to cost a fortune if you're strategic.
        <br /> Now get out there and start creating - your new customers are waiting to discover your brand!
      </p>
    </div>
    </div>
  );
};

export default news;
