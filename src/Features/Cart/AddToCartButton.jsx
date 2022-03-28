import { findIndex } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addQuantity } from "./cartSlice";

export const AddToCartButton = (props) => {
  let { product, children, className } = props;
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.length > 0) {
      console.log(cart);
    }
  }, [cart]);

  const dispatch = useDispatch();

  //increases quantity
  let qty = (item) => {
    let temp = { ...item };
    temp.quantity++;
    return temp;
  };

  let findProductIndex = () => {
    return cart.findIndex((object) => {
      return object.name === product.name;
    });
  };

  const onAddToCartClicked = () => {
    if (cart.filter((e) => e.name === product.name).length < 1) {
      product = qty(product);
      dispatch(addToCart(product));
    } else if (cart[findProductIndex()].quantity < 5) {
      dispatch(addQuantity(findProductIndex()));
    } else {
      console.log("no more watches please");
    }
  };

  return (
    <div onClick={onAddToCartClicked} className={className}>
      {children}
    </div>
  );
};
