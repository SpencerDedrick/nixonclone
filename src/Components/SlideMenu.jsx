import React from "react";
import Menu from "react-burger-menu/lib/menus/push";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SlideMenuStyled = styled.div`
  margin: 1rem 0.75rem;
`;

function SlideMenu(props) {
  let showSettings = (event) => {
    event.preventDefault();
  };

  return (
    <SlideMenuStyled>
      <Menu
        pageWrapId={"page-wrap"}
        customBurgerIcon={false}
        customCrossIcon={false}
        isOpen={props.menuState}
        width={"100vw"}
        className="bg-white"
      >
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    </SlideMenuStyled>
  );
}

export default SlideMenu;

/* class SlideMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu
        pageWrapId={"page-wrap"}
        isOpen={this.props.menuState}
        className="bg-white"
        width="100%"
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="text-2xl m-5"
          onClick={console.log("test")}
        />
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    );
  }
}

export default SlideMenu; */
