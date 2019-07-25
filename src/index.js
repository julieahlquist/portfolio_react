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
import SocialMedia from './SocialMedia'

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
                    <Route exact path='/socialmedia' component={SocialMedia} />
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