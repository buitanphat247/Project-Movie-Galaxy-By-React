import React from "react";
import WrapperContentList from "../Components/WrapperContentList";
import TopHeaderList from "../Components/TopHeaderList";
import WrapperList from "../Components/WrapperList";
import SwiperTemplate from "./../Components/SwiperTemplate";
import { SwiperSlide } from "swiper/react";
import CardYoutube from "../BlockCard/CardYoutube";

const BlockOfficalVideo = ({ dataMovie }) => {
  return (
    <WrapperList>
      <TopHeaderList
        have_titleList={false}
        title_list={"Offical Videos"}
      ></TopHeaderList>
      <WrapperContentList>
        <SwiperTemplate
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {dataMovie.loading === false &&
            dataMovie.dataDetail.offical_movie?.results.map((item, index) => {
              return (
                <SwiperSlide>
                  {/* <YouTube videoId={item.key} opts={opts} onReady={onReady} /> */}
                  <CardYoutube key_ytb={item.key}></CardYoutube>
                </SwiperSlide>
              );
            })}
        </SwiperTemplate>
      </WrapperContentList>
    </WrapperList>
  );
};

export default BlockOfficalVideo;
