import React from "react";
import StarRatingComponent from "react-star-rating-component";
import Button from "../../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapse from "rc-collapse";
import "rc-collapse/assets/index.css";
import styled from "styled-components";
import {
  faChevronRight,
  faInfoCircle,
  faTruck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import HomeProductSlider from "../Home/HomeProductSlider";
import { AddToCartButton } from "../../Features/Cart/AddToCartButton";
import { nanoid } from "@reduxjs/toolkit";

let Panel = Collapse.Panel;

const StyledProductPage = styled.div`
  .product-page__full-specs-container {
    background: white;
    border: none;
  }

  .main-image {
    max-width: 300px;
  }
  .second-image {
    max-width: 50%;
  }

  p {
    max-width: 100ch;
  }

  .desktop-detail-text {
    max-width: 45ch;
  }

  .mobile-image {
    max-width: 70vw;
    margin: auto;
  }
`;

function ProductPageBreadCrumbs(props) {
  let { product } = props;
  return (
    <div className="p-3 md:bg-white md:px-10">
      <Link className="pr-2 text-gray-500 text-xs" to="/">
        Home
      </Link>
      <FontAwesomeIcon className="text-xs" icon={faChevronRight} />
      <Link className="px-2 text-gray-500 text-xs" to={product.category}>
        {product.category}
      </Link>
      <FontAwesomeIcon className="text-sm" icon={faChevronRight} />
      <Link className="px-2 font-medium text-xs" to={product.name}>
        {product.name}
      </Link>
    </div>
  );
}

function ProductPageFeatures(props) {
  let { product } = props;
  return (
    <div className="bg-white">
      <hr className="py-5 md:hidden" />
      <div className="md:bg-white md:w-full">
        <div className="md:flex   m-auto md:justify-between md:max-w-6xl md:mb-10">
          <div className="md:mr-5">
            <p className="text-xl font-bold tracking-widest border-b-2 my-5 border-black w-full">
              Product Features
            </p>

            <div className="border-b-2 my-3">
              <p className="font-medium text-gray-500 my-2 tracking-wide">
                Design
              </p>
              <p className="text-sm tracking-wide leading-relaxed  py-3">
                {product.design}
              </p>
            </div>
            <div className="border-b-2 my-3">
              <p className="font-medium text-gray-500 my-2 tracking-wide">
                Durability
              </p>
              <p className="text-sm tracking-wide leading-relaxed  py-3">
                {product.durability}
              </p>
            </div>
            <div className="border-b-2 my-3">
              <p className="font-medium text-gray-500 my-2 tracking-wide">
                Special Features
              </p>
              <p className="text-sm tracking-wide leading-relaxed  py-3">
                {product.specialFeature}
              </p>
            </div>
            <div className="border-b-2 my-3">
              <p className="font-medium text-gray-500 my-2 tracking-wide">
                Movement
              </p>
              <p className="text-sm tracking-wide leading-relaxed  py-3">
                {product.movement}
              </p>
            </div>
            <div className="border-b-2 my-3">
              <p className="font-medium text-gray-500 my-2 tracking-wide">
                Water Rating
              </p>
              <p className="text-sm tracking-wide leading-relaxed  py-3">
                {product.waterRating}
              </p>
            </div>
          </div>
          <img
            className="hidden md:block w-screen md:h-full second-image"
            src={product.photos[3]}
            alt={product.name}
          />
        </div>
      </div>
      <img
        className="w-screen md:hidden"
        src={product.photos[4]}
        alt={product.name}
      />
    </div>
  );
}

function ProductPageCollapse(props) {
  let { product } = props;
  return (
    <div className="md:bg-white md:w-screen pt-10">
      <Collapse
        className="product-page__full-specs-container md:max-w-6xl md:m-auto"
        expandIcon={<FontAwesomeIcon icon={faPlus} />}
      >
        <p className="text-2xl font-bold">Full Specifications</p>
        <Panel>
          <div className="border-b-2 my-3">
            <p className="font-medium text-gray-500 my-2 tracking-wide">
              Movement
            </p>
            <p className="text-sm tracking-wide leading-relaxed  py-3">
              {product.movement}
            </p>
          </div>
          <div className="border-b-2 my-3">
            <p className="font-medium text-gray-500 my-2 tracking-wide">
              Watch Band
            </p>
            <p className="text-sm tracking-wide leading-relaxed  py-3">
              {product.watchBand}
            </p>
          </div>
          <div className="border-b-2 my-3">
            <p className="font-medium text-gray-500 my-2 tracking-wide">
              Watch Dial
            </p>
            <p className="text-sm tracking-wide leading-relaxed  py-3">
              {product.watchDial}
            </p>
          </div>
          <div className="border-b-2 my-3">
            <p className="font-medium text-gray-500 my-2 tracking-wide">
              Watch Case
            </p>
            <p className="text-sm tracking-wide leading-relaxed  py-3">
              {product.watchCase}
            </p>
          </div>
          <div className="border-b-2 my-3">
            <p className="font-medium text-gray-500 my-2 tracking-wide">
              Water Rating
            </p>
            <p className="text-sm tracking-wide leading-relaxed  py-3">
              {product.waterRating}
            </p>
          </div>
          <div className=" my-3">
            <p className="font-medium text-gray-500 my-2 tracking-wide">
              Warranty
            </p>
            <p className="text-sm tracking-wide leading-relaxed  py-3">
              {product.warranty}
            </p>
          </div>
        </Panel>
        <hr />
      </Collapse>
    </div>
  );
}

function ProductPageDetailsMobile(props) {
  let { product } = props;

  return (
    <div className="product-page__details-container md:hidden">
      <div className="flex w-1/2 justify-between align-middle py-2">
        <p className="font-medium text-sm">{product.caseMeasurements}</p>
        <p className="text-xs font-medium rounded-full border-black border-2 m-auto px-3">
          {product.flair}
        </p>
      </div>
      <p className="font-semibold py-2 text-xl">
        {product.name} {product.type}
      </p>
      <p className="py-1 text-sm text-gray-500 font-medium">{product.color}</p>
      <StarRatingComponent editing={false} name={`${product.name} rating`} />
      <p className="font-medium text-xs py-2">
        ${product.price}.00{" "}
        <span className="font-medium text-gray-500">
          or 4 installments of $ {product.price / 4} with{" "}
        </span>
        {/* make info icon a popup with modal */}
        <span className="font-bold">
          alterpay <FontAwesomeIcon icon={faInfoCircle} />
        </span>
      </p>
      <img
        className=" px-3 w-11/12 mb-10 mobile-image"
        src={product.image}
        alt={product.name}
      />
      <div className="flex py-2 ">
        {product.photos.map((photo, index) => {
          return (
            <img
              src={product.photos[index]}
              alt={product.name}
              className="w-1/5 px-2"
              key={nanoid()}
            />
          );
        })}
      </div>
      <p className="m-auto text-center my-5 text-sm font-semibold">
        <FontAwesomeIcon icon={faTruck} /> Free Shipping + Returns
      </p>

      <AddToCartButton product={product} className="text-center my-5">
        <Button type="black">Add to Cart</Button>
      </AddToCartButton>

      <hr className="my-5" />
      <p className="text-sm tracking-wide leading-relaxed  py-3">
        {product.description}
      </p>
      <img
        className="w-screen md:hidden"
        src={product.photos[3]}
        alt={product.name}
      />
    </div>
  );
}
function ProductPageDetailsDesktop(props) {
  let { product, addToCart } = props;

  function handleClick(product) {
    addToCart(product);
  }
  return (
    <div className="bg-white mb-24 pb-20 hidden md:block">
      <div className="product-page__details-container  md:flex md: justify-space-between md:max-w-6xl pt-10 md:m-auto">
        <div>
          <div className="flex w-1/2 justify-between align-middle py-2">
            <p className="font-medium text-sm">{product.caseMeasurements}</p>

            <p className="text-xs font-medium rounded-full border-black border-2 m-auto px-3">
              {product.flair}
            </p>
          </div>
          <p className="font-semibold py-2 text-xl">
            {product.name} {product.type}
          </p>
          <p className="py-1 text-sm text-gray-500 font-medium">
            {product.color}
          </p>
          <StarRatingComponent editing={false} name={`${product.name}`} />
          <p className="desktop-detail-text text-sm tracking-wide leading-relaxed py-3">
            {product.description}
          </p>
        </div>

        <img
          className=" px-3 w-11/12 mb-10 main-image"
          src={product.image}
          alt={product.name}
        />
        <div className="flex flex-col start ">
          <div className="flex">
            {product.photos.map((photo, index) => {
              return (
                <img
                  src={product.photos[index]}
                  alt={product.name}
                  className="w-20 px-2"
                  key={nanoid()}
                />
              );
            })}
          </div>
          <p className="font-medium text-xl text-center">
            ${product.price}.00{" "}
          </p>
          <p className="font-medium text-xs py-2  text-center">
            <span className="font-medium text-gray-500 ">
              or 4 installments of $ {product.price / 4} with{" "}
            </span>
            {/* make info icon a popup with modal */}
            <span className="font-bold">
              alterpay <FontAwesomeIcon icon={faInfoCircle} />
            </span>
          </p>
          <p className="m-auto text-center my-5 text-sm font-semibold">
            <FontAwesomeIcon icon={faTruck} /> Free Shipping + Returns
          </p>
          <div
            className="text-center my-5"
            onClick={() => handleClick(product)}
          >
            <AddToCartButton product={product}>
              <Button type="black">Add to Cart</Button>
            </AddToCartButton>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductPage(props) {
  let { product, addToCart } = props;

  return (
    <StyledProductPage className=" w-screen px-2 md:px-0 md:bg-gray-100">
      <ProductPageBreadCrumbs product={product} />
      <ProductPageDetailsMobile product={product} addToCart={addToCart} />
      <ProductPageDetailsDesktop product={product} addToCart={addToCart} />
      <ProductPageFeatures product={product} />
      <ProductPageCollapse product={product} />
      <div className="bg-white my-20">
        <HomeProductSlider />
      </div>
    </StyledProductPage>
  );
}

export default ProductPage;
