import React from "react";
import styled from "styled-components";
import {
  faShoppingCart,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0.75rem;

  /* MENU BUTTON STYLES */
  .menu-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
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
function HeaderMenu(props) {
  return (
    <div
      id="header__menu-button"
      className="flex-col flex justify-between h-full items-center cursor-pointer menu-btn"
      onClick={() => handleMenuButtonClick(props)}
    >
      <div className="menu-btn__burger"></div>
      {/* <FontAwesomeIcon icon={faBars} className="text-2xl" /> */}
      {/* s */}
    </div>
  );
}

// HEADER CART ICON
function HeaderCart(props) {
  return (
    // props.props????? There must be a better way to handle this
    <div onClick={() => handleOffMenuClick(props.props)}>
      <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
    </div>
  );
}

function Header(props) {
  return (
    <HeaderStyled>
      <HeaderMenu toggleMenu={props.toggleMenu} />
      <Link
        to="/"
        className="text-3xl font-black"
        onClick={() => handleOffMenuClick(props)}
      >
        HOME
      </Link>
      <HeaderCart props={props} />
    </HeaderStyled>
  );
}

export default Header;
