import React from "react";
import ListMovies from "../BlockList/ListMovies";
import { breakpoints_responsive } from "../API/base_data";

const ExtendMoviesDetail = ({ status_loading, dataMovie, type_similar }) => {
  const data_list_InExtend = [
    {
      title_list: "Similar",
      breakpoints: breakpoints_responsive,
      type: `${type_similar === "movie" ? "movie" : "tv"}`,
      get: "similar_movie",
    },
    {
      title_list: "popular",
      breakpoints: breakpoints_responsive,
      type: "movie",
      get: "popular_movie",
    },
    {
      title_list: "tv shows",
      breakpoints: breakpoints_responsive,
      type: "tv",
      get: "discover_tv",
    },
  ];

  return (
    <>
      {dataMovie.dataDetail?.similar_movie?.results.length > 0 &&
        data_list_InExtend.slice(0, 1).map((item, index) => {
          return (
            <ListMovies
              title_list={item.title_list}
              breakpoints={item.breakpoints}
              data={dataMovie.dataDetail[item.get]}
              loading_status={status_loading}
              type={item.type}
              rating={item.vote_average}
            ></ListMovies>
          );
        })}
      {data_list_InExtend.slice(1, 3).map((item, index) => {
        return (
          <ListMovies
          
            title_list={item.title_list}
            breakpoints={item.breakpoints}
            data={dataMovie.dataDetail[item.get]}
            loading_status={status_loading}
            type={item.type}
            rating={item.vote_average}
          ></ListMovies>
        );
      })}
    </>
  );
};

export default ExtendMoviesDetail;
