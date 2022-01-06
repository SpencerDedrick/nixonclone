import React from "react";
import Slider from "react-slick";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

const StyledPromoBar = styled.div`
  background: black;
  max-height: 6vh;
  width: 100vw;
  max-width: 100vw;
  height: 65px;
  text-align: center;
  display: grid;
  place-items: center;

  .slider {
    max-width: 600px;
  }
  p {
    color: white;
    max-width: 80vw;
    word-wrap: no-wrap;
    font-size: clamp(0.5rem, 0.8rem, 14px);
    margin: auto;
    letter-spacing: 1px;
    overflow: auto;
    white-space: nowrap;
    line-height: 18px;
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
        left: 5,
        top: "3px",
        color: "white",
        background: "black",
        fontSize: "20px",
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
        right: "5px",
        top: "3px",
        color: "white",
        zIndex: 1,
        fontSize: "20px",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  infinite: true,
  vertical: true,
  autoplay: true,
  touch: true,
  speed: 1000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  className: "slider",
};

function PromoBar() {
  return (
    <StyledPromoBar>
      <Slider {...settings}>
        <p>Shop Now, Pay Later. With Afterpay.</p>
        <p>Personalize It With Free Engraving.</p>
        <p>Sign Up For 10% Off Your First Order.</p>
      </Slider>
    </StyledPromoBar>
  );
}

export default PromoBar;
