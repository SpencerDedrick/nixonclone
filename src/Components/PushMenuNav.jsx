import React from "react";
import PushMenu from "react-burger-menu/lib/menus/push";

import HeaderMenuItem from "./HeaderMenuItem";
import styled from "styled-components";

export const navMenuItems = [
  {
    text: "Men's Watches",
    link: "mens-watches",
    sub: true,
    links: {
      Styles: ["Classic", "Digital", "Chronograph", "Oversized", "Automatic"],
      Use: ["Surf & Tide", "Sports & Fitness", "Waterproof/Resitant"],
      Trending: [
        "Sustainable",
        "Black Watches",
        "Gold Watches",
        "Stainless Steel Watches",
        "Leather Watches",
        "Blue Watches",
        "Rose Gold Watches",
      ],
    },
  },
  {
    text: "Women's Watches",
    link: "womens-watches",
    sub: true,
    links: {
      Styles: ["Classic", "Digital"],
      Use: ["Surf & Tide", "Sports & Fitness", "Waterproof/Resitant"],
      Trending: [
        "Sustainable",
        "Rose Gold Watches",
        "Gold Watches",
        "Stainless Steel Watches",
        "Leather Watches",
        "Black Watches",
        "Blue Watches",
      ],
    },
  },
  {
    text: "Bags",
    link: "bags",
    sub: true,
    links: {
      Styles: ["Backpacks", "Duffle Bags", "Crossbodies & Totes", "Hip Packs"],
      Use: ["Travel", "Skate", "Surf"],
    },
  },
  {
    text: "Headwear",
    link: "headwear",
    sub: true,
    links: {
      Fits: ["Shallow", "Semi-Deep", "Deep"],
      Styles: [
        "5- Panel",
        "Beanie",
        "Bucket",
        "Flexfit",
        "Full Brim",
        "Snapback",
        "Trucker",
      ],
    },
  },
  {
    text: "Clothing & Accessories",
    link: "clothing-and-accessories",
    sub: true,
    links: {
      Clothing: ["Sweatshirts", "T-Shirts"],
      Accessories: ["Wallets", "Belts", "Other Accessories", "Face Masks"],
      Trending: ["Sustainable Clothing & Accessories"],
    },
  },
  {
    text: "Bands",
    link: "bands",
    sub: true,
    links: {
      "Band Size": ["16mm", "20mm", "23mm"],
      "Band Material": ["Leather", "Rubber", "Sustainable"],
      "Band Type": ["NATO", "Quick Release"],
    },
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
    links: {
      "Gifts For Him": [
        "Top Rated Gifts",
        "Gifts Under $50",
        "Gifts Under$150",
        "Shop All",
      ],
      "Gifts For Her": [
        "Top Rated Gifts",
        "Gifts Under $50",
        "Gifts Under$150",
        "Shop All",
      ],
      "Gifts By Occasion": ["Anniversary", "Birthday", "Wedding"],
    },
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
