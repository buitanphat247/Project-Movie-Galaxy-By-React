import React from "react";
import CardMovies from "../BlockCard/CardMovies";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TopHeaderList from "../Components/TopHeaderList";
import WrapperList from "../Components/WrapperList";
import SwiperTemplate from "../Components/SwiperTemplate";
import WrapperContentList from "../Components/WrapperContentList";
import Skeleton from "react-loading-skeleton";
import slug from "slug";

const ListMovies = ({
  title_list,
  breakpoints,
  data = [],
  type,
  loading_status,
}) => {
  return (
    <WrapperList>
      <TopHeaderList
        have_titleList={
          slug(title_list, { lower: true }) === "similar" ? false : true
        }
        type={type}
        title_list={title_list}
      ></TopHeaderList>
      <WrapperContentList>
        <SwiperTemplate breakpoints={breakpoints}>
          {loading_status === false
            ? Array.isArray(data?.results) &&
              data?.results.map((item, index) => {
                return (
                  item.media_type !== "person" && (
                    <SwiperSlide className="tablet:rounded-xl mobile:rounded-md">
                      <CardMovies
                        id_movies={item.id}
                        type={type || item.media_type}
                        title={item.title || item.name}
                        overview={item.overview}
                        public_date={item.release_date || item.first_air_date}
                        poster_path={item.poster_path}
                        rating={item.vote_average}
                      ></CardMovies>
                    </SwiperSlide>
                  )
                );
              })
            : new Array(20).fill("").map((item, index) => {
                return (
                  <SwiperSlide className="tablet:rounded-xl mobile:rounded-md">
                    <Skeleton className="tablet:min-h-[400px] laptop:min-h-[450px] mobile:min-h-[250px]"></Skeleton>
                  </SwiperSlide>
                );
              })}
        </SwiperTemplate>
      </WrapperContentList>
    </WrapperList>
  );
};

export default ListMovies;
