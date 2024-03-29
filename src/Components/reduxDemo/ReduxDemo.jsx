import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restock, sell } from "../../redux/slices/cakeSlice";
import styles from "../../styles/reduxDemo/reduxDemo.module.css";
import {
  restock as icecreamRestock,
  sell as icecreamSell,
} from "../../redux/slices/icecreamSlice";
import { fetchUsers } from "../../redux/slices/userSlice";

function ReduxDemo() {
  const cake = useSelector((store) => {
    return store.cakes;
  });

  const icecream = useSelector((store) => {
    return store.icecreams;
  });

  const user = useSelector((store) => {
    return store.users;
  });
  console.log("user", user);
  const dispatch = useDispatch();

  function decrement() {
    dispatch(sell());
  }

  function increment() {
    dispatch(restock(1));
  }

  function decrementIcecream() {
    dispatch(icecreamSell());
  }

  function incrementIcecream() {
    dispatch(icecreamRestock(1));
  }

  console.log("loading", user.loading);
  console.log("error", user.error);
  console.log("user", user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#827717",
          padding: "0.5rem",
          color: "white",
          height: "60px",
        }}
      >
        <h1>Cake & IceCream Shop</h1>
      </div>
      <div className={styles.containerOuter}>
        <div className={styles.containerInner}>
          <button onClick={decrement}>-</button>
          <h2>Cakes : {cake.cakesNumber}</h2>
          <button onClick={increment}>+</button>
        </div>
        <div className={styles.containerInner}>
          <button onClick={decrementIcecream}>-</button>
          <h2>Icecreams : {icecream.icrem}</h2>
          <h2>Cash : ${icecream.cash}</h2>

          <button onClick={incrementIcecream}>+</button>
        </div>
      </div>
    </>
  );
}

export default ReduxDemo;
