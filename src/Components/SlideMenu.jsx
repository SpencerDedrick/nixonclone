import React from "react";
import Menu from "react-burger-menu/lib/menus/push";
import HeaderMenuItem from "./HeaderMenuItem";
import styled from "styled-components";

const SlideMenuStyled = styled.div`
  padding: 1rem 0.75rem;
`;

function SlideMenu(props) {
  let showSettings = (event) => {
    event.preventDefault();
  };

  return (
    <SlideMenuStyled>
      <Menu
        pageWrapId={"page-wrap"}
        customBurgerIcon={false}
        customCrossIcon={false}
        isOpen={props.menuState}
        width={"99vw"}
        className="bg-white"
      >
        <HeaderMenuItem text={"Men's Watches"} link={"mens-watches"} />
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    </SlideMenuStyled>
  );
}

export default SlideMenu;
