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
import HomeProductSlider from "../../Pages/Home/HomeProductSlider";

let Panel = Collapse.Panel;

const StyledProductPage = styled.div`
  .product-page__full-specs-container {
    background: white;
    border: none;
    margin: 2rem 0;
  }
`;

function ProductPageBreadCrumbs(props) {
  let { product } = props;
  return (
    <div className="py-3">
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
    <div>
      <p className="text-xl font-bold tracking-widest border-b-2 my-5 border-black w-full ">
        Product Features
      </p>
      <div className="border-b-2 my-3">
        <p className="font-medium text-gray-500 my-2 tracking-wide">Design</p>
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
        <p className="font-medium text-gray-500 my-2 tracking-wide">Movement</p>
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
  );
}

function ProductPageCollapse(props) {
  let { product } = props;
  return (
    <Collapse
      className="product-page__full-specs-container"
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
  );
}

function ProductPage(props) {
  let { product } = props;

  return (
    <StyledProductPage className="px-5 w-screen">
      <ProductPageBreadCrumbs product={product} />
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
      <StarRatingComponent editing={false} />
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
        className=" px-3 w-11/12 mb-10"
        src={product.image}
        alt={product.name}
      />
      <p className="m-auto text-center my-5 text-sm font-semibold">
        <FontAwesomeIcon icon={faTruck} /> Free Shipping + Returns
      </p>
      <div className="text-center my-5">
        <Button type="black">Add to Cart</Button>
      </div>
      <hr className="my-5" />
      <p className="text-sm tracking-wide leading-relaxed  py-3">
        {product.description}
      </p>
      <img className="w-screen" src={product.photos[3]} alt={product.name} />
      <ProductPageFeatures product={product} />
      <ProductPageCollapse product={product} />
      <HomeProductSlider />
      <StarRatingComponent editing={false} />
    </StyledProductPage>
  );
}

export default ProductPage;
