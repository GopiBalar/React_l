import React from "react";
import { restock, sell } from "../../redux/slices/cakeSlice";
import { useDispatch, useSelector } from "react-redux";

function ReduxDemo() {
  const cake = useSelector((state) => {
    return state.cake;
  });

  const dispatch = useDispatch();

  function increment() {
    dispatch(restock(1));
  }

  function decrement() {
    dispatch(sell(1));
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      <p>{cake.numberOfCakes}</p>
      <button onClick={decrement}>- </button>
    </div>
  );
}

export default ReduxDemo;
