import React from "react";
import styled from "styled-components";

const CartItemStyled = styled.div`
  display: flex;
  margin-left: 3rem;
`;

function CartItem() {
  return (
    <CartItemStyled className="py-5">
      <img
        className="h-40"
        src="https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw4c17d923/products/A346-001-view1.png?sw=300&sh=330&sm=fit"
        alt="nixon watch"
      ></img>
      <div className="text-left ml-5">
        <p className="font-bold">Nixon Watch</p>
        <p className="font-light text-sm py-1">A1234-123-12</p>
        <p className="pt-1 text-sm font-medium">Black</p>
        <p className="text-sm font-medium">OSFM</p>
        <p className="py-3 text-sm">$250.00</p>
        <select className="w-16 border-2 ">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <p className="font-bold py-3 text-sm">Total: $250.00</p>
        <div className=" font-light text-sm text-gray-500 ">
          <button>Edit</button>
          {" | "}
          <button>Remove</button>
        </div>
      </div>
    </CartItemStyled>
  );
}

export default CartItem;
