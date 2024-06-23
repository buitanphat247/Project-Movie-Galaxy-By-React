import React from "react";
import { img_url } from "../API/base_url";
import FilterCard from "../Components/FilterCard";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import slug from "slug";
import { handleScrollTop } from "../hooks/ScrollToTop";
import CircleProgress from "../Components/CircleProgress";

const WrapperImageCardStyled = styled.div`
  @media (min-width: 600px) {
    height: 250px;
  }
`;
const WrapperCardMovie = styled.div`
  @media (min-width: 600px) {
    min-height: 450px;
  }
  @media (min-width: 1024px) {
    min-height: 450px;
  }
`;
const CardMovies = ({
  title,
  overview,
  public_date,
  poster_path,
  type,
  id_movies,
  rating,
}) => {
  const movie_or_tv_path =
    type === "movie"
      ? `/movies/${slug(title, "_")}?id=${id_movies}&type=${type}`
      : `/tv-shows/${slug(title, "_")}?id=${id_movies}&type=${type}`;
  return (
    <WrapperCardMovie
      className={`bg-[#262e39] tablet:flex  mobile:rounded-md overflow-hidden w-full border-2 group laptop:cursor-pointer laptop:relative tablet:rounded-xl flex-col border-blue-500`}
      tabindex="0"
    >
      <NavLink onClick={handleScrollTop} to={movie_or_tv_path}>
        <WrapperImageCardStyled className="relative">
          <object
            data={`${img_url}${poster_path}`}
            type="image/png"
            className="h-full w-full laptop:group-hover:scale-105 laptop:transition-transform laptop:duration-300 object-cover"
          >
            <img
              className="h-full w-full"
              src="https://media.viez.vn/prod/2022/7/11/conan_7_7bda3f7807.jpeg"
              alt=""
            />
          </object>
          <div className="absolute top-2 right-2">
            {/* <RatingStar score={rating}></RatingStar> */}
            <CircleProgress score={rating}></CircleProgress>
          </div>
        </WrapperImageCardStyled>
        <div className="desc-movies-card text-white tablet:flex-1 laptop:p-0 laptop:px-3 laptop:py-2 tablet:p-2 tablet:flex tablet:flex-col tablet:gap-y-2  ">
          <p className="title-movie-card capitalize font-bold text-center mobile:text-base mobile:py-2 tablet:py-0 tablet:text-xl mobile:font-semibold tablet:font-bold">
            <span className="line-clamp-1">{`${title}`}</span>
          </p>
          <p className="language-movie-card laptop:flex laptop:gap-x-2 mobile:hidden tablet:block tablet:text-[14px]">
            <span className="font-semibold">Language: </span>
            <span>English</span>
          </p>
          <p className="release-date-movie-card laptop:flex laptop:gap-x-2 mobile:hidden  tablet:block tablet:text-[14px]">
            <span className="font-semibold ">Release Date: </span>
            <span>{public_date}</span>
          </p>
          <p className="desc-movie-card text-justify line-clamp-3 mobile:hidden  tablet:block tablet:line-clamp-2 tablet:text-sm">
            <span className="line-clamp-3">{`${
              overview !== ""
                ? overview
                : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ad deleniti illo perspiciatis nemo eos voluptates est illum, quidem accusamus facere rerum mollitia? Voluptate quam, natus sapiente error possimus, nesciunt vitae suscipit quia repellendus architecto enim officia reiciendis accusamus tempora beatae illum asperiores molestias corrupti consequuntur? Eius nihil corrupti laboriosam."
            }`}</span>
          </p>
        </div>

        <FilterCard
          icon={<i class="fa-regular fa-circle-play"></i>}
        ></FilterCard>
      </NavLink>
    </WrapperCardMovie>
  );
};

export default CardMovies;
