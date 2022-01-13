import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "./cartSlice";

export const AddToCartButton = (props) => {
  let { product, children } = props;
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const dispatch = useDispatch();

  const onAddToCartClicked = () => {
    dispatch(addToCart(product));
  };

  return <div onClick={onAddToCartClicked}>{children}</div>;
};
