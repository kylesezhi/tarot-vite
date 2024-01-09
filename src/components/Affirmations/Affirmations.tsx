import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Affirmation from "../Affirmation/Affirmation";
import "swiper/css";
import "swiper/css/pagination";
import "./Affirmations.css";

interface AffirmationProps {
  affirmations: Array<string>;
}

function Affirmations({ affirmations }: AffirmationProps) {
  return (
    <div className="affirmations">
      <Swiper
        className="affirmations-swiper"
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {affirmations.map((affirmation) => (
          <SwiperSlide key={affirmation}>
            <Affirmation affirmation={affirmation} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Affirmations;
