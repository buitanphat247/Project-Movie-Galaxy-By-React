import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../API/movies_api";
import { newsApi } from "../API/news_api";
import loadingReducer from "./loadingSlice";
import pageReducer from "./pageSlice";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    loading: loadingReducer,
    page: pageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware, newsApi.middleware),
});
