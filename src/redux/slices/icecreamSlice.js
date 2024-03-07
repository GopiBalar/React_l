import { createSlice } from "@reduxjs/toolkit";

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: { icrem: 0, cash: 100 },
  reducers: {
    sell: (state, action) => {
      state.icrem--;
      state.cash += 10;
    },
    restock: (state, action) => {
      state.icrem += action.payload;
      const cost = action.payload * 7;
      state.cash -= cost;
    },
  },
});

export const { sell, restock } = icecreamSlice.actions;
export default icecreamSlice.reducer;
