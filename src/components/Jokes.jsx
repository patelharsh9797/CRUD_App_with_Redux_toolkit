import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getJoke } from "../reducers/jokeReducer";

const Jokes = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    data: jokeData,
    error,
  } = useSelector((state) => state.jokes);

  useEffect(() => {
    dispatch(getJoke());
  }, []);

  return (
    <div>
      <h1>Jokes with Redux Toolkit</h1>
      <button disabled={isLoading} onClick={() => dispatch(getJoke())}>
        {!isLoading ? "New Joke" : "joking..."}
      </button>
      {jokeData ? <h2>Joke Found : {jokeData.value}</h2> : <h2>loading...</h2>}
    </div>
  );
};

export default Jokes;
