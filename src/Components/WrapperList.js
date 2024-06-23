import React from "react";

const WrapperList = ({ children }) => {
  return (
    <div className="mobile:mt-3 bg-[#121733] laptop:px-5 mobile:py-3 mobile:px-3 tablet:rounded-xl mobile:rounded-md ">
      {children}
    </div>
  );
};

export default WrapperList;
