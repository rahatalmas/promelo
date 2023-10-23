import "./InThePressSection.css";
import PressCard from "./PressCard";

const InThePressSection = () => {
  return (
    <>
      <div style={{ margin: "50px 0px" }}>
        <h1
          style={{ fontSize: "50px", fontWeight: "400", textAlign: "center" }}
        >
          In The Press
        </h1>
        <div className="in-the-press-section">
          <PressCard />
          <PressCard />
          <PressCard />
          <PressCard />
        </div>
      </div>
    </>
  );
};

export default InThePressSection;
