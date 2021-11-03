import React, { useState } from "react";
import "./App.css";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SlideMenu from "./Components/SlideMenu";
/* import PromoBar from "./Components/PromoBar"; */
import Cart from "./Pages/Cart/Cart";
import products from "./Constants/Products";
import ProductPage from "./Pages/Product/ProductPage";

import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [menuState, setMenuState] = useState(false);
  /* const [cartState, setCartState] = useState([]); */

  function toggleMenu() {
    setMenuState((state) => !state);
    if (menuState === true) {
      console.log("menu is open");
    } else {
      console.log("menu is closed");
    }
  }

  function closeMenu() {
    if (menuState === true) {
      setMenuState(() => false);
    } else {
      return;
    }
  }

  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        {/*   <PromoBar /> */}
        <Header toggleMenu={toggleMenu} closeMenu={closeMenu} />
        <SlideMenu menuState={menuState} toggleMenu={toggleMenu} />
        <div id="page-wrap">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/AboutUs">
              <h1>About Us</h1>
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
            <Route path="/regulator">
              <ProductPage product={products.Regulator} />
            </Route>
            <Route path="/smoke">
              <ProductPage product={products.Smoke} />
            </Route>
            <Route path="/corporate">
              <ProductPage product={products.Corporate} />
            </Route>
            <Route path="/kingston">
              <ProductPage product={products.Kingston} />
            </Route>
            <Route path="/chronus">
              <ProductPage product={products.Chronus} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
