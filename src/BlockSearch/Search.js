import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Input from "../Components/Input";
const LiStyles = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Search = () => {
  const renderNavItem = (iconClass, children, to = null) => (
    <LiStyles>
      {to ? (
        <NavLink
          to={to}
          className="bg-[#151515] w-[100px] rounded-md h-full font-bold flex items-center justify-center"
        >
          {children}
        </NavLink>
      ) : (
        <i className={iconClass}></i>
      )}
    </LiStyles>
  );
  return (
    <div className="search-group laptop:flex h-[40px] laptop:gap-x-10">
      <div className="button-search laptop:flex-1 h-full">
        <Input
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          className="w-full h-full rounded-2xl placeholder:text-white bg-transparent text-white"
        ></Input>
      </div>
      <div className="setting-Notification-login mobile:hidden laptop:block">
        <ul className="laptop:flex laptop:gap-x-5 text-white laptop:h-full">
          {renderNavItem("fa-solid fa-gear")}
          {renderNavItem("fa-regular fa-bell")}
          {renderNavItem(null, "Login", "login")}
        </ul>
      </div>
    </div>
  );
};

export default Search;
