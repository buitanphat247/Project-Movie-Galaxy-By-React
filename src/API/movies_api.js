import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Tạo một hàm fetchBaseQuery chứa các header chung và cài đặt khác
const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.themoviedb.org/3/",
  prepareHeaders: (headers) => {
    // Thêm các header chung vào đây
    headers.set("Accept", "application/json");
    headers.set(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzRmOWRhZTViZTRjZGJlNGZjZGU3YzAyMjM4ZDA5NyIsInN1YiI6IjY0ZDg3ZTY1YjZjMjY0MTE1NWYxY2RhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VQQrURB0BKTjZBbt8nXrMZ5bRYaibMrouEyFEDEiIns"
    );
    return headers;
  },
});

// Sử dụng hàm fetchBaseQuery trong createApi
export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: baseQuery, // Sử dụng hàm fetchBaseQuery đã tạo ở trên
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (object) => {
        const { page = "1", language = "", url = "movie/popular" } = object;
        return {
          url: `${url}?language=${language}&page=${page}`,
        };
      },
    }),
    getDetailMovies: builder.query({
      query: (object) => {
        const { url } = object;
        return {
          url: url,
        };
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetDetailMoviesQuery } = movieApi;