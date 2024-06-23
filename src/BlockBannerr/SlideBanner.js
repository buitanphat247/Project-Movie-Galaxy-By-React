import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SlideCard from "./SlideCard";
import WrapperList from "../Components/WrapperList";
import SwiperTemplate from "../Components/SwiperTemplate";
import Skeleton from "react-loading-skeleton";

const SlideBanner = ({ data, loading_status }) => {
  // eslint-disable-next-line no-unused-vars

  return (
    <WrapperList>
      <SwiperTemplate
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {loading_status === false
          ? Array.isArray(data?.results) &&
            data?.results.map((item, index) => {
              return (
                <SwiperSlide className="mobile:rounded-md tablet:rounded-xl overflow-hidden">
                  <SlideCard
                    vote_average={item.vote_average}
                    title={item.title}
                    backdrop={item.backdrop_path}
                    overview={item.overview}
                  ></SlideCard>
                </SwiperSlide>
              );
            })
          : new Array(20).fill("").map((item, index) => {
              return (
                <SwiperSlide className="mobile:rounded-md tablet:rounded-xl overflow-hidden">
                  <Skeleton className="mobile:h-[200px] tablet:h-[250px] block"></Skeleton>
                </SwiperSlide>
              );
            })}
      </SwiperTemplate>
    </WrapperList>
  );
};

export default SlideBanner;
