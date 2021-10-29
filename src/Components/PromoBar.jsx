import React from "react";
import Slider from "react-slick";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const StyledPromoBar = styled.div`
  /*   height: 65px;
  max-height: 7vh;
  width: 100vw;
  color: white;
  background: blue;
  display: flex;
  justify-content: space-between;

  p {
    color: white;
  } */
  background: black;
  max-height: 7vh;
  width: 100vw;
  height: 65px;
  text-align: center;
  display: grid;
  place-items: center;
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
        left: 0,
        top: "-5px",
        color: "white",
        background: "black",
        fontSize: "30px",
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
        right: 10,
        zIndex: "1",
        top: "-5px",
        color: "white",
        background: "black",
        fontSize: "30px",
        padding: "5px",
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
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function PromoBar() {
  return (
    <StyledPromoBar>
      <Slider {...settings}>
        <div>
          <p>Shop Now, Pay Later. With Afterpay.</p>
        </div>
        <div>
          <p>Personalize It With Free Engraving.</p>
        </div>
        <div>
          <p>Sign Up For 10% Off Your First Order.</p>
        </div>
      </Slider>
    </StyledPromoBar>
  );
}

export default PromoBar;
