import { configureStore } from "@reduxjs/toolkit";

//TODO importing the slices
import userSlice from "../reducers/userReducer";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

export default store;
