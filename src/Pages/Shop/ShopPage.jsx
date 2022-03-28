import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import HomeProductSlider from "../Home/HomeProductSlider";
import styled from "styled-components";
import { createAction, nanoid } from "@reduxjs/toolkit";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShopPageBannerStyled = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(https://images.unsplash.com/photo-1517699418036-fb5d179fef0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80);
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
      <div className="p-3 mx-5 md:mx-10 md:bg-white">
        <Link className="pr-2 text-gray-500 text-xs" to="/">
          Home
        </Link>
        <FontAwesomeIcon className="text-xs" icon={faChevronRight} />
        <Link className="px-2 text-gray-500 text-xs" to="watches">
          Watches
        </Link>
      </div>
      <span className="font-semibold p-3 mx-5 md:mx-10 text-2xl">
        Watches for all styles
      </span>
      <div className="p-3 mx-5 md:mx-10 w-auto">
        <div className="overflow-x-auto  flex flex-row ">
          <button className="rounded-sm inlineblock border-2 px-4 py-2 font-bold border-slate-300 mr-2 text-sm">
            Type
          </button>
          <button className="rounded-sm inlineblock whitespace-nowrap border-2 px-4 py-2 font-bold border-slate-300 mx-2 text-sm">
            Price
          </button>
          <button className="rounded-sm border-2 px-4 whitespace-nowrap py-2 font-bold border-slate-300 mx-2 text-sm">
            Color
          </button>
          <button className="rounded-sm border-2 whitespace-nowrap px-4 py-2 font-bold border-slate-300 mx-2 text-sm">
            Band Material
          </button>
          <button className="rounded-sm border-2 whitespace-nowrap px-4 py-2 font-bold border-slate-300 mx-2 text-sm">
            Water Rating
          </button>
          <button className="rounded-sm border-2 whitespace-nowrap px-4 py-2 font-bold border-slate-300 mx-2 text-sm">
            Watch size
          </button>
          <button className="rounded-sm border-2 whitespace-nowrap px-4 py-2 font-bold border-slate-300 mx-2 text-sm align-self-end">
            Sort
          </button>
          <span className="mx-10 text-gray-400 self-center">
            {filteredProducts.length} Items
          </span>
        </div>
      </div>
      <hr className="md:mx-10 mx-5 p-3" />
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
