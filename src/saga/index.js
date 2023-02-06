import { take } from "redux-saga/effects";
import { addBook } from "../reducers/bookReducer";

export default function* () {
  yield take(addBook().type);
  console.log("Root of Saga Middleware");
}
