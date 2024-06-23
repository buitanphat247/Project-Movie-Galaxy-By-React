import React, { Suspense } from "react";
import "./CSS/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import News from "./Pages/News";
import Casters from "./Pages/Casters";

// Lazy load components
const Home = React.lazy(() => import("./Pages/Home"));
const Movies = React.lazy(() => import("./Pages/Movies"));
const Login = React.lazy(() => import("./Pages/Login"));
const Detail = React.lazy(() => import("./Pages/Detail"));

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        limit={1}
      />
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/movies"
                element={<Movies url={"/discover/movie"} type="movie" />}
              />
              <Route path="/movies/:movieParams" element={<Detail />} />
              <Route
                path="/tv-shows"
                element={<Movies url={"discover/tv"} type="tv" />}
              />
              <Route path="/tv-shows/:tvShowId" element={<Detail />} />
              <Route path="/news" element={<News />} />
              <Route path="/caters" element={<Casters />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
