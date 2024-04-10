import React from "react";
import EntertainmentData from "./EntertainmentData";
import Mountain from "../assets/destination.webp";
const Entertainment = () => {
  return (
    <div className="destination">
      <h1>
        What does it mean to be a full service social media marketing company?
      </h1>
      <EntertainmentData
        className="first-des"
        text="We've talked a lot about social media management and all that our social media marketing services entail, but what does it really mean to be a full service online marketing company?
      Previously we have listed the various services we provide. Social media advertising, social media management, email marketing, PPC, SEO, and so on can all be separate services, but they work best when organized together as part of an overall strategy.
      And that's the benefit of having all your marketing efforts under one roof! When you spread your marketing efforts across multiple agencies, letting one marketing company manage your social media while another agency handles your SEO and so on, it leaves room for misunderstandings and missed opportunities for optimization.
      But having all your digital marketing efforts bundled within the same digital marketing company allows for synergy, optimal efforts in each area, smooth communication and most importantly, maximum results.
      So in short, being a full service digital marketing company simply means we handle all your marketing needs in one place at an affordable price, giving you peace of mind, more time and the results you've been looking for."
        img1={Mountain}
      />
    </div>
  );
};

export default Entertainment;
