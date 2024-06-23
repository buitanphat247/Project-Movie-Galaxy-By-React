import React from "react";
import CardImgCircle from "./CardImgCircle";

const CardCredits = ({ name, charactor, profile_path }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[100px] h-[100px] rounded-full">
        <CardImgCircle path={profile_path}></CardImgCircle>
      </div>
      <div>
        <h1 className="name_credits text-center font-semibold text-white line-clamp-1">
          {name}
        </h1>
        {/* <h2 className="role_credits text-center">{charactor}</h2> */}
      </div>
    </div>
  );
};

export default CardCredits;
