import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper } from "swiper/react";

const SwiperTemplate = ({ breakpoints, children }) => {
  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={false}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      navigation={false}
      modules={[Autoplay]}
      className="mySwiper h-full"
      breakpoints={breakpoints}
    >
      {children}
    </Swiper>
  );
};

export default SwiperTemplate;
