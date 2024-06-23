import React from "react";
import ShowMoreText from "react-show-more-text";

const ShowHideText = ({ content }) => {
  return (
    <ShowMoreText
      /* Default options */
      lines={4}
      more="Show more"
      less="Show less"
      className="content-css w-full text-justify"
      anchorClass="show-more-less-clickable"
      expanded={false}
      truncatedEndingComponent={"... "}
    >
      {content}
    </ShowMoreText>
  );
};

export default ShowHideText;
