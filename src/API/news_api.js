import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://real-time-news-data.p.rapidapi.com/",
  prepareHeaders: (headers) => {
    headers.set(
      "x-rapidapi-key",
      "253eff67b9msha750d86c9b39780p12dc71jsn2147d1feb55c"
    );
    headers.set("x-rapidapi-host", "real-time-news-data.p.rapidapi.com");
    return headers;
  },
});

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({
        url = "/top-headlines",
        limit = "",
        country = "",
        language = "",
        query_news = "/movies",
      }) => ({
        url: `${url}?query=${query_news}&limit=${limit}&country=${country}&language=${language}`,
      }),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
