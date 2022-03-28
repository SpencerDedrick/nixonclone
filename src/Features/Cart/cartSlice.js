import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.splice(state.indexOf(action.payload), 1);
    },
    addQuantity: (state, action) => {
      state[action.payload].quantity++;
    },
    setQuantity: (state, action) => {
      state.splice(action.payload[0], 1, action.payload[1]);
      console.log(current(state));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addQuantity,

  setQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
