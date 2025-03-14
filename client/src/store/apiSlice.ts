import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from "../types/movie";

interface MoviesResponse {
  success: boolean;
  data: {
    items: Movie[];
  };
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, void>({
      query: () => "/movies",
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
export default moviesApi;
