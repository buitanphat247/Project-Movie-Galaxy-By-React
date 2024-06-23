import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";
import { toast } from "react-toastify";
import debounce from "lodash.debounce";
import { ListToRoute_InSidebar } from "../API/base_data";
import { handleScrollTop } from "../hooks/ScrollToTop";

const Li = styled.li`
  display: flex;
  gap: 10px;
  border: 2px solid transparent;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0 20px;
  @media (min-width: 320px) {
    font-size: 14px;
    height: 40px;
  }
    @media (min-width: 1024px) {
      height: 40px;
      font-size: 16px;
    }
  }
`;
const navLinkClass = ({ isActive }) => {
  return isActive
    ? "nav-link activated laptop:bg-gray-500 laptop:rounded-md border-2 border-transparent mobile:bg-gray-500 capitalize"
    : "nav-link notactive border-2 border-transparent laptop:hover:border-gray-500 mobile:rounded-md capitalize";
};
const SideBar = ({ handleClick, active }) => {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const menuVariants = {
    hidden: {
      x: "-110%",
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const handleDebounceShowToast = debounce(() => {
    toast.info("Tính năng đang phát triển");
  }, 500);
  return (
    <div className="side-bar laptop:border-r-2 border-gray-500 laptop:px-5 laptop:h-full">
      <div className="mobile:relative">
        <div className="title laptop:text-2xl text-center font-bold uppercase py-5 text-white border-b-2 tablet:text-3xl mobile:text-2xl mobile:flex mobile:justify-between mobile:px-5">
          <span className="laptop:hidden tablet:block" onClick={handleClick}>
            <i class="fa-solid fa-bars"></i>
          </span>
          <h1>Movies Galaxy</h1>
        </div>

        <motion.div
          className="menu text-white tablet:w-[50%] mobile:w-[100%] tablet:border-r-2 mobile:absolute mobile:z-50 mobile:bg-[#22222a] 
          mobile:top-full mobile:h-[100vh] laptop:sticky laptop:w-[100%] laptop:border-none laptop:right-0"
          variants={menuVariants}
          initial={isLaptop ? "visible" : "hidden"}
          animate={isLaptop ? "visible" : active ? "visible" : "hidden"}
        >
          <ul className="mobile:flex mobile:flex-col mobile:gap-y-5 mobile:justify-around mobile:mt-5">
            {ListToRoute_InSidebar.slice(0, 5).map(({ path, name, icon }) => {
              return (
                <NavLink
                  onClick={handleScrollTop}
                  to={path}
                  className={navLinkClass}
                  key={path}
                >
                  <Li>
                    <span>{icon}</span>
                    <span>{name}</span>
                  </Li>
                </NavLink>
              );
            })}
          </ul>
          <ul className="mobile:flex mobile:flex-col mobile:gap-y-5 mobile:justify-around mobile:mt-5 border-t-2 border-[#6b7280] pt-5">
            {ListToRoute_InSidebar.slice(5, 10).map(({ path, name, icon }) => {
              if (path === "/favourite") {
                return (
                  <div
                    onClick={handleDebounceShowToast}
                    className="capitalize nav-link notactive border-2 border-transparent laptop:hover:border-gray-500 mobile:rounded-md laptop:cursor-pointer"
                    key={path}
                  >
                    <Li>
                      <span>{icon}</span>
                      <span>{name}</span>
                    </Li>
                  </div>
                );
              } else {
                return (
                  <NavLink
                    onClick={handleScrollTop}
                    to={path}
                    className={navLinkClass}
                    key={path}
                  >
                    <Li>
                      <span>{icon}</span>
                      <span>{name}</span>
                    </Li>
                  </NavLink>
                );
              }
            })}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SideBar;
