import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import HomeProductSlider from "../Home/HomeProductSlider";
import styled from "styled-components";
import { nanoid } from "@reduxjs/toolkit";

const ShopPageBannerStyled = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(https://www.nixon.com/on/demandware.static/-/Library-Sites-Nixon/default/dw3980fa44/21-2/after-xmas-ool/After_Christmas_Sale_Desktop_1440_Week1.jpg);
  background-position: center;
  background-size: cover;
  height: 40vh;
  margin-bottom: 20px;
`;

const ShopPageBanner = () => {
  return (
    <div className="home__hero-container grid">
      <div className="home__hero-content text-center py-12 px-8 sm:text-left lg:px-20">
        <p className="text-white font-bold text-2xl lg:text-4xl home__hero-heading py-10 ">
          Time is Ticking
        </p>
        <p className="text-white text-md pb-5 font-semibold home__hero-text">
          Dont Miss Out on These Timeless Styles
        </p>
      </div>
    </div>
  );
};

function ShopPage(props) {
  let { products, filteredProducts } = props;
  return (
    <div>
      <ShopPageBannerStyled>
        <ShopPageBanner />
      </ShopPageBannerStyled>
      <div className="grid grid-cols-2 md:grid-cols-3">
        {filteredProducts.map((product) => {
          return (
            <Link to={`/${products[product].name}`} key={nanoid()}>
              <div className="py-5">
                <img
                  className="w-44 m-auto py-3"
                  src={products[product].image}
                  alt={products[product].name}
                />
                <div className="flex justify-center pb-5">
                  <img
                    src={products[product].photos[0]}
                    alt={products[product].name}
                    className="w-1/12"
                  ></img>
                  <img
                    src={products[product].photos[1]}
                    alt={products[product].name}
                    className="w-1/12"
                  ></img>
                  <img
                    src={products[product].photos[2]}
                    alt={products[product].name}
                    className="w-1/12"
                  ></img>
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium rounded-full border-black border-2 m-auto px-3 w-24">
                    {products[product].flair}
                  </p>
                  <h1 className="font-bold text-2xl py-2">
                    {products[product].name}
                  </h1>
                  <p>${products[product].price}.00</p>
                  <StarRatingComponent
                    editing={false}
                    name={`${product.name}`}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <HomeProductSlider />
    </div>
  );
}

export default ShopPage;
