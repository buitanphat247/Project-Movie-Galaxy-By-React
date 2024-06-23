import React, { useEffect, useState } from "react";
import { getNews } from "../API/fetchNews";
import styled from "styled-components";
import CardNews from "../BlockCard/CardNews";
import Skeleton from "react-loading-skeleton";
const GridStyled = styled.div`
  display: grid;
  @media (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const News = () => {
  const [newsData, setNewsData] = useState({
    data: {},
    loading: true,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setNewsData({
          ...newsData.data,
          loading: true,
        });
        const getNewsData = await getNews(); // Gọi hàm getNews từ module fetchNews
        setTimeout(() => {
          setNewsData({
            data: {
              news: getNewsData,
            },
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
    <div className="container-movies-main laptop:mt-5">
      <GridStyled className="tablet:mt-5 mobile:mt-3 mobile:gap-2">
        {newsData.loading === false
          ? Array.isArray(newsData.data.news?.articles?.results) &&
            newsData.data.news?.articles?.results.map((item, index) => {
              return (
                <CardNews
                  title={item.title}
                  date={item.date}
                  overview={item.body}
                  image={item.image}
                  time={item.time}
                  path={item.url}
                ></CardNews>
              );
            })
          : new Array(24).fill("").map((item, index) => {
              return <Skeleton className="h-[450px]"></Skeleton>;
            })}
      </GridStyled>
    </div>
  );
};

export default News;
