import React, { useEffect, useState } from "react";
import SlideBanner from "../BlockBannerr/SlideBanner";
import ListMovies from "../BlockList/ListMovies";
import ListChannel from "../BlockList/ListChannel";
import { getDetail_Movie_Tv } from "../API/fetchMovie";
import slugify from "react-slugify";
import { breakpoints_responsive, data_list_InHome } from "../API/base_data";
import ListNew from "../BlockList/ListNew";
import { getNews } from "../API/fetchNews";

const Home = () => {
  const [dataMovie, setDataMovie] = useState({
    movie: [],
    news: [],
    trending: [],
    loading: true,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataMovie({
          ...dataMovie,
          loading: true,
        });
        let array_data = {};
        await Promise.all(
          data_list_InHome.map(async (item, index) => {
            const data = await getDetail_Movie_Tv({
              url: item.url,
            });
            array_data[slugify(item.title_list)] = data; // Thêm thuộc tính vào object
          })
        );
        const getNewsData = await getNews();
        const getTrendingMovie = await getDetail_Movie_Tv({
          url: "trending/all/day?page=5",
        }); // Gọi hàm getNews từ module fetchNews
        setTimeout(() => {
          setDataMovie({
            movie: array_data,
            news: getNewsData.articles,
            trending: getTrendingMovie,
            loading: false,
          });
        }, 1500);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <SlideBanner
        loading_status={dataMovie.loading}
        data={dataMovie.movie["upcoming"]}
      ></SlideBanner>
      <ListMovies
        data={dataMovie.trending}
        title_list="Trending"
        breakpoints={breakpoints_responsive}
        loading_status={dataMovie.loading}
        type={null}
      ></ListMovies>
      {data_list_InHome.map((item, index) => {
        return (
          <ListMovies
            data={dataMovie.movie[slugify(item.title_list)]}
            title_list={item.title_list}
            breakpoints={item.breakpoints}
            type={item.type}
            loading_status={dataMovie.loading}
          ></ListMovies>
        );
      })}
      <ListNew
        title_list="News movie"
        data={dataMovie.news}
        loading_status={dataMovie.loading}
      ></ListNew>
      <ListChannel title_list="channels"></ListChannel>
    </div>
  );
};

export default Home;
