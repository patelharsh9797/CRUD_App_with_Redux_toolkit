import { createReducer, createSlice } from "@reduxjs/toolkit";
// import { addBook, updateBook, deleteBook } from "../actions/bookAction";

// console.log(updateBook("update kar raha hu rukja"));

// const bookReducer = (state = [], action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

const initialState = {
  books: [],
};

// const bookReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(addBook, (state, action) => {
//       state.books.push(action.payload);
//     })
//     .addCase(deleteBook, (state, action) => {
//       state.books = state.books.filter((book) => book.id !== action.payload.id);
//     });
//   // .addCase(updateBook, (state, (state,action)=>));
// });

const bookReducer = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    // addBook: {
    //   reducer: (state, action) => {
    //     state.books.push(action.payload);
    //   },
    //   // prepare: (value) => {
    //   //   return {
    //   //     payload: {
    //   //       ...value,
    //   //       date: new Date(),
    //   //     },
    //   //   };
    //   // },
    //   prepare: (value) => ({ payload: { ...value, date: new Date() } }),
    // },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, deleteBook } = bookReducer.actions;
export default bookReducer.reducer;
