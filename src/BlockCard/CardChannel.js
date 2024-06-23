import React from "react";

const CardChannel = ({ src }) => {
  return (
    <div className="group" tabindex="0">
      <img
        className="w-full h-full rounded-xl border-2 border-purple-950 cursor-pointer laptop:transition-transform laptop:duration-300 laptop:group-hover:scale-105 mobile:rounded-md"
        src={`${src}`}
        alt=""
      />
    </div>
  );
};

export default CardChannel;
