import { createSlice } from "@reduxjs/toolkit";
import userData from "../FakeData";

const initialState = [...userData];
// const initialState = { value: userData };

const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // code for add user
      state.value.push(action.payload);
    },

    updateUser: (state, action) => {
      // code for update user
      // state.value = state.value.map((user) =>
      //   user.id === action.payload.id
      //     ? {
      //         ...user,
      //         name: action.payload.name,
      //         username: action.payload.username,
      //       }
      //     : { ...user }
      // );

      // state.map((user) => {
      //   if (user.id === action.payload.id) {
      //     user.name = action.payload.name;
      //     user.username = action.payload.username;
      //   }
      // });

      return state.map((user) =>
        user.id === action.payload.id
          ? {
              ...user,
              name: action.payload.name,
              username: action.payload.username,
            }
          : { ...user }
      );
    },

    deleteUser: (state, action) => {
      // code for delete user
      // state.value = state.value.filter((u) => u.id !== action.payload.id);
      return state.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice;
