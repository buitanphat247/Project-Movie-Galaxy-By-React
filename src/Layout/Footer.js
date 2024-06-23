import React from "react";
import styled from "styled-components";
const H1Styled = styled.h1`
  font-weight: 600;
  font-size: 24px;
  padding-bottom: 10px;
`;
const LiSTyled = styled.li`
  text-transform: capitalize;
  padding: 5px 0;
`;

const Footer = () => {
  return (
    <div className=" bg-[#22222a] border-t-2 border-[#6b7280] text-white">
      <div className="laptop:grid laptop:grid-cols-3  laptop:px-40 laptop:pt-5 laptop:gap-x-10 tablet:px-5 tablet:py-5 mobile:px-3 mobile:py-5">
        <div>
          <H1Styled>Movies Galaxy</H1Styled>
          <p className="text-justify">
            <b>Movies Galaxy </b>- Trang web xem phim trực tuyến miễn phí chất
            lượng cao với giao diện trực quan, tốc độ tải trang nhanh, cùng kho
            phim với hơn 10.000+ phim mới, phim hay, luôn cập nhật phim nhanh,
            hứa hẹn sẽ đem lại phút giây thư giãn cho bạn.
          </p>
        </div>
        <div className="mobile:flex mobile:gap-x-10 mobile:flex-wrap laptop:flex-nowrap">
          <div>
            <H1Styled>Category</H1Styled>
            <ul>
              <LiSTyled>Movies</LiSTyled>
              <LiSTyled>Tv Show</LiSTyled>
              <LiSTyled>Series</LiSTyled>
              <LiSTyled>Favourite</LiSTyled>
              <LiSTyled>Trailer</LiSTyled>
            </ul>
          </div>
          <div>
            <H1Styled>Support</H1Styled>
            <ul>
              <LiSTyled>About us</LiSTyled>
              <LiSTyled>Help center</LiSTyled>
              <LiSTyled>Private Publicy</LiSTyled>
              <LiSTyled>FAQ</LiSTyled>
            </ul>
          </div>
          <div className="mobile:flex laptop:flex-col laptop:gap-y-5 mobile:flex-row mobile:gap-x-10 mobile:flex-wrap">
            <div>
              <H1Styled>Contact</H1Styled>
              <ul className="laptop:flex laptop:gap-5 laptop:text-2xl">
                <LiSTyled>
                  <i class="fa-brands fa-facebook "></i>
                </LiSTyled>
                <LiSTyled>
                  <i class="fa-brands fa-twitter"></i>
                </LiSTyled>
                <LiSTyled>
                  <i class="fa-regular fa-envelope"></i>
                </LiSTyled>
              </ul>
            </div>
            <div>
              <H1Styled>Subscriptions</H1Styled>
              <input
                type="text"
                placeholder="Enter your Email"
                className="p-2 rounded-md outline-none border-2 border-[#6b7280]
              bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center border-t-2  border-[#6b7280]">
        © 2024 Movies Galaxy. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
