import React from "react";
import WrapperList from "../Components/WrapperList";
import TopHeaderList from "../Components/TopHeaderList";
import WrapperContentList from "../Components/WrapperContentList";
import CardMovies from "../BlockCard/CardMovies";
import { breakpoints_responsive } from "../API/base_data";
import SwiperTemplate from "../Components/SwiperTemplate";
import { SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";

const BlockCollection = ({ dataMovie }) => {
  if (dataMovie.dataDetail?.collection_movie !== null)
    return (
      <WrapperList>
        <TopHeaderList
          have_titleList={false}
          title_list={
            dataMovie.dataDetail?.collection_movie?.name || "Collection"
          }
        ></TopHeaderList>
        <WrapperContentList>
          <SwiperTemplate breakpoints={breakpoints_responsive}>
            {dataMovie.loading === false
              ? Array.isArray(dataMovie.dataDetail?.collection_movie?.parts) &&
                dataMovie.dataDetail?.collection_movie?.parts.map(
                  (item, index) => {
                    return (
                      <SwiperSlide className="tablet:rounded-xl mobile:rounded-md">
                        <CardMovies
                          id_movies={item.id}
                          overview={item.overview}
                          poster_path={item.poster_path}
                          public_date={item.release_date}
                          title={item.title}
                          type={dataMovie.type}
                          rating={item.vote_average}
                        ></CardMovies>
                      </SwiperSlide>
                    );
                  }
                )
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

export default BlockCollection;
