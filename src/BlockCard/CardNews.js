import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FilterCard from "../Components/FilterCard";
const WrapperImageCardStyled = styled.div`
  @media (min-width: 320px) {
    height: 200px;
  }
  @media (min-width: 1024px) {
    height: 250px;
  }
`;
const CardNews = ({ title, image, date, overview, time, path }) => {
  return (
    <NavLink to={path} target="_blank" rel="noopener noreferrer">
      <div className="relative text-white border-2 border-blue-500 p-2 rounded-md bg-[#262e39] laptop:cursor-pointer group">
        <WrapperImageCardStyled>
          <object
            data={image}
            type="image/jpg"
            className="w-full h-full object-cover "
          >
            <img
              className="h-full w-full object-cover"
              src="https://image.talentnetwork.vn/cdytedongnai///news/2023/03/08/1678270264_news-dice.jpg"
              alt=""
            />{" "}
          </object>
        </WrapperImageCardStyled>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold line-clamp-1 tablet:text-xl">
            {title}
          </h1>
          <p className="text-justify text-sm line-clamp-6 mobile:text-[12px] tablet:text-[14px]">
            {overview}
          </p>
          <div>
            <p className="flex gap-x-1 mobile:text-[12px] tablet:text-[14px]">
              <span className="font-semibold">Released:</span>
              <span>{date}</span>
              <span>{time}</span>
            </p>
          </div>
        </div>
        <FilterCard icon={<i class="fa-regular fa-eye"></i>}></FilterCard>
      </div>
    </NavLink>
  );
};

export default CardNews;
