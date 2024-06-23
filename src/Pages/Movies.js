/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import CardMovies from "../BlockCard/CardMovies";
import styled from "styled-components";
import { useGetMoviesQuery } from "../API/movies_api";
import FillMovies from "../Components/FillMovies";
import { getDetail_Movie_Tv } from "../API/fetchMovie";
import Skeleton from "react-loading-skeleton";
import RoutePaginate from "../hooks/RoutePaginate";
import { useLocation, useSearchParams } from "react-router-dom";
import debounce from "lodash.debounce";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { handleScrollTop } from "../hooks/ScrollToTop";
const GridStyled = styled.div`
  display: grid;
  @media (min-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
const Movies = ({ url, type }) => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);
  const lastSegment = pathSegments[pathSegments.length - 1];
  const queryParams = new URLSearchParams(location.search);
  const currentPage_url = queryParams.get("page");
  const media = queryParams.get("media");
  const check_query = queryParams.get("search");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({ dataMovie: [], loading: true });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(
    debounce((event, value) => {
      handleScrollTop();
      setCurrentPage(value);
      // In ra trang hiện tại sau khi debounce
    }, 1000),
    []
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        setData({
          ...data,
          loading: true,
        });
        let getDataImage;

        if (check_query === null) {
          getDataImage = await getDetail_Movie_Tv({
            url: `${url}?page=${currentPage_url}`,
          });
        } else {
          if (media === "discover") {
            getDataImage = await getDetail_Movie_Tv({
              url: `/${media}/${type}?page=${currentPage_url}`,
            });
          } else if (media !== "discover" && media !== "similar") {
            getDataImage = await getDetail_Movie_Tv({
              url: `/${type}/${media}?page=${currentPage_url}`,
            });
          } else {
            getDataImage = await getDetail_Movie_Tv({
              url: `/${type}/${media}?page=${currentPage_url}`,
            });
          }
        }

        setTimeout(() => {
          setData({
            dataMovie: getDataImage,
            loading: false,
          });
        }, 1500);
      } catch (error) {
        toast.info("Film data not found");
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, currentPage_url, media]);
  return (
    <div className="container-movies-main laptop:mt-5">
      <FillMovies value_select_defaut={media} media_type={type}></FillMovies>
      <GridStyled className="tablet:mt-5 mobile:mt-3 mobile:gap-2">
        {data.loading === false
          ? Array.isArray(data.dataMovie?.results) &&
            data.dataMovie?.results.map((item, index) => {
              return (
                <CardMovies
                  title={item.title || item.name}
                  overview={item.overview}
                  public_date={item.release_date || item.first_air_date}
                  poster_path={item.poster_path}
                  id_movies={item.id}
                  type={type}
                  rating={item.vote_average}
                ></CardMovies>
              );
            })
          : new Array(20).fill("").map((item, index) => {
              return (
                <Skeleton className="laptop:h-[450px] tablet:h-[300px] mobile:h-[200px]"></Skeleton>
              );
            })}
      </GridStyled>
      <div className="flex items-center justify-center mt-5">
        <RoutePaginate
          type={lastSegment}
          totalPage={data.dataMovie.total_pages}
          onChange={handleChange}
          check_query={check_query}
          media={media}
        ></RoutePaginate>
      </div>
    </div>
  );
};

export default Movies;
