import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Kingston",
    img: "https://cdn.shopify.com/s/files/1/0541/0272/0705/products/A099-1045-view1.png?v=1639584434",
    price: "$125.00",
    flair: "Personalize",
  },
  {
    name: "Smoke",
    img: "https://cdn.shopify.com/s/files/1/0541/0272/0705/products/A1320-001-view1.png?v=1639584605",
    price: "$175.00",
    flair: "New",
  },

  {
    name: "Corporate",
    img: "https://cdn.shopify.com/s/files/1/0541/0272/0705/products/A1242-1041-view1.png?v=1639584545",
    price: "$225.00",
    flair: "New",
  },
  {
    name: "Regulator",
    img: "https://cdn.shopify.com/s/files/1/0541/0272/0705/products/A1180-867-view1.png?v=1639584510",
    price: "$400.00",
    flair: "Best Seller",
  },
  {
    name: "Chronus",
    img: "https://cdn.shopify.com/s/files/1/0541/0272/0705/products/A083-502-view1.png?v=1639584429",
    price: "$500.00",
    flair: "Best Seller",
  },
];

const ProductSliderStyled = styled.div`
  overflow-x: hidden;
  width: 300px;
  max-width: 50vw;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  &:hover {
    background: lightgray;
  }
  .flair-text {
    width: 100px;
  }

  @media only screen and (min-width: 1024px) {
  }
`;

function NextArrow(props) {
  const { classname, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className={classname}
      style={{
        ...style,

        cursor: "pointer",
        position: "absolute",
        left: 0,
        top: "40%",
        color: "white",
        background: "black",
        fontSize: "35px",
        padding: "5px",
      }}
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
  const { classname, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className={classname}
      style={{
        ...style,
        cursor: "pointer",
        position: "absolute",
        right: 0,
        zIndex: "1",
        top: "40%",
        color: "white",
        background: "black",
        fontSize: "35px",
        padding: "5px",
      }}
      onClick={onClick}
    />
  );
}

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      focusOnSelect: true,
      centerMode: true,
      infinite: true,
      centerPadding: "90px",
      slidesToShow: 3,
      speed: 500,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerPadding: "90px",
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerPadding: "50px",
            slidesToShow: 4,
            arrows: false,
          },
        },
        {
          breakpoint: 640,
          settings: {
            centerPadding: "10px",
            slidesToShow: 3,
            arrows: false,
          },
        },
        {
          breakpoint: 475,
          settings: {
            centerPadding: "120px",
            slidesToShow: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 400,
          settings: {
            centerPadding: "90px",
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    };
    return (
      <div className="text-center  lg:px-5 lg:flex lg:flex-row my-10 ">
        <div className="my-5 lg:w-1/3 lg:grid lg:place-content-center  ">
          <p className="font-bold text-xl">You Might Like</p>
          <Link to="/watches">
            Shop All
            <FontAwesomeIcon className="text-sm mx-2 " icon={faChevronRight} />
          </Link>
        </div>

        <div className="lg:max-w-full lg:pr-5 lg:my-5 lg:w-2/3 ">
          <Slider {...settings}>
            {products.map((product) => {
              return (
                <ProductSliderStyled className="home__slider-container lg:h-96 ">
                  <div className="  lg:grid lg:place-content-center lg:overflow-hidden">
                    <Link to={`/${product.name}`}>
                      <img
                        className="m-auto"
                        src={product.img}
                        alt={product.name}
                      ></img>
                      <div className="my-3 ">
                        <p className="flair-text text-xs font-medium rounded-full border-black border-2 m-auto my-2">
                          {product.flair}
                        </p>
                        <p className="font-bold text-lg">{product.name}</p>
                        <p className="text-sm font-light">{product.price}</p>
                      </div>
                    </Link>
                  </div>
                </ProductSliderStyled>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
