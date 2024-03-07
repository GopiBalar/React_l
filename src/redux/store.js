import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./slices/cakeSlice";
import icecreamReducer from "./slices/icecreamSlice";

const store = configureStore({
  reducer: { cakes: cakeReducer, icecream: icecreamReducer },
});

export default store;
