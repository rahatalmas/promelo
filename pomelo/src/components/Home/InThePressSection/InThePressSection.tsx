import "./InThePressSection.css";
import PressCard from "./PressCard";
import 'swiper/css';
import Carousel from "react-elastic-carousel";


const InThePressSection = () => {

  const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 900, itemsToShow: 1},
  { width: 1000, itemsToShow:  2},
  { width: 1500, itemsToShow: 3 }
];
const cardData = [1,2,3,5,6,7,8];

  return (
  

   <>
      <div style={{ margin: "50px 0px" }}>
        <h1
          style={{ fontSize: "50px", fontWeight: "400", textAlign: "center" }}
        >
          In The Press
        </h1>
        <div className="in-the-press-section">

      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {
            cardData.map(d=>(
              <PressCard key={d} />
            ))
          }
        </Carousel>
      </div>

        </div>
      </div>
    </>
  );
};

export default InThePressSection;
