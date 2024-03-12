import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./slices/cakeSlice";
import icecreamReducer from "./slices/icecreamSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    cakes: cakeReducer,
    icecreams: icecreamReducer,
    users: userReducer,
  },
});

export default store;
