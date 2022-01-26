import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return fetch("https://sd-watch-shop-api.herokuapp.com/watches").then(
      (response) => response.json()
    );
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
    status: null,
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.value = payload;
      state.status = "success";
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default productsSlice.reducer;
