import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getJoke = createAsyncThunk("JOKE/getJoke", async () => {
  let res = await fetch("https://api.chucknorris.io/jokes/random").catch(
    (err) => err
  );
  let data = await res.json();

  return data;
});

const initialState = {
  isLoading: false,
  data: null,
  error: null,
  isError: null,
};

const jokeReducer = createSlice({
  name: "JOKE",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getJoke.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getJoke.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        // state.isError = false;
      })
      .addCase(getJoke.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isError = true;
      });
  },
});

// export const { getJoke } = jokeReducer.actions;

export default jokeReducer.reducer;
