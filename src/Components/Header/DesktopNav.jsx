import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { navMenuItems } from "../PushMenuNav";
import {
  faSearch,
  faTimes,
  faShoppingCart,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DesktopNavStyled = styled.div`
display: none;

  .nav__top {
    display: flex;
    width: 100%;
    max-width: 1500px;
    margin: min(10px, 50px); 
    flex: 1 1 0px;
    height: 80px;

    &__item {
      width: 100%;
      display: grid;
      place-items: center;
    }
  }

  .nav__search-bar {
    border-bottom: 1px solid lightgray;
    padding: 0 10px;
    font-size: 0.8rem;

    &__input {
      padding: 0 5px;
      width: 210px;
      letter-spacing: 1px;
    }

    &__input:focus {
        outline: none;
    }

    &__clear {
        font-size: 1.05rem;
        transition: all 300ms ease-in;

        &--hidden {
          color: rgba(0,0,0,0);
          transform: translateX(50px);
          pointer-events: none;
        }

        &--active {
          color: rgba(0,0,0,1);
          pointer-events: auto;
          cursor: pointer;
        }
    }

  }
  }

  .nav__logo__container {
    flex-shrink: 3;
    
  }
  .nav__logo {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 700;
  
  }

  .nav__account-menu {   
    padding: 0 80px; 
    display: flex;
    justify-content: space-around;

    
    &__item {
      font-size: .7rem;
      color: #444547;
    }
    
    &__country {
        color: grey;
        font-size: .8rem;
        font-weight: 700;
    }

    &__sign-in__icon {
      margin: 0 10px;
      font-size: .8rem;
    }

    &__cart {
      display: flex;
      align-items: center;

      &-qty {
        padding: 0 .5rem;
        font-weight: 500;
        font-size: 1.125rem;
      }

      }
      
    }
    
  }

  .nav__nav-links {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1100px;
    margin: auto;
    font-size: .7rem;
    font-weight: 500;
    position: relative;
    

    &__icon {
      margin: 0 5px;
    }
  }

  .nav__dropdown {
    border-top: 1px lightgrey solid;
    position: absolute;
    top: 45px;
    width: 100vw;
    height: 365px;
    background: white;
    display: flex;
    padding-top: 20px;
    
    &__mainlinks {
      display: flex;
      flex-direction: column;
      font-size: 1.1rem;
      font-weight: 500;
      padding-right: 60px;
      height: 100%;
      justify-content: space-around;

      &__container {
      display: flex;
      height: 50%;
      justify-content:flex-end;
      width: 30%;
      border-right: 1px solid lightgrey;
    }
    }

    

    &__items {
      width: 100%;
      max-width: 1100px;
      display: flex;
      justify-content: space-around;
      margin-left: auto;
    }

    &__item {
      font-weight: 500;
      font-size: 1.05rem;

    }
  }

  @media only screen and (min-width: 1024px) {
    display: block;
  }

  @media only screen and (min-width: 1280px) {
    .nav__top__item { 
      max-width: 33.33%;
    }
  }

  

`;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [clearButtonActive, setClearButtonActive] = useState(false);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    setClearButtonActive(true);
  };
  const onSearchClear = () => {
    setSearch("");
    setClearButtonActive(false);
  };

  useEffect(() => {
    console.log(search);

    if (search === "") {
      setClearButtonActive(false);
    }
    console.log(clearButtonActive);
  }, [search, clearButtonActive]);

  return (
    <div className="nav__top__item">
      <div className="nav__search-bar">
        <FontAwesomeIcon className="nav__search-bar__icon" icon={faSearch} />
        <input
          className="nav__search-bar__input"
          placeholder="What can we help you find"
          value={search}
          onChange={onSearchChange}
        />
        <span onClick={onSearchClear}>
          <FontAwesomeIcon
            icon={faTimes}
            className={`nav__search-bar__clear ${
              clearButtonActive
                ? "nav_search-bar__clear--active"
                : "nav__search-bar__clear--hidden"
            }`}
          />
        </span>
      </div>
    </div>
  );
};

const LogoContainer = () => {
  return (
    <div className="nav__top__item nav__logo__container">
      <Link to="/" className="nav__logo">
        HOME
      </Link>
    </div>
  );
};

const AccountMenu = () => {
  return (
    <div className="nav__top__item nav__account-menu">
      <Link to="/" className="nav__account-menu__country">
        EN
      </Link>
      <Link className="nav__account-menu__item">Order Status</Link>
      <Link className="nav__account-menu__item">Find a Store</Link>
      <p className="nav__account-menu__item">
        Sign In
        <FontAwesomeIcon
          icon={faChevronDown}
          className="nav__account-menu__sign-in__icon"
        />
      </p>
      <Link to="/cart" className="nav__account-menu__cart">
        <p className="nav__account-menu__cart-qty">0</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
    </div>
  );
};

const NavLinks = () => {
  const [open, setOpen] = useState(false);
  const [navLinkItems, setNavLinkItems] = useState({
    Styles: [],
    Use: [],
    Trending: [],
  });

  useEffect(() => {
    console.log(open);
    console.log(Object.keys(navLinkItems)[1]);
  }, [open, navLinkItems]);

  return (
    <div className="nav__nav-links" onMouseLeave={() => setOpen(false)}>
      {navMenuItems.map((item) => (
        <NavLink
          item={item}
          setOpen={setOpen}
          setNavLinkItems={setNavLinkItems}
        />
      ))}
      {open ? (
        <NavDropDown navLinkItems={navLinkItems} setOpen={setOpen} />
      ) : null}
    </div>
  );
};

const NavLink = (props) => {
  let { item, setOpen, setNavLinkItems } = props;

  const onMouseOver = (items) => {
    if (items) {
      setOpen(true);
      setNavLinkItems(items);
    }
  };

  const onMouseLeave = () => {
    setOpen(false);
  };

  return (
    <Link
      to={item.link}
      className="h-full cursor-pointer grid place-items-center"
      onMouseOver={() => onMouseOver(item.links)}
    >
      <div>
        {item.text}
        {item.sub ? (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="nav__nav-links__icon"
          />
        ) : null}
      </div>
    </Link>
  );
};

const NavDropDown = (props) => {
  let { navLinkItems, setOpen } = props;

  let links = Object.keys(navLinkItems).map((key) => {
    return <h1 className="nav__dropdown__item">{key}</h1>;
  });

  return (
    <div className="nav__dropdown">
      <div className="nav__dropdown__mainlinks__container">
        <div className="nav__dropdown__mainlinks">
          <Link to="/">New Arrivals</Link>
          <Link to="/">Best Sellers</Link>
          <Link to="/">Custom</Link>
          <Link to="/">Shop All</Link>
        </div>
      </div>
      <div className="nav__dropdown__items">{links}</div>
    </div>
  );
};

export const DesktopNav = () => {
  return (
    <nav>
      <DesktopNavStyled>
        <div className="nav__top">
          <SearchBar />
          <LogoContainer />
          <AccountMenu />
        </div>
        <NavLinks />
      </DesktopNavStyled>
    </nav>
  );
};
