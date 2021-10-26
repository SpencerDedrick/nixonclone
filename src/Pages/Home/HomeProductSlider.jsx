import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    name: "Kingston",
    img: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwd26c1405/products/A099-3005-view1.png?sw=300&sh=330&sm=fit",
    price: "$125.00",
    flair: "Personalize",
  },
  {
    name: "Smoke",
    img: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw7c0ee826/products/A1320-001-view1.png?sw=300&sh=330&sm=fit",
    price: "$175.00",
    flair: "New",
  },

  {
    name: "Corporate",
    img: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw4c17d923/products/A346-001-view1.png?sw=300&sh=330&sm=fit",
    price: "$225.00",
    flair: "New",
  },
  {
    name: "Regulator",
    img: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dw441f4215/products/A1180-001-view1.png?sw=300&sh=330&sm=fit",
    price: "$400.00",
    flair: "Best Seller",
  },
  {
    name: "50-31 Chronus",
    img: "https://www.nixon.com/dw/image/v2/AAYF_PRD/on/demandware.static/-/Sites-masterCatalog_Nixon/default/dwd5d23b21/products/A083-502-view1.png?sw=300&sh=330&sm=fit",
    price: "$500.00",
    flair: "Best Seller",
  },
];

const ProductSliderStyled = styled.div`
  width: 300px;
  max-width: 90vw;
  display: flex;
  flex-direction: row;
  text-align: center;
  .flair-text {
    width: 100px;
  }
`;

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      focusOneSelect: true,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
    };
    return (
      <div className="text-center my-10">
        <div className="my-5">
          <p className="font-bold text-xl">You Might Like</p>

          <p>
            Shop All
            <FontAwesomeIcon className="text-sm mx-2 " icon={faChevronRight} />
          </p>
        </div>
        <Slider {...settings}>
          {products.map((product) => {
            return (
              <ProductSliderStyled>
                <img
                  className=" m-auto"
                  src={product.img}
                  alt={product.name}
                ></img>
                <div className="my-3">
                  <p className="flair-text text-xs font-medium rounded-full border-black border-2 m-auto my-2">
                    {product.flair}
                  </p>
                  <p className="font-bold text-lg">{product.name}</p>
                  <p className="text-sm font-light">{product.price}</p>
                </div>
              </ProductSliderStyled>
            );
          })}
        </Slider>
      </div>
    );
  }
}
