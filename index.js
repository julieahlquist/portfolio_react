import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./src/LandingPage";
import Header from "./src/Header";
import Footer from "./src/Footer";
import { BrowserRouter } from "react-router-dom";
import Projects from "./src/Projects";
import About from "./src/About";
import { Switch, Route } from "react-router-dom";
import "./src/css/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const App = () => {
  return (
    <div className="page-wrapper">
      <div className="header-container">
        <Header />
          <div className="ab-container">
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
            </Switch>
          </div>
        <Footer />
      </div >
    </div >
  )
};

ReactDOM.render((
  <BrowserRouter>
      <App />
  </BrowserRouter>
), document.getElementById('app'));