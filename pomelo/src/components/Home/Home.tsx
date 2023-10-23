import "./Home.css";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import FeesTableSection from "./FeesTableSection/FeesTableSection";
import MarketingSection from "./MarketingSection/MarketingSection";
import AddSection from "./AddSection/AddSection";
import HowItWorksSection from "./HowItWorksSection/HowItWorksSection";
import GetStartedSection from "./GetStartedSection/GetStartedSection";
import InThePressSection from "./InThePressSection/InThePressSection";
import Faq from "./FrequentlyAskedSection/FaqSection";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="section-container">
          <WelcomeSection />
          <img className="w-img1" src="./assets/leafandcard.svg" />
          <img className="w-img2" src="./assets/rightleafbg.svg" />
        </div>
        <div className="review-section">
          <div className="review-card">
            <h1 className="review-card-name">John SimBajon</h1>
            <h1 className="review-card-star">*****</h1>
            <p className="review-text">
              “Pomelo creates convenience where there is none. I wish our family
              had Pomelo back in the 90’s instead of my parents continuously
              giving fees to Western Union.”
            </p>
          </div>
          <div className="review-card">
            <h1 className="review-card-name">John SimBajon</h1>
            <h1 className="review-card-star">*****</h1>
            <p className="review-text">
              “Pomelo creates convenience where there is none. I wish our family
              had Pomelo back in the 90’s instead of my parents continuously
              giving fees to Western Union.”
            </p>
          </div>
          <div className="review-card">
            <h1 className="review-card-name">John SimBajon</h1>
            <h1 className="review-card-star">*****</h1>
            <p className="review-text">
              “Pomelo creates convenience where there is none. I wish our family
              had Pomelo back in the 90’s instead of my parents continuously
              giving fees to Western Union.”
            </p>
          </div>
        </div>
        <div className="fees-section">
          <FeesTableSection />
        </div>
        <MarketingSection />
        <AddSection />
        <HowItWorksSection />
        <GetStartedSection />
        <div className="partners-section">
          <h1
            style={{ textAlign: "center", fontSize: "40px" }}
            className="color-h1"
          >
            Out Partners
          </h1>
          <div className="partner-box">
            <img style={{ padding: "20px" }} src="./assets/partner1.svg" />
            <img style={{ padding: "20px" }} src="./assets/partner2.svg" />
          </div>
        </div>
        <InThePressSection />
        <Faq />

        <div className="ad2-section">
          <div className="ad2-img-sec">
            <img src="./assets/ad2.webp" className="ad2-img" />
          </div>
          <div className="ad2-texts">
            <h1
              style={{
                fontWeight: 650,
                fontSize: "40px",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              It's time for a new way to send money
            </h1>
            <p>Make your family a Pomelo family. Join now!</p>
            <div>
              <input />
              <button>Signup</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
