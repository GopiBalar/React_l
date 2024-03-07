import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./slices/cakeSlice";

const store = configureStore({
  reducer: { cakes: cakeReducer },
});

export default store;
