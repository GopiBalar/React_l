import React, { useReducer } from "react";

const initialValue = 0;

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  MULTI_INCREMENT: "multiIncrement",
};

function reducer(count, action) {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return count - 1;
    case ACTIONS.INCREMENT:
      return count + 1;
    case ACTIONS.MULTI_INCREMENT:
      return count + action.payload;
    default:
      return count;
  }
}

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function multiIncrement() {
    dispatch({ type: ACTIONS.MULTI_INCREMENT, payload: 3 });
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={multiIncrement}>+++</button>
    </div>
  );
}

export default UseReducer;
