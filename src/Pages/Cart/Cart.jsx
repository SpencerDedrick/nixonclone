import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function calculateSubTotal(cart) {
  let subTotal = 0;
  cart.forEach((item) => {
    subTotal += item.price;
  });
  return subTotal;
}

function CartOrderSummary(props) {
  const cart = useSelector((state) => state.cart);

  function calculateTax(cart) {
    let tax = (calculateSubTotal(cart) * 0.0825).toFixed(2);
    return tax;
  }
  function calculateTotal(cart) {
    let total =
      parseFloat(calculateSubTotal(cart)) +
      parseFloat((calculateSubTotal(cart) * 0.0825).toFixed(2));
    return total;
  }

  return (
    <div className="cart__order-summary font-medium text-sm bg-gray-100 my-10 mx-5 py-5">
      <p className="pb-5">Order Summary</p>
      <div className="bg-white mx-3 py-5">
        <div className="flex full justify-between py-1 px-3">
          <p>Item Subtotal</p>
          <p>${calculateSubTotal(cart)}.00</p>
        </div>
        <div className="flex full justify-between py-1 px-3">
          {/*Thought of the day: Did developers convince companies to make shipping free to avoid complicated calculations and a bunch of extra work?
           */}
          <p>Shipping *</p>
          <p>free</p>
        </div>
        <div className="flex full justify-between py-1 px-3">
          <p>Tax *</p>
          <p>${calculateTax(cart)}</p>
        </div>
      </div>
      <div className="flex w-full justify-between px-6 pt-4">
        <p className="pr-2 text-lg font-bold">Order Total</p>
        <p className="font-bold pl-2 text-lg">${calculateTotal(cart)}</p>
      </div>
    </div>
  );
}

function Cart(props) {
  const cart = useSelector((state) => state.cart);
  let { removeFromCart } = props;
  return (
    <div className="text-center">
      <p className="font-medium text-4xl my-10">Shopping Cart</p>
      <div className="bg-gray-100 mx-5 py-5">
        <div className="flex w-full justify-center">
          <p className="pr-2 text-lg">Order Total</p>
          <p className="font-bold pl-2 text-lg">
            ${calculateSubTotal(cart)}.00
          </p>
        </div>
        <p className="text-xs text-left px-3 my-3">
          Due to carrier volumes beyond our control, related to COVID-19, it may
          take 2-3 more business days to receive any order, regardless of
          shipment method.
        </p>
        <button className="bg-green-500 my-3 w-11/12 rounded-sm text-white font-semibold py-1 px-3 md:w-36">
          <FontAwesomeIcon icon={faLock} className="mx-2" />
          Checkout
        </button>
      </div>

      {cart.map((product) => {
        return <CartItem product={product} removeFromCart={removeFromCart} />;
      })}
      <CartOrderSummary cart={cart} />
    </div>
  );
}

export default Cart;
