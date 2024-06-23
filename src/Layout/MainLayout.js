import React, { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Search from "../BlockSearch/Search";
import Footer from "./Footer";
import ScrollButton from "../Components/ScrollButton";

const MainLayout = () => {
  const [ActiveMenu, setActiveMenu] = useState(false);
  const handleActiveMenu = () => {
    setActiveMenu(!ActiveMenu);
  };
  return (
    <div>
      <div
        className={`container-main laptop:grid laptop:grid-cols-6 w-full ${
          ActiveMenu ? "h-[100vh] overflow-y-hidden" : "min-h-[100vh]"
        }`}
      >
        <div className="laptop:col-span-1 laptop:sticky laptop:h-[100vh] laptop:bottom-0 laptop:top-0">
          <SideBar handleClick={handleActiveMenu} active={ActiveMenu}></SideBar>
        </div>
        <div className="container-left laptop:flex-1 laptop:col-span-5">
          <div className="tablet:p-5 mobile:px-3 mobile:py-5">
            <Search></Search>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      </div>
      <ScrollButton></ScrollButton>
    </div>
  );
};

export default MainLayout;
