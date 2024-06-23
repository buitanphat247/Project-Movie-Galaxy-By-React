import React from "react";
import ReactPlayer from "react-player";
import { ytb_url } from "../API/base_url";

const CardYoutube = ({ key_ytb }) => {
  return (
    <div className="h-[350px]">
      <ReactPlayer
        url={`${ytb_url}${key_ytb}`}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export default CardYoutube;
