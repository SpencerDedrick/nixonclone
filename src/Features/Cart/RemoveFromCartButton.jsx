import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeFromCart } from "./cartSlice";

export const RemoveFromCartButton = (props) => {
  let { product, children, className } = props;
  const cart = useSelector((state) => state.cart);

  useEffect(() => {}, [cart]);

  const dispatch = useDispatch();
  let findProductIndex = () => {
    return cart.findIndex((object) => {
      return object.name === product.name;
    });
  };

  const onRemoveFromCartClicked = () => {
    dispatch(removeFromCart(cart[findProductIndex()]));
  };

  return (
    <div onClick={onRemoveFromCartClicked} className={className}>
      {children}
    </div>
  );
};
