import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Components/Button";
import Redacted from "../../Components/Redacted";

//HOME PAGE STYLES
//MOBILE FIRST
//MOBILE AND SMALL STYLES(screen-width <= 768PX)
const HomeStyled = styled.div`
  /* HOME HERO STYLES */
  .home__hero-container {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80);
    background-position: center;
    background-size: cover;
    height: 75vh;
    margin-bottom: 20px;
  }

  /* HOME THREE PANEL STYLES */
  .home__three-panel-container {
    .panel-1 {
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)),
        url(https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80);
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 250px;
    }
    .panel-2 {
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)),
        url(https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80);
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 250px;
    }
    .panel-3 {
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)),
        url(https://images.unsplash.com/photo-1560774358-d727658f457c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80);
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 250px;
    }
  }

  /* HOME TWO PANEL STYLES */
  .home__two-panel-container {
    .panel-1 {
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),
        url(https://images.unsplash.com/photo-1523268755815-fe7c372a0349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80);
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 250px;
    }

    .panel-2 {
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),
        url(https://images.unsplash.com/photo-1584208123923-cc027813cbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80);
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 250px;
    }
  }

  /* HOME SUBSCRIBE BAR STYLES */
  .home__sub-bar-container {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
      url("https://images.unsplash.com/photo-1453272784424-c2eb69c14e2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80");
    background-position: center;
    background-size: cover;
  }

  /* RESPONSIVE & OTHER STYLES */
  .home__square-container {
    display: inline-block;
    position: relative;
    width: 100%;
  }

  @media only screen and (min-width: 640px) {
    .home__hero-container {
      .home__hero-text {
        max-width: 28ch;
      }
    }
    .home__two-panel-container,
    .home__three-panel-container {
      display: flex;
      height: 24rem;
      width: 100vw;
      margin: 0;
      padding: 1.25rem 0;
      justify-content: space-between;

      .panel-1,
      .panel-2,
      .panel-3 {
        position: inline-block;
        padding: 0;
        width: 100%;
        height: 100%;
        top: auto;
        bottom: auto;
        left: auto;
        right: auto;
      }
    }

    .home__square-container {
      padding: 0;
      margin: 0;
    }
    .filler-box {
      display: none;
    }
  }

  @media only screen and (min-width: 1024px) {
    .home__two-panel-container,
    .home__three-panel-container {
      height: 30rem;
      max-height: 30rem;
    }

    .home__hero-container {
      align-items: center;
    }
  }
`;

function HomeHero() {
  return (
    <div className="home__hero-container grid">
      <div className="home__hero-content text-center py-12 px-8 sm:text-left lg:px-20">
        <p className="text-white font-bold text-2xl lg:text-4xl home__hero-heading py-1 ">
          Now or Never
          <br /> 30% Off
        </p>
        <p className="text-white text-md pb-5 font-semibold home__hero-text">
          Score on select styles from last season before they are gone forever!
        </p>
        <Button buttonType="black">Shop Sale</Button>
      </div>
    </div>
  );
}
function HomeThreePanel() {
  return (
    <div className="home__three-panel-container px-5 ">
      <div className="home__square-container my-2">
        <Link to="watches">
          <div className="panel-1">
            <div className="absolute bottom-5 left-0 right-0">
              <p className="text-white text-center text-lg font-semibold">
                All Watches
              </p>
              <div className="flex justify-around w-56 m-auto">
                <Link
                  to="mens"
                  className="underline text-white text-sm font-medium"
                >
                  Shop Men's
                </Link>
                <Link
                  to="womens"
                  className="underline text-white text-sm font-medium"
                >
                  Shop Women's
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className=" hidden sm:block sm:w-20"></div>
      <div className="home__square-container my-2">
        <Link to="bags">
          <div className="panel-2">
            <div className="absolute bottom-5 left-0 right-0">
              <p className="text-white text-center text-lg font-semibold">
                Bags & Backpacks
              </p>
              <div className="flex justify-around m-auto">
                <Link
                  to="bags"
                  className="underline text-white text-sm font-medium"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className=" hidden sm:block sm:w-20"></div>

      <div className="home__square-container my-2">
        <Link to="headear">
          <div className="panel-3">
            <div className="absolute bottom-5 left-0 right-0">
              <p className="text-white text-center text-lg font-semibold">
                Headwear
              </p>
              <div className="flex justify-around m-auto">
                <Link
                  to="headwear"
                  className="underline text-white text-sm font-medium"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

function HomeTwoPanel() {
  return (
    <div className="home__two-panel-container px-5 my-5">
      <div className="home__square-container my-2">
        <Link to="watches">
          <div className="panel-1">
            <div className="absolute bottom-5 left-0 right-0">
              <p className="text-white text-center text-lg font-semibold ">
                Black Watches
              </p>
              <div className="flex justify-around w-56 m-auto">
                <Link
                  to="mens"
                  className="underline text-white text-sm font-medium"
                >
                  Shop Men's
                </Link>
                <Link
                  to="womens"
                  className="underline text-white text-sm font-medium"
                >
                  Shop Women's
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className=" hidden sm:block sm:w-20"></div>
      <div className="home__square-container my-2">
        <Link to="womens">
          <div className="panel-2">
            <div className="absolute bottom-5 left-0 right-0">
              <p className="text-white text-center text-lg font-semibold">
                Women's Online Exclusives
              </p>
              <div className="flex justify-around m-auto">
                <Link
                  to="womens"
                  className="underline text-white text-sm font-medium"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

function HomeInstaBar() {
  return (
    <div className="home__insta-bar-container flex flex-col space-between items-center text-center h-48 my-7">
      <p className="text-3xl">
        #<Redacted />
      </p>
      <p className="my-5">
        Get featured by showing us how you #<Redacted /> on Instagram
      </p>
      <Button buttonType="black">Shop Instagram</Button>
    </div>
  );
}

function HomeTextBar() {
  return (
    <div className="container home__text-bar m-auto px- max-w-7xl">
      <p className="leading-7 text-center px-3 my-7 lg:text-left">
        <Redacted />
        is the go-to accessories shop for premium watches and much more. With a
        wide range of quality watches, apparel,{" "}
        <span className="font-medium">backpacks</span>, and accessories,{" "}
        <Redacted />
        stays true to its surf, skate and snow roots. From everyday{" "}
        <span className="font-medium">sports & fitness watches</span> for an
        active lifestyle to{" "}
        <span className="font-medium">small digital watches</span> for a night
        out, there's something for everyone. Whether you need an everyday watch
        or are looking for your next{" "}
        <span className="font-medium">skateboard watch</span>, <Redacted /> has
        you covered. Still can't find the perfect option,{" "}
        <span className="font-medium">Customize Your Watch</span> for a truly
        unique look.
      </p>
    </div>
  );
}

function HomeSubBar() {
  return (
    <div className="home__sub-bar-container w-screen h-48 text-center flex items-center justify-center flex-col  lg:justify-around my-7">
      <p className="home__sub-bar-text text-white text-xl md:text-4xl font-bold mb-5 ">
        Become a <Redacted /> Insider
      </p>
      <Button buttonType="white">Get 10% Off</Button>
    </div>
  );
}

function Home() {
  return (
    <HomeStyled className="home ">
      <HomeHero />
      <HomeThreePanel />
      <HomeTwoPanel />
      <HomeInstaBar />
      <HomeTextBar />
      <HomeSubBar />
    </HomeStyled>
  );
}

export default Home;
