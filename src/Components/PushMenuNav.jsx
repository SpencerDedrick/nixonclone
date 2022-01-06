import React from "react";
import PushMenu from "react-burger-menu/lib/menus/push";

import HeaderMenuItem from "./HeaderMenuItem";
import styled from "styled-components";

export const navMenuItems = [
  {
    text: "Men's Watches",
    link: "mens-watches",
    sub: true,
  },
  {
    text: "Women's Watches",
    link: "womens-watches",
    sub: true,
  },
  {
    text: "Bags",
    link: "bags",
    sub: true,
  },
  {
    text: "Headwear",
    link: "headwear",
    sub: true,
  },
  {
    text: "Clothing & Accessories",
    link: "clothing-and-accessories",
    sub: true,
  },
  {
    text: "Bands",
    link: "bands",
    sub: true,
  },
  {
    text: "Custom",
    link: "custom",
    sub: false,
  },
  {
    text: "Gifts",
    link: "gifts",
    sub: true,
  },
  {
    text: "Sale",
    link: "sale",
    sub: false,
  },
];
const PushMenuStyled = styled.div``;

function PushMenuNav(props) {
  return (
    <PushMenuStyled>
      <PushMenu
        pageWrapId={"page-wrap"}
        customBurgerIcon={false}
        customCrossIcon={false}
        isOpen={props.menuState}
        width={"100vw"}
        className="bg-white m-auto "
      >
        {navMenuItems.map((item) => {
          return (
            <HeaderMenuItem
              toggleMenu={props.toggleMenu}
              text={item.text}
              link={item.link}
            />
          );
        })}
      </PushMenu>
    </PushMenuStyled>
  );
}

export default PushMenuNav;
