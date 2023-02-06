import { configureStore } from "@reduxjs/toolkit";

// Saga middleware
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "../saga/";

//TODO importing the slices
import userReducer from "../reducers/userReducer";
import jokeReducer from "../reducers/jokeReducer";
import bookReducer from "../reducers/bookReducer";

// TODO
// const sagaMiddleware = createSagaMiddleware();

// TODO Store
const store = configureStore({
  reducer: {
    users: userReducer,
    jokes: jokeReducer,
    books: bookReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// sagaMiddleware.run(rootSaga);
// sagaMiddleware.run(rootSaga);

export default store;
