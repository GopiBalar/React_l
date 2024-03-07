import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cakesNumber: 0,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    sell: (state, action) => {
      state.cakesNumber--;
    },
    restock: (state, action) => {
      state.cakesNumber += action.payload;
    },
  },
});

export const { sell, restock } = cakeSlice.actions;
export default cakeSlice.reducer;
