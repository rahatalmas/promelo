import "./InThePressSection.css";
import PressCard from "./PressCard";
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';

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
          <Swiper 
          spaceBetween={50}
                 slidesPerView={3}
                  
          >
            <SwiperSlide><PressCard/></SwiperSlide>
            <SwiperSlide><PressCard/></SwiperSlide>
            <SwiperSlide><PressCard/></SwiperSlide>
            <SwiperSlide><PressCard/></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default InThePressSection;
