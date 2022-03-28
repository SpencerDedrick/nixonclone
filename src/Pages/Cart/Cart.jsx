import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function CartOrderSummary(props) {
  let { cart, calculateSubTotal } = props;
  function calculateTax() {
    let tax = (calculateSubTotal(cart) * 0.0825).toFixed(2);
    return tax;
  }
  function calculateTotal() {
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
//Cart Component
function Cart(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;
  Modal.setAppElement("#root");
  const cart = useSelector((state) => state.cart);
  let { removeFromCart } = props;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function calculateSubTotal() {
    let subTotal = 0;
    cart.forEach((item) => {
      subTotal += item.price * item.quantity;
    });
    return subTotal;
  }

  return (
    <div className="text-center">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-xl font-bold my-2 m-auto text-center block">
          HELLO THERE{" "}
        </h2>

        <h3 className="my-4 m-auto text-center block">
          Thanks for checking out my project.
        </h3>
        <h3 className="my-4 m-auto text-center block">
          I hope you enjoyed your time with it.
        </h3>
        <h3 className="my-4 m-auto text-center block">
          You can find more of my work using the link below
        </h3>
        <a
          href="spencerdedrick.com"
          rel="noopener noreferrer"
          className="text-indigo-500 m-auto text-center block"
        >
          spencerdedrick.com
        </a>

        <button
          onClick={closeModal}
          className="block my-5 m-auto rounded-md text-sm p-2 bg-gray-900 text-white font-bold"
        >
          Click here to close this box
        </button>
      </Modal>
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
        <button
          className="bg-green-500 my-3 w-11/12 rounded-sm text-white font-semibold py-1 px-3 md:w-36"
          onClick={openModal}
        >
          <FontAwesomeIcon icon={faLock} className="mx-2" />
          Checkout
        </button>
      </div>

      {cart.map((product) => {
        return (
          <CartItem
            product={product}
            removeFromCart={removeFromCart}
            quantity={product.quantity}
            key={nanoid()}
          />
        );
      })}
      <CartOrderSummary cart={cart} calculateSubTotal={calculateSubTotal} />
    </div>
  );
}

export default Cart;
