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
import productCategories from "./Constants/ProductCategories";
import ProductPage from "./Pages/Product/ProductPage";
import ShopPage from "./Pages/Shop/ShopPage";

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

  function filterProducts(category) {
    return Object.keys(products).filter(
      (product) => products[product].category === category
    );
  }

  console.log(filterProducts("mens-watches"));
  console.log(filterProducts("womens-watches"));
  console.log(filterProducts("bags"));
  console.log(filterProducts("headwear"));
  console.log(filterProducts("clothing-accessories"));

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
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
