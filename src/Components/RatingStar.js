import React from "react";
import ReactStars from "react-rating-stars-component";

const RatingStar = ({ score, size = 30 }) => {
  const starRating = score / 2; // Chuyển đổi điểm số từ thang điểm 10 sang thang điểm 5

  return (
    <ReactStars
      count={5}
      value={starRating}
      edit={false} // Không cho phép chỉnh sửa
      size={size}
      isHalf={true} // Cho phép hiển thị nửa sao
      activeColor="#ffd700"
    />
  );
};

export default RatingStar;
