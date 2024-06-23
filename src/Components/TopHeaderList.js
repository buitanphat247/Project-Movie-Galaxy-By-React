import React from "react";
import { useNavigate } from "react-router-dom";
import slug from "slug";
import styled from "styled-components";
import { handleScrollTop } from "../hooks/ScrollToTop";
const TitleListCardStyled = styled.p`
  color: white;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 20px;
`;
const TopHeaderList = ({ title_list, have_titleList = true, type }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    handleScrollTop();
    if (type === "movie")
      navigate(`/movies?page=1&media=${slug(title_list, "_")}&search=true`);
    else if (type === "tv")
      navigate(`/tv-shows?page=1&media=discover&search=true`);
    else if (type === "news") navigate("news");

    // /movies?page=1&media=discover&search=true
  };
  return (
    <div className="list-card-hearder mobile:flex mobile:justify-between">
      <TitleListCardStyled className="title-list-card">
        {title_list}
      </TitleListCardStyled>
      {have_titleList === true && (
        <button onClick={handleClick}>
          <TitleListCardStyled className="see-all-movies laptop:hover:underline">
            See more
          </TitleListCardStyled>
        </button>
      )}
    </div>
  );
};

export default TopHeaderList;
