import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const HeaderMenuItemStyled = styled.div``;

function HeaderMenuItem(props) {
  return (
    <HeaderMenuItemStyled className="bg-blue-50  flex justify-between">
      <Link to={props.link} className="">
        {props.text}
      </Link>
      <FontAwesomeIcon icon={faChevronRight} />
    </HeaderMenuItemStyled>
  );
}

export default HeaderMenuItem;
