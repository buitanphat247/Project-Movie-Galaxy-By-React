import React from "react";
import CardImgCircle from "./CardImgCircle";
import RatingStar from "../Components/RatingStar";
import ShowHideText from "../Components/ShowHideText";

const CardReview = ({ name, rating, created_at, content_review, avt_path }) => {
  const date =
    typeof created_at === "string" && created_at
      ? created_at.split("T")[0]
      : "Date not available";
  return (
    <div className="flex gap-x-5 text-white">
      <div className="w-[50px] h-[50px] rounded-full">
        <CardImgCircle path={avt_path}></CardImgCircle>
      </div>
      <div className="flex-1">
        <div className="flex gap-x-3">
          <h1 className="font-semibold">{name}</h1>
          <p>{date}</p>
        </div>
        <div>
          <RatingStar score={rating} size={20}></RatingStar>
        </div>
        <ShowHideText content={content_review}></ShowHideText>
      </div>
    </div>
  );
};

export default CardReview;
