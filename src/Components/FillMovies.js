import React from "react";
import styled from "styled-components";
import { dataFill_InFillMovies } from "../API/base_data";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import slug from "slug";

const SelectStyled = styled.select`
  color: white;
  border-radius: 5px;
  text-transform: capitalize;
  height: 40px;
  outline: none;
  background: #151515;
  padding: 0 10px;

  @media (min-width: 320px) {
    font-size: 14px;
    padding: 0px;
    height: 30px;
  }
`;

const FillMovies = ({ value_select_defaut, media_type }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (media_type === "movie")
      navigate(`/movies?page=1&media=${slug(data.media, "_")}&search=true`);
    else
      navigate(`/tv-shows?page=1&media=${slug(data.media, "_")}&search=true`);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mobile:flex mobile:flex-wrap laptop:gap-x-5 tablet:gap-x-3 tablet:gap-y-2 tablet:mt-5 mobile:mt-3 mobile:gap-2"
      >
        <SelectStyled
          {...register("media")}
          defaultValue={value_select_defaut || "discover"}
        >
          {media_type === "movie"
            ? dataFill_InFillMovies.status_film.movie.map((item, index) => (
                <option key={index} value={slug(item.name, "_")}>
                  {item.name}
                </option>
              ))
            : dataFill_InFillMovies.status_film.tv.map((item, index) => (
                <option key={index} value={slug(item.name, "_")}>
                  {item.name}
                </option>
              ))}
        </SelectStyled>
        <button
          type="submit"
          className="bg-[#151515] text-white font-bold h-[40px] px-[10px] rounded-[5px] mobile:text-[12px] mobile:px-2 mobile:h-[30px] mobile:rounded-[5px]"
        >
          Lọc phim
        </button>
      </form>
    </div>
  );
};

export default FillMovies;
