import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const HeaderMenuItemStyled = styled.div`
  border-top: 1px solid lightgray;
`;

function HeaderMenuItem(props) {
  return (
    <HeaderMenuItemStyled className=" px-5 text-sm font-semi-bold max-w-full py-3 max-w-screen flex justify-between items-center">
      <Link to={props.link}>{props.text}</Link>
      <FontAwesomeIcon icon={faChevronRight} />
    </HeaderMenuItemStyled>
  );
}

export default HeaderMenuItem;
