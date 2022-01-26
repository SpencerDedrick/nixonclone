import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PushMenuNav from "./Components/PushMenuNav";
import Cart from "./Pages/Cart/Cart";
import products from "./Constants/Products";
import productCategories from "./Constants/ProductCategories";
import ProductPage from "./Pages/Product/ProductPage";
import ShopPage from "./Pages/Shop/ShopPage";
import Products from "./Features/Products/products";

import ScrollToTop from "./Components/ScrollToTop";

function App() {
  /* const api_url = "https://sd-watch-shop-api.herokuapp.com/watches";

  let stuff;

  async function getData() {
    const response = await fetch(api_url);
    stuff = await response.json();
  }
  getData();
  useEffect(() => {
    console.log(stuff);
  }); */

  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState([]);

  function addToCart(product) {
    setCartState((cartState) => [...cartState, product]);
  }

  function removeFromCart(product) {
    setCartState((cartState) => cartState.filter((item) => item !== product));
  }

  function filterProducts(category) {
    return Object.keys(products).filter(
      (product) => products[product].category === category
    );
  }
  function allWatches() {
    return Object.keys(products).filter(
      (product) => products[product].type === "Watch"
    );
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
        <Header
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
          cartState={cartState}
        />
        <PushMenuNav menuState={menuState} toggleMenu={toggleMenu} />
        <div id="page-wrap">
          <Switch>
            <Route exact path="/">
              <Home />
              <Products />
            </Route>
            <Route path="/AboutUs">
              <h1>About Us</h1>
            </Route>
            <Route path="/Cart">
              <Cart cartState={cartState} removeFromCart={removeFromCart} />
            </Route>
            {Object.keys(products).map((product) => {
              return (
                <Route path={`/${products[product].name}`}>
                  <ProductPage
                    product={products[product]}
                    addToCart={addToCart}
                  />
                </Route>
              );
            })}
            {productCategories.map((category) => {
              return (
                <Route path={`/${category}`}>
                  <ShopPage
                    products={products}
                    filteredProducts={filterProducts(category)}
                  />
                </Route>
              );
            })}
            <Route path={`/watches`}>
              <ShopPage products={products} filteredProducts={allWatches()} />
            </Route>
            <Route path={`/sale`}>
              <ShopPage products={products} filteredProducts={allWatches()} />
            </Route>
            <Route path={`/bags`}>
              <ShopPage products={products} filteredProducts={allWatches()} />
            </Route>
            <Route path={`/headwear`}>
              <ShopPage products={products} filteredProducts={allWatches()} />
            </Route>
            <Route path={`/clothing-and-accessories`}>
              <ShopPage products={products} filteredProducts={allWatches()} />
            </Route>
            <Route path={`/bands`}>
              <ShopPage products={products} filteredProducts={allWatches()} />
            </Route>
            <Route path={`/custom`}>
              <ShopPage products={products} filteredProducts={allWatches()} />
            </Route>
            <Route path={`/gifts`}>
              <ShopPage products={products} filteredProducts={allWatches()} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
