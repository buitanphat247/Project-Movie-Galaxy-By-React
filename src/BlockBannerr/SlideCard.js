import React from "react";
// import styled from "styled-components";
import { img_url } from "../API/base_url";

const SlideCard = ({ backdrop }) => {
  return (
    <div className="banner overflow-hidden laptop:flex-1">
      <img
        className="w-full h-full object-cover"
        src={`${img_url}${backdrop}`}
        alt=""
      />
    </div>
  );
};

export default SlideCard;
