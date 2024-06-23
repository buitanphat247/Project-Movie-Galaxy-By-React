import { useMediaQuery } from "@react-hook/media-query";
import React from "react";
import styled from "styled-components";
import SwiperTemplate from "../Components/SwiperTemplate";
import { SwiperSlide } from "swiper/react";
import CardImageDetail from "./CardImageDetail";
import Skeleton from "react-loading-skeleton";
import { Button } from "react-scroll";
const WrapperHeightImgStyled = styled.div``;
const ButtonStyled = styled.button`
  height: 50px;
  margin-right: 10px;
  border-radius: 50px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  @media (min-width: 320px) {
    height: 40px;
    font-size: 16px;
  }
  @media (min-width: 600px) {
    height: 40px;
  }
`;
const RenderCardImageDetail = ({ dataMovie }) => {
  const isMobile = useMediaQuery("(max-width: 599px)");
  const isTablet = useMediaQuery("(min-width: 600px)");
  return (
    <div className="mobile:p-2">
      <WrapperHeightImgStyled className="laptop:w-[300px] tablet:w-full mobile:rounded-t-md tablet:rounded-md overflow-hidden  group cursor-pointer">
        <SwiperTemplate
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {dataMovie.loading === false
            ? (isMobile === true &&
                Array.isArray(dataMovie.dataDetail.image_movie?.backdrops) &&
                dataMovie.dataDetail.image_movie?.backdrops.map(
                  (item, index) => {
                    return (
                      <SwiperSlide>
                        <CardImageDetail
                          poster_path={item?.file_path}
                          rating={
                            dataMovie.dataDetail?.movie_detail?.vote_average
                          }
                        ></CardImageDetail>
                      </SwiperSlide>
                    );
                  }
                )) ||
              (isTablet === true &&
                Array.isArray(dataMovie.dataDetail.image_movie?.posters) &&
                dataMovie.dataDetail.image_movie?.posters.map((item, index) => {
                  return (
                    <SwiperSlide>
                      <CardImageDetail
                        poster_path={item?.file_path}
                        rating={
                          dataMovie.dataDetail?.movie_detail?.vote_average
                        }
                      ></CardImageDetail>
                    </SwiperSlide>
                  );
                }))
            : new Array(20).fill("").map((item, index) => {
                return (
                  <SwiperSlide className=" mobile:rounded-md tablet:rounded-xl overflow-hidden">
                    <Skeleton className="w-full mobile:h-[200px] tablet:h-[400px]"></Skeleton>
                  </SwiperSlide>
                );
              })}
        </SwiperTemplate>
      </WrapperHeightImgStyled>
      <div className="text-white font-semibold mobile:flex flex-col gap-3 mt-3">
        {dataMovie.loading === false ? (
          <>
            <ButtonStyled className="bg-blue-500 mobile:w-full">
              <span>
                <i class="fa-solid fa-circle-play"></i>
              </span>
              <span>Watch</span>
            </ButtonStyled>
            <ButtonStyled className="bg-[#6b7280] mobile:w-full">
              <span>
                <i class="fa-solid fa-circle-play"></i>
              </span>
              <span>Trailer</span>
            </ButtonStyled>
          </>
        ) : (
          <>
            <Skeleton height={40}></Skeleton>
          </>
        )}
        <EmotionTitle dataMovie={dataMovie}></EmotionTitle>
      </div>
    </div>
  );
};
const EmotionTitle = ({ dataMovie }) => {
  return (
    <>
      {dataMovie.loading === false ? (
        <div className="flex gap-x-2 justify-around">
          <Button className="rounded-full h-[40px] w-[40px] bg-white text-black font-bold text-lg">
            <i class="fa-regular fa-star"></i>
          </Button>
          <Button className="rounded-full h-[40px] w-[40px] bg-white text-black font-bold text-lg">
            <i class="fa-regular fa-bookmark"></i>
          </Button>
          <Button className="rounded-full h-[40px] w-[40px] bg-white text-black font-bold text-lg">
            <i class="fa-regular fa-thumbs-up"></i>
          </Button>
          <Button className="rounded-full h-[40px] w-[40px] bg-white text-black font-bold text-lg">
            <i class="fa-regular fa-thumbs-down"></i>
          </Button>
        </div>
      ) : (
        <div className="mobile:w-full tablet:w-full h-[40px]">
          <Skeleton className="mobile:w-full h-full"></Skeleton>
        </div>
      )}
    </>
  );
};
export default RenderCardImageDetail;
