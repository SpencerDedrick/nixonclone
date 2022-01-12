import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import addToCart from "./cartSlice";

export const AddToCartButton = (props) => {
  let { product } = props;
  const cart = useSelector((state) => state.value);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const dispatch = useDispatch();

  const onAddToCartClicked = (product) => {
    dispatch(addToCart());
    console.log(`${product} added to cart`);
  };

  return <div onClick={onAddToCartClicked}></div>;
};
