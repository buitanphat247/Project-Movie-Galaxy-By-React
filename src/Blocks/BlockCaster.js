import React from "react";
import TopHeaderList from "../Components/TopHeaderList";
import SwiperTemplate from "../Components/SwiperTemplate";
import { SwiperSlide } from "swiper/react";
import CardCredits from "./../BlockCard/CardCredits";
import Skeleton from "react-loading-skeleton";

const BlockCaster = ({ dataMovie }) => {
  return (
    <div>
      <TopHeaderList have_titleList={false} title_list="cast & crew" />
      <div className="mt-3">
        <SwiperTemplate
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
          }}
        >
          {dataMovie.loading === false
            ? Array.isArray(dataMovie.dataDetail?.credit_movie?.cast) &&
              dataMovie.dataDetail?.credit_movie?.cast.map((item, index) => (
                <SwiperSlide key={index}>
                  <CardCredits
                    name={item.name}
                    charactor={item.character}
                    profile_path={item.profile_path}
                  />
                </SwiperSlide>
              ))
            : new Array(20).fill("").map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="block">
                    <Skeleton height={150} className="w-full" />
                  </div>
                </SwiperSlide>
              ))}
        </SwiperTemplate>
      </div>
    </div>
  );
};

export default BlockCaster;
