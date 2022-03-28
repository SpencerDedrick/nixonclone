import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RemoveFromCartButton } from "../../Features/Cart/RemoveFromCartButton";
import { setQuantity } from "../../Features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartItemStyled = styled.div`
  display: flex;
  margin-left: 3rem;
`;

function CartItem(props) {
  const dispatch = useDispatch();
  let { product, quantity } = props;
  let [itemQuantity, setItemQuantity] = useState(quantity);

  const cart = useSelector((state) => state.cart);

  let findProductIndex = () => {
    return cart.findIndex((object) => {
      return object.name === product.name;
    });
  };

  let qty = (item, qt) => {
    let temp = { ...item };
    temp.quantity = qt;
    return temp;
  };

  let onChange = (selectedOption) => {
    /* setItemQuantity(selectedOption.target.value); */
    let oldValue = cart[findProductIndex()];
    let newValue = qty(oldValue, selectedOption.target.value);
    dispatch(setQuantity([findProductIndex(), newValue]));
    /* console.log(qty(cart[findProductIndex()], selectedOption.target.value)); */

    /* console.log(`Option selected:`, selectedOption.target.value);
    console.log(`product selected:`, cart[findProductIndex()]); */
  };

  return (
    <CartItemStyled className="py-5">
      <img className="h-40" src={product.image} alt={product.name}></img>
      <div className="text-left ml-5">
        <p className="font-bold">
          {product.name} {product.type}
        </p>
        <p className="font-light text-sm py-1">{product.model}</p>
        <p className="pt-1 text-sm font-medium">{product.color}</p>
        <p className="text-sm font-medium">{product.size}</p>
        <p className="py-3 text-sm">${product.price}.00</p>
        <select
          className="w-16 border-2"
          value={itemQuantity}
          onChange={onChange}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <p className="font-bold py-3 text-sm">Total: {product.price}.00</p>
        <div className=" font-light text-sm text-gray-500 ">
          <Link to={`/${product.name}`}>Edit</Link>
          {" | "}
          <RemoveFromCartButton product={product}>
            <button>Remove</button>
          </RemoveFromCartButton>
        </div>
      </div>
    </CartItemStyled>
  );
}

export default CartItem;
