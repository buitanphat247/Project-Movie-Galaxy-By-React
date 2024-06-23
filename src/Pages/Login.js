import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../Components/Input";
import Label from "../Components/Label";

const Login = () => {
  return (
    <div className="container-wrapper h-[100vh] laptop:flex tablet:flex tablet:flex-col laptop:flex-row">
      <div className="tablet:w-full tablet:block tablet:h-[50%] laptop:w-[70%] laptop:h-full laptop:border-r-[5px] laptop:border-b-[0px] group cursor-pointer overflow-hidden relative tablet:border-b-[5px] border-blue-500 mobile:hidden">
        <img
          className="h-full w-full object-cover   laptop:group-hover:scale-105 
          laptop:transition-transform laptop:duration-300"
          src={`${process.env.PUBLIC_URL}/img/Banner_login.jpg`}
          alt="Banner Login"
        />
        <div className="bg-black absolute top-0 w-full h-full opacity-50"></div>
      </div>
      <div className="h-full bg-slate-900 w-full flex-1 mobile:flex mobile:items-center mobile:justify-center mobile:px-3">
        <form
          autoComplete="off"
          action=""
          className="mobile:flex mobile:flex-col mobile:gap-y-5  w-full"
        >
          <div>
            <h1 className="text-white text-4xl font-bold text-center">
              Welcome Movies Galaxy
            </h1>
            <h1 className="text-white  mt-3 text-xl  text-center">
              Please enter your detail
            </h1>
          </div>

          <div>
            <Label htmlFor="username" id="username" name="username">
              username
            </Label>
            {/* <input
              type="text"
              className="w-full h-10 bg-white border-2 p-2 rounded-md outline-none border-blue-500"
              placeholder="Enter your username or email..."
            /> */}
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username..."
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="password" id="password" name="password">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password..."
              className="w-full"
            />
          </div>
          {/* <div className="flex justify-between text-white font-bold">
            <div className="flex gap-x-1">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <div>
              <p>Forgor Password</p>
            </div>
          </div> */}
          <button className="bg-black h-[40px] text-white text-xl font-semibold rounded-md">
            Sign in
          </button>

          <NavLink
            to="/"
            className="bg-blue-500 h-[40px] text-white text-xl font-semibold rounded-md flex items-center justify-center"
          >
            Back to Home
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
