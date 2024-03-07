import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  icecream: 0,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    buy: (state, action) => {
      state.icecream++;
    },
    sale: (state, action) => {
      state.icecream--;
    },
  },
});

export const { buy, sale } = icecreamSlice.actions;
export default icecreamSlice.reducer;
