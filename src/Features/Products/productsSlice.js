import { createSlice } from "@reduxjs/toolkit";
import products from "../../Constants/Products";

const initialState = { ...products };

const productsSlice = createSlice({
  name: "products",
  initialState,
});

export default productsSlice.reducer;
