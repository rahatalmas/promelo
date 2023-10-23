import "./FaqCard.css";
import { useState } from "react";

const FaqCard = () => {
  const [spread, setSpread] = useState(false);

  return (
    <>
      <div
        className="faq-card"
        onClick={() => {
          setSpread(!spread);
          console.log(spread);
        }}
      >
        <div className="faq-head">
          <h1 className="faq-h1">Why do you ask for my SSN during signup?</h1>
          <span className="minus">{spread ? "-" : "+"}</span>
        </div>
        <div style={spread ? { display: "block" } : { display: "none" }}>
          <p>
            Because Pomelo is the first to combine credit with money transfer,
            providing your SSN allows us to verify your identity and provide you
            a credit offer that helps you earn rewards and build your credit
            whenever you send money overseas. Your SSN is not stored or read by
            Pomelo, and only transmitted securely to an identity verification
            service for our bank partner, Coastal Community Bank, member FDIC,
            to confirm your identity.
          </p>
        </div>
      </div>
    </>
  );
};

export default FaqCard;
