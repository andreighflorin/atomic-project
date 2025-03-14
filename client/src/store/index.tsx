import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import moviesApi from "./apiSlice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
