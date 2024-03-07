import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restock, sell } from "../../redux/slices/cakeSlice";
import styles from "../../styles/reduxDemo/reduxDemo.module.css";

function ReduxDemo() {
  const cake = useSelector((state) => {
    return state.cakes;
  });

  const dispatch = useDispatch();

  function decrement() {
    dispatch(sell());
  }

  function increment() {
    dispatch(restock(1));
  }

  return (
    <div className={styles.containerOuter}>
      <div className={styles.containerInner}>
        <button onClick={decrement}>-</button>
        <h2>Cakes : {cake.cakesNumber}</h2>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default ReduxDemo;
