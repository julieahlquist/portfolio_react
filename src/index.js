import React from "react"
import ReactDOM from "react-dom"
import LandingPage from "./LandingPage"
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'
import Projects from './Projects'
import About from './About'
import { Switch, Route } from 'react-router-dom'
import './css/index.css'

const App = () => {
  return (
    <div className="page-wrapper">
        <div className="header-container">
            <Header />
            <div className="ab-container">
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/about' component={About} />
                    <Route path='/projects' component={Projects} />
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