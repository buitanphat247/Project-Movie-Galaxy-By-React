import React from "react";

const FilterCard = ({ icon }) => {
  return (
    <>
      <div className="laptop:absolute laptop:bg-black laptop:w-full laptop:h-full laptop:top-0 laptop:left-0 laptop:right-0 laptop:bottom-0 laptop:opacity-0 laptop:group-hover:opacity-30 laptop:group-hover:transition-all"></div>
      <div className="laptop:absolute laptop:w-full laptop:h-full laptop:top-0 text-white laptop:opacity-0 laptop:group-hover:opacity-50 laptop:group-hover:transition-all laptop:flex laptop:items-center laptop:justify-center text-5xl mobile:hidden">
        {icon}
      </div>
    </>
  );
};

export default FilterCard;
