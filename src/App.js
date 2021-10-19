import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SlideMenu from "./Components/SlideMenu";

function App() {
  const [menuState, setMenuState] = useState(false);

  function toggleMenu() {
    setMenuState((state) => !state);
    if (menuState === true) {
      console.log("menu is open");
    } else {
      console.log("menu is closed");
    }
  }

  return (
    <div className="App">
      <Router>
        <Header toggleMenu={toggleMenu} />
        <SlideMenu menuState={menuState} toggleMenu={toggleMenu} />
        <div id="page-wrap">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/AboutUs">
              <h1>About Us</h1>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
