import React from "react";
import { img_url } from "../API/base_url";

const CardImgCircle = ({ path }) => {
  return (
    <object
      data={`${img_url}${path}`}
      type="image/png"
      className="w-full h-full object-cover rounded-full"
    >
      <img
        className="h-full w-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTht9-qZYmqErdGMhJVbRf7BfhLRGspNWaFnR8nddu3x7Da7nqh23vsG6VWtG_VE9G9kLU&usqp=CAU"
        alt=""
      />{" "}
    </object>
  );
};

export default CardImgCircle;
