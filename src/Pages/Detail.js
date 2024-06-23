import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ExtendMoviesDetail from "../Components/ExtendMoviesDetail";
import { getDetail_Movie_Tv } from "../API/fetchMovie";
import DescCardDetail from "../BlockCard/DescCardDetail";
import RenderCardImageDetail from "../BlockCard/RenderCardImageDetail";
import BlockCmt from "../Blocks/BlockCmt";
import BlockCollection from "../Blocks/BlockCollection";
// import ViewModalVideo from "../Components/ViewModalVideo";

const Detail = () => {
  const { search } = useLocation();
  const paramsObj = new URLSearchParams(search);
  const params = Object.fromEntries(paramsObj);
  const [dataMovie, setDataMovie] = useState({
    dataDetail: {},
    loading: true,
  });
  // const [isOpen, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataMovie({
          ...dataMovie,
          loading: true,
        });

        const getDataImage = await getDetail_Movie_Tv({
          url: `${
            params.type === "movie"
              ? `movie/${params.id}/images`
              : `tv/${params.id}/images`
          }`,
        });
        const getDetail = await getDetail_Movie_Tv({
          url: `${
            params.type === "movie" ? `movie/${params.id}` : `tv/${params.id}`
          }`,
        });
        const getOverview = await getDetail_Movie_Tv({
          url: `${
            params.type === "movie"
              ? `movie/${params.id}/reviews`
              : `tv/${params.id}/reviews`
          }`,
        });
        const getSimilarMovie = await getDetail_Movie_Tv({
          url: `${
            params.type === "movie"
              ? `movie/${params.id}/similar`
              : `tv/${params.id}/similar`
          }`,
        });
        const getDiscoverTv = await getDetail_Movie_Tv({
          url: `discover/tv`,
        });
        const getPopularMovie = await getDetail_Movie_Tv({
          url: `movie/popular`,
        });
        const getCreditMovie = await getDetail_Movie_Tv({
          url: `${
            params.type === "movie"
              ? `movie/${params.id}/credits`
              : `tv/${params.id}/credits`
          }`,
        });
        //
        const getCollectionMovie =
          params.type === "movie" &&
          (getDetail.belongs_to_collection !== null
            ? await getDetail_Movie_Tv({
                url: `collection/${getDetail.belongs_to_collection?.id}`,
              })
            : null);

        setTimeout(() => {
          setDataMovie({
            dataDetail: {
              movie_detail: getDetail,
              image_movie: getDataImage,
              overview: getOverview,
              similar_movie: getSimilarMovie,
              discover_tv: getDiscoverTv,
              popular_movie: getPopularMovie,
              credit_movie: getCreditMovie,
              collection_movie: getCollectionMovie,
            },
            loading: false,
            type: params.type,
          });
        }, 1500);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);
  return (
    <>
      <div className="container-wrapper bg-[#121733]  mt-5 mobile:rounded-md tablet:py-5">
        <div className="tablet:flex tablet:flex-col laptop:flex-row text-white tablet:px-3 tablet:gap-x-5">
          <RenderCardImageDetail dataMovie={dataMovie}></RenderCardImageDetail>
          <DescCardDetail
            dataMovie={dataMovie}
            media_type={params.type}
          ></DescCardDetail>
        </div>
        <BlockCmt dataMovie={dataMovie}></BlockCmt>
        {params.type === "movie" && (
          <BlockCollection dataMovie={dataMovie}></BlockCollection>
        )}
        <ExtendMoviesDetail
          status_loading={dataMovie.loading}
          dataMovie={dataMovie}
          type_similar={params.type}
        ></ExtendMoviesDetail>
      </div>
    </>
  );
};

export default Detail;
