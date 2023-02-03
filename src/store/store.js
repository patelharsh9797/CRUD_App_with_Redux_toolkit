import { configureStore } from "@reduxjs/toolkit";

//TODO importing the slices
import userSlice from "../reducers/userReducer";
import jokeSlide from "../reducers/jokeReducer";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    jokes: jokeSlide.reducer,
  },
});

export default store;
