import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getJoke = createAsyncThunk("JOKE/getJoke", async () => {
  let res = await fetch("https://api.chucknorris.io/jokes/random");
  let data = await res.json();
  return data;
});

const initialState = { isLoading: false, data: null, error: null };

const jokeSlide = createSlice({
  name: "JOKE",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getJoke.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getJoke.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getJoke.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// export const { getJoke } = jokeSlide.actions;

export default jokeSlide;
