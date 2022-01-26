import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/Cart/cartSlice";
import productsReducer from "../Features/Products/productsSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});
