import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../assets/service1.webp";
import Trip2 from "../assets/service2.webp";
import Trip3 from "../assets/service3.webp";

function Trip() {
  return (
    <div className="trip">
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Social media advertising"
          text="Reach more customers on social media! Let us help you target ads to new audiences and capture the attention of people who are interested in your product or service. 

          We optimize your social posts and ads to attract new customers from relevant groups. More exposure means more sales - work with us to expand your social reach!"
        />
        <TripData
          image={Trip2}
          heading="Search engine optimization"
          text="With our SEO service, we help your company increase its visibility on Google and other search engines. We offer everything from keyword research to technical SEO and link building strategies. With patience, you will end up at the top of Google's search engine."
        />
        <TripData
          image={Trip3}
          heading="Google Advertising"
          text="With Google Ads, you can present your company, your products or services to new customers every day. Reach people searching for what you offer with targeted, affordable ads. More customers means more opportunities to develop your business. Don't wait to get started. Call or email us today and start promoting your brand today!"
        />
      </div>
    </div>
  );
}

export default Trip;
