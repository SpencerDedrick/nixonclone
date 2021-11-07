import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CartItemStyled = styled.div`
  display: flex;
  margin-left: 3rem;
`;

function CartItem(props) {
  let { product, removeFromCart } = props;
  return (
    <CartItemStyled className="py-5">
      <img className="h-40" src={product.image} alt="nixon watch"></img>
      <div className="text-left ml-5">
        <p className="font-bold">{product.name} </p>
        <p className="font-light text-sm py-1">{product.model}</p>
        <p className="pt-1 text-sm font-medium">{product.color}</p>
        <p className="text-sm font-medium">{product.size}</p>
        <p className="py-3 text-sm">${product.price}.00</p>
        <select className="w-16 border-2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <p className="font-bold py-3 text-sm">Total: {product.price}.00</p>
        <div className=" font-light text-sm text-gray-500 ">
          <Link to={`/${product.name}`}>Edit</Link>
          {" | "}
          <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
      </div>
    </CartItemStyled>
  );
}

export default CartItem;
