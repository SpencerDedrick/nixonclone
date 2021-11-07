import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PushMenuNav from "./Components/PushMenuNav";
/* import PromoBar from "./Components/PromoBar"; */
import Cart from "./Pages/Cart/Cart";
import products from "./Constants/Products";
import ProductPage from "./Pages/Product/ProductPage";
import Button from "./Components/Button";

import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState([]);

  function addToCart(product) {
    setCartState((cartState) => [...cartState, product]);
  }

  function removeFromCart(product) {
    setCartState((cartState) => cartState.filter((item) => item !== product));
  }

  useEffect(() => {
    console.log(cartState);
  }, [cartState]);

  /*   const removeFromCart = (product) => {
    setCartState(cartState.filter((item) => item.id !== product.id));
  }; */

  function toggleMenu() {
    setMenuState((state) => !state);
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
        <PushMenuNav menuState={menuState} toggleMenu={toggleMenu} />
        <div id="page-wrap">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/AboutUs">
              <h1>About Us</h1>
            </Route>
            <Route path="/Cart">
              <Cart cartState={cartState} removeFromCart={removeFromCart} />
            </Route>
            <Route path="/regulator">
              <ProductPage product={products.Regulator} addToCart={addToCart} />
            </Route>
            <Route path="/smoke">
              <ProductPage product={products.Smoke} addToCart={addToCart} />
            </Route>
            <Route path="/corporate">
              <ProductPage product={products.Corporate} addToCart={addToCart} />
            </Route>
            <Route path="/kingston">
              <ProductPage product={products.Kingston} addToCart={addToCart} />
            </Route>
            <Route path="/chronus">
              <ProductPage product={products.Chronus} addToCart={addToCart} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
