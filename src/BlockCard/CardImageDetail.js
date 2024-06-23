import React from "react";
import { img_url } from "../API/base_url";
import CircleProgress from "../Components/CircleProgress";
import FilterCard from "../Components/FilterCard";

const CardImageDetail = ({ poster_path, rating }) => {
  return (
    <div className="relative border-2 border-blue-500 mobile:rounded-md tablet:rounded-xl overflow-hidden mobile:h-[200px] tablet:h-[400px]">
      <img
        className="w-full h-full object-cover laptop:group-hover:scale-105 laptop:transition-transform laptop:duration-300"
        src={`${img_url}/${poster_path}`}
        alt=""
      />
      <div className="absolute top-2 right-2">
        <CircleProgress score={rating}></CircleProgress>
      </div>
      <FilterCard icon={<i class="fa-regular fa-circle-play"></i>}></FilterCard>
    </div>
  );
};

export default CardImageDetail;
