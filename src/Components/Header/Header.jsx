import React from "react";
import styled from "styled-components";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PromoBar from "./PromoBar";
import { DesktopNav } from "./DesktopNav";
import { useSelector } from "react-redux";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.75rem;
  width: 100vw;

  @media only screen and (min-width: 1024px) {
    display: none;
  }

  /* MENU BUTTON STYLES */
  .menu-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    height: 30px;
    transition: all 0.5s ease-in-out;

    .menu-btn__burger {
      width: 30px;
      height: 3px;
      background: #232323;
      border-radius: 5px;
      transition: all 0.5s ease-in-out;
    }

    .menu-btn__burger::after,
    .menu-btn__burger::before {
      position: absolute;
      content: "";
      width: 30px;
      height: 3px;
      background: #232323;
      border-radius: 5px;
      transition: all 0.5s ease-in-out;
    }

    .menu-btn__burger::before {
      transform: translateY(-10px);
    }
    .menu-btn__burger::after {
      transform: translateY(10px);
    }
  }

  .menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
  }
  .menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  .menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }

  @media (min-width: 768px) {
    padding-right: 2rem;
  }
`;

//MENU BUTTON HANDLERS
function handleMenuButtonClick(props) {
  props.toggleMenu();
  toggleMenuButton();
}

function handleOffMenuClick(props) {
  props.closeMenu();
  closeMenuButton();
}

function closeMenuButton() {
  let menuButton = document.querySelector(".menu-btn");
  menuButton.classList.remove("open");
}

function toggleMenuButton() {
  let menuButton = document.querySelector(".menu-btn");
  menuButton.classList.toggle("open");
}

// HEADER MENU BUTTON
function HeaderMenuButton(props) {
  return (
    <div
      className="cursor-pointer  "
      onClick={() => handleMenuButtonClick(props)}
    >
      <div
        id="header__menu-button"
        className="flex-col flex justify-between h-full items-center cursor-pointer menu-btn"
      >
        <div className="menu-btn__burger "></div>
      </div>
    </div>
  );
}

// HEADER CART ICON
export function HeaderCart(props) {
  const cart = useSelector((state) => state.cart);
  let calcCart = () => {
    let cartQ = 0;
    cart.forEach((item) => {
      if (item.quantity <= 5) {
        cartQ += 1 * item.quantity;
      }
    });
    return cartQ;
  };
  return (
    // props.props????? There must be a better way to handle this
    <Link
      to="/cart"
      onClick={() => handleOffMenuClick(props.props)}
      className="flex"
    >
      <p className="px-2 font-bold text-lg">{calcCart()}</p>
      <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
    </Link>
  );
}

function Header(props) {
  return (
    <header>
      <PromoBar />
      <DesktopNav cartState={props.cartState} />
      <HeaderStyled>
        <HeaderMenuButton toggleMenu={props.toggleMenu} />
        <Link
          to="/"
          className="text-2xl font-black"
          onClick={() => handleOffMenuClick(props)}
        >
          HOME
        </Link>
        <HeaderCart props={props} cartState={props.cartState} />
      </HeaderStyled>
    </header>
  );
}

export default Header;
