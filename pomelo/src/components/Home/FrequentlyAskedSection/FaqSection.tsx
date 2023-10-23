import "./FaqSection.css";
import FaqCard from "./FaqCard";
const Faq = () => {
  return (
    <>
      <div className="faq-section">
        <h1
          style={{ fontSize: "50px", fontWeight: "400", textAlign: "center" }}
        >
          Frequently Asked Questions
        </h1>
        <div className="faq-container">
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
        </div>
      </div>
    </>
  );
};

export default Faq;
