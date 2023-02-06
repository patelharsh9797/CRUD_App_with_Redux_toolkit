import { createSlice } from "@reduxjs/toolkit";
import userData from "../FakeData";

import { nanoid } from "nanoid";

const initialState = [...userData];
// const initialState = { value: userData };

const userReducer = createSlice({
  name: "USER",
  initialState,
  reducers: {
    addUser: {
      reducer: (state, action) => [action.payload, ...state],
      prepare: (value) => ({
        payload: { ...value, id: nanoid(), date: new Date() },
      }),
    },

    updateUser: (state, action) =>
      state.map((user) =>
        user.id === action.payload.id
          ? {
              ...user,
              name: action.payload.name,
              username: action.payload.username,
            }
          : { ...user }
      ),

    deleteUser: (state, action) =>
      state.filter((user) => user.id !== action.payload.id),
  },
});

export const { addUser, updateUser, deleteUser } = userReducer.actions;

export default userReducer.reducer;
