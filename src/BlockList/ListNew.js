import React from "react";
import WrapperList from "../Components/WrapperList";
import TopHeaderList from "../Components/TopHeaderList";
import WrapperContentList from "../Components/WrapperContentList";
import SwiperTemplate from "../Components/SwiperTemplate";
import { SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";
import CardNews from "../BlockCard/CardNews";

const ListNew = ({ title_list, loading_status, data, type }) => {
  return (
    <WrapperList>
      <TopHeaderList type="news" title_list={title_list}></TopHeaderList>
      <WrapperContentList>
        <SwiperTemplate
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {loading_status === false
            ? Array.isArray(data?.results) &&
              data?.results.map((item, index) => {
                return (
                  <SwiperSlide className="tablet:rounded-xl mobile:rounded-md">
                    <CardNews
                      title={item.title}
                      date={item.date}
                      overview={item.body}
                      image={item.image}
                      time={item.time}
                      path={item.url}
                    ></CardNews>
                  </SwiperSlide>
                );
              })
            : new Array(20).fill("").map((item, index) => {
                return (
                  <SwiperSlide className="tablet:rounded-xl mobile:rounded-md">
                    <Skeleton className="h-[450px]"></Skeleton>;
                  </SwiperSlide>
                );
              })}
        </SwiperTemplate>
      </WrapperContentList>
    </WrapperList>
  );
};

export default ListNew;
