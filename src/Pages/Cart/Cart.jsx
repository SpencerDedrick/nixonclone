import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";

function CartOrderSummary() {
  return (
    <div className="cart__order-summary font-medium text-sm bg-gray-100 my-10 mx-5 py-5">
      <p className="pb-5">Order Summary</p>
      <div className="bg-white mx-3 py-5">
        <div className="flex full justify-between py-1 px-3">
          <p>Item Subtotal</p>
          <p>$0.00</p>
        </div>
        <div className="flex full justify-between py-1 px-3">
          <p>Shipping *</p>
          <p>free</p>
        </div>
        <div className="flex full justify-between py-1 px-3">
          <p>Tax *</p>
          <p>$0.00</p>
        </div>
      </div>
      <div className="flex w-full justify-between px-6 pt-4">
        <p className="pr-2 text-lg font-bold">Order Total</p>
        <p className="font-bold pl-2 text-lg">$0.00</p>
      </div>
    </div>
  );
}

function Cart(props) {
  return (
    <div className="text-center">
      <p className="font-medium text-4xl my-10">Shopping Cart</p>
      <div className="bg-gray-100 mx-5 py-5">
        <div className="flex w-full justify-center">
          <p className="pr-2 text-lg">Order Total</p>
          <p className="font-bold pl-2 text-lg">$0.00</p>
        </div>
        <p className="text-xs text-left px-3 my-3">
          Due to carrier volumes beyond our control, related to COVID-19, it may
          take 2-3 more business days to receive any order, regardless of
          shipment method.
        </p>
        <button className="bg-green-500 my-3 w-11/12 rounded-sm text-white font-semibold py-1 px-3">
          <FontAwesomeIcon icon={faLock} className="mx-2" />
          Checkout
        </button>
      </div>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartOrderSummary />
    </div>
  );
}

export default Cart;
