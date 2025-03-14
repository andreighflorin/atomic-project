import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../types/movie";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type ErrorType = FetchBaseQueryError | string | null;

interface DataState {
  data: Movie[];
  searchWord: string;
  genre: number;
  loading: boolean;
  error: ErrorType;
}

const initialState: DataState = {
  data: [],
  searchWord: "",
  genre: 0,
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSearchWord: (state, action) => {
      state.searchWord = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<ErrorType>) => {
      state.error = action.payload;
    },
  },
});

export const { setData, setSearchWord, setGenre, setLoading, setError } =
  dataSlice.actions;

export default dataSlice.reducer;
