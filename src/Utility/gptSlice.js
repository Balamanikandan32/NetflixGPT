import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesNames : null,
    moviesResult : null

  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult : (state,action) => {
      const {moviesNames,moviesResult} =action.payload
      state.moviesNames = moviesNames
      state.moviesResult= moviesResult
    }
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
