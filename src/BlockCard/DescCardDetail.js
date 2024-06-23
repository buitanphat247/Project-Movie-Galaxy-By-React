import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { convertToHoursAndMinutes } from "../hooks/MinuteToHour";
import RatingStar from "../Components/RatingStar";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ShowHideText from "../Components/ShowHideText";
import BlockCaster from "../Blocks/BlockCaster";
import TopHeaderList from "../Components/TopHeaderList";
const LiStyled = styled.li`
  background: RGB(197 100 126);
`;
const LiDescStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: end;
`;
const SpanStyled = styled.span`
  font-weight: 600;
  text-transform: capitalize;
`;
const DescCardDetail = ({ dataMovie, media_type }) => {

  return (
    <div className="tablet:flex-1 overflow-hidden mobile:flex mobile:flex-col laptop:gap-y-5 mobile:gap-y-3 mobile:px-3 tablet:p-0 mobile:mt-3 laptop:mt-0">
      <TitleMovie dataMovie={dataMovie}></TitleMovie>
      <GenresMovie dataMovie={dataMovie}></GenresMovie>
      <Description dataMovie={dataMovie}></Description>
      <ListInforMovie dataMovie={dataMovie}></ListInforMovie>
      {media_type !== "movie" && (
        <div>
          <TopHeaderList
            title_list="episode"
            have_titleList={false}
          ></TopHeaderList>
          <ul className="flex flex-wrap gap-3 mt-3">
            {dataMovie.loading === false
              ? new Array(44).fill().map((_, index) => (
                  <li
                    className="font-bold text-lg bg-[#6b7280] w-[50px] h-[40px] flex items-center justify-center rounded-md"
                    key={index}
                  >
                    {index + 1}
                  </li>
                ))
              : new Array(44).fill("").map((item, index) => {
                  return (
                    <div className="w-[50px] h-[40px] rounded-md">
                      <Skeleton
                        key={index}
                        className="w-full h-full"
                      ></Skeleton>
                    </div>
                  );
                })}
          </ul>
        </div>
      )}
      <BlockCaster dataMovie={dataMovie}></BlockCaster>
    </div>
  );
};
const TitleMovie = ({ dataMovie }) => {
  return (
    <h1 className="font-bold mobile:text-2xl uppercase flex flex-col mobile:gap-y-2 tablet:gap-y-0">
      <div
        className="mobile:flex mobile:flex-col tablet:flex-row mobile:gap-2 mobile:items-center
        tablet:items-start"
      >
        {dataMovie.loading === false ? (
          <div>
            {dataMovie.dataDetail.movie_detail?.title ||
              dataMovie.dataDetail.movie_detail?.original_name}
          </div>
        ) : (
          <div className="mobile:w-full tablet:w-1/2">
            <Skeleton className="mobile:w-full"></Skeleton>
          </div>
        )}
      </div>
      <RatingMovie dataMovie={dataMovie}></RatingMovie>
    </h1>
  );
};

const RatingMovie = ({ dataMovie }) => {
  return (
    <>
      {dataMovie.loading === false ? (
        <div className="mobile:flex mobile:items-center mobile:justify-center tablet:justify-start">
          <RatingStar score={dataMovie.dataDetail.movie_detail?.vote_average} />
        </div>
      ) : (
        <div className="mobile:w-1/2 tablet:w-1/6">
          <Skeleton className="mobile:w-[50%]"></Skeleton>
        </div>
      )}
    </>
  );
};

const Description = ({ dataMovie }) => {
  return (
    <p className="text-justify">
      <TopHeaderList
        title_list="description"
        have_titleList={false}
      ></TopHeaderList>
      <span>
        {dataMovie.loading === false ? (
          <ShowHideText content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur felis vitae dictum consequat. Pellentesque aliquam urna et feugiat fringilla. Etiam a nulla orci. Aliquam lacinia porttitor tristique. Nullam eget congue ligula. Maecenas rhoncus nibh ut ante viverra, quis bibendum ipsum porta. Praesent in purus ut ex gravida viverra. In id maximus tellus. Sed condimentum mauris nec dignissim facilisis. Sed a blandit metus, vel eleifend est. Nullam rhoncus quis dui placerat pharetra. Aliquam lobortis lorem et dui viverra interdum. Maecenas arcu ipsum, mattis ut neque eu, varius vehicula ipsum. Aliquam eu massa facilisis, pretium lorem sed, ultricies dui. Maecenas efficitur libero vitae arcu ornare egestas ut molestie dolor. Nam eleifend hendrerit molestie. Proin facilisis fringilla justo, eget pharetra lectus euismod et. Integer feugiat ipsum mauris, vitae tincidunt tellus varius at. Donec tortor risus, venenatis non ligula ut, ornare iaculis urna. Phasellus vitae consequat risus. Phasellus eu eros arcu. Vestibulum non tellus tellus. Maecenas et egestas turpis. Mauris commodo, mauris vel lacinia accumsan, odio elit scelerisque diam, at imperdiet quam velit in neque. Maecenas suscipit lacus vel ligula ultricies tincidunt. Morbi leo velit, interdum sed pretium ultrices, volutpat eget tortor. Sed at enim dolor. Donec erat mauris, vestibulum et augue eget, convallis vulputate enim. Suspendisse faucibus malesuada ante et lobortis. Vivamus egestas, ipsum accumsan malesuada viverra, arcu neque condimentum mauris, quis venenatis tortor orci quis erat. Phasellus pellentesque justo eu ex laoreet, ac euismod justo egestas. Aliquam quis mi eget lacus placerat dignissim quis nec odio. Donec feugiat diam in ante placerat, non dignissim massa auctor. Nullam ac purus a justo tristique pellentesque. Vestibulum quis velit purus. Fusce ut est aliquet dolor venenatis vulputate. Nullam efficitur nisi vitae convallis mattis. Mauris sapien odio, rhoncus eget accumsan vitae, efficitur vel ligula."></ShowHideText>
        ) : (
          <Skeleton count={5}></Skeleton>
        )}
      </span>
    </p>
  );
};

const GenresMovie = ({ dataMovie }) => {
  return (
    <ul className="mobile:flex mobile:flex-wrap mobile:gap-2">
      {dataMovie.loading === false
        ? Array.isArray(dataMovie.dataDetail.movie_detail?.genres) &&
          dataMovie.dataDetail.movie_detail?.genres.map((item, index) => {
            return (
              <LiStyled
                key={index}
                className="text-base px-2 rounded-sm mobile:text-sm"
              >
                {item.name}
              </LiStyled>
            );
          })
        : new Array(4).fill("").map((item, index) => {
            return (
              <div className="block">
                <Skeleton height={20} width={100}></Skeleton>
              </div>
            );
          })}
    </ul>
  );
};
const ListInforMovie = ({ dataMovie }) => {
  const renderListDetail = (label, content, skeletonWidth = 150) => (
    <LiDescStyled className="gap-x-1">
      <SpanStyled className="text-lg">{label}</SpanStyled>
      <span className="flex-1">
        {dataMovie.loading === false ? (
          content
        ) : (
          <Skeleton width={skeletonWidth}></Skeleton>
        )}
      </span>
    </LiDescStyled>
  );
  return (
    <ul className="flex flex-row flex-wrap gap-x-8 gap-y-3">
      {dataMovie.dataDetail.movie_detail?.release_date ||
      dataMovie.dataDetail.movie_detail?.first_air_date
        ? renderListDetail(
            "Released date:",
            `${
              dataMovie.dataDetail.movie_detail?.release_date ||
              dataMovie.dataDetail.movie_detail?.first_air_date
            } (${dataMovie.dataDetail.movie_detail?.origin_country[0]})`
          )
        : null}

      {dataMovie.dataDetail.movie_detail?.production_countries &&
      dataMovie.dataDetail.movie_detail?.production_countries.length > 0
        ? renderListDetail(
            "Country:",
            `${dataMovie.dataDetail.movie_detail?.production_countries[0]?.name}`
          )
        : null}

      {dataMovie.dataDetail.movie_detail?.vote_count
        ? renderListDetail(
            "Vote count:",
            <>{dataMovie.dataDetail.movie_detail?.vote_count}</>
          )
        : null}

      {dataMovie.dataDetail.movie_detail?.runtime ||
      dataMovie.dataDetail.movie_detail?.episode_run_time[0] ||
      dataMovie.dataDetail.movie_detail?.last_episode_to_air.runtime
        ? renderListDetail(
            "Duration:",
            ` ${convertToHoursAndMinutes(
              dataMovie.dataDetail.movie_detail?.runtime ||
                dataMovie.dataDetail.movie_detail?.episode_run_time[0] ||
                dataMovie.dataDetail.movie_detail?.last_episode_to_air.runtime
            )}`
          )
        : null}

      {Array.isArray(dataMovie.dataDetail.movie_detail?.created_by) &&
      dataMovie.dataDetail.movie_detail?.created_by.length > 0
        ? renderListDetail(
            "Created by:",
            dataMovie.dataDetail.movie_detail?.created_by
              .map((item) => item.name)
              .join(", ")
          )
        : null}

      {Array.isArray(dataMovie.dataDetail.movie_detail?.spoken_languages) &&
      dataMovie.dataDetail.movie_detail?.spoken_languages.length > 0
        ? renderListDetail(
            "Language:",
            dataMovie.dataDetail.movie_detail?.spoken_languages
              .map((item) => item.name)
              .join(", ")
          )
        : null}
    </ul>
  );
};
export default DescCardDetail;
