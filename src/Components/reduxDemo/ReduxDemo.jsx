import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restock, sell } from "../../redux/slices/cakeSlice";
import { buy, sale } from "../../redux/slices/icecreamSlice";
import styles from "../../styles/reduxDemo/reduxDemo.module.css";

function ReduxDemo() {
  const cake = useSelector((state) => {
    return state.cakes;
  });

  const iceCream = useSelector((state) => {
    return state.icecream;
  });

  const dispatch = useDispatch();

  function decrement() {
    dispatch(sell());
  }

  function increment() {
    dispatch(restock(1));
  }

  function handleBuy() {
    dispatch(buy());
  }

  function handleSale() {
    dispatch(sale());
  }

  return (
    <>
      <div className={styles.containerOuter}>
        <div className={styles.containerInner}>
          <button onClick={decrement}>-</button>
          <h2>Cakes : {cake.cakesNumber}</h2>
          <button onClick={increment}>+</button>
        </div>
      </div>
      <div className={styles.containerOuter}>
        <div className={styles.containerInner}>
          <button onClick={handleBuy}>Buy</button>
          <h2>IceCream : {iceCream.icecream}</h2>
          <button onClick={handleSale}>Sale</button>
        </div>
      </div>
    </>
  );
}

export default ReduxDemo;
