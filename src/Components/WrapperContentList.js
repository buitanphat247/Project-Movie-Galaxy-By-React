import React from "react";

const WrapperContentList = ({ children, addClass }) => {
  return <div className={`mobile:mt-3 ${addClass}`}>{children}</div>;
};

export default WrapperContentList;
