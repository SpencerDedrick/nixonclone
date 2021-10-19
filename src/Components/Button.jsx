import React from "react";
import styled from "styled-components";

const StyledButtonWhite = styled.a`
  background-color: #ffffff;
  color: #232323;
  border: 2px solid #232323;

  &:hover {
    cursor: pointer;
  }
`;

const StyledButtonBlack = styled.a`
  background-color: #232323;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

function Button(props) {
  if (props.buttonType === "white") {
    return (
      <StyledButtonWhite className="text-center font-bold  text-sm py-3 px-6 md:py-4 md:px-8 rounded-sm ">
        {props.children}
      </StyledButtonWhite>
    );
  } else {
    return (
      <StyledButtonBlack className="text-center font-medium  text-sm py-3 px-6 md:py-4 md:px-8 rounded-sm ">
        {props.children}
      </StyledButtonBlack>
    );
  }
}

export default Button;
