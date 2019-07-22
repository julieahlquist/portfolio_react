import React from "react"
import ReactDOM from "react-dom"
import LandingPage from "./LandingPage"
import Header from './Header'
import Footer from './Footer'
import './css/index.css'

const App = () => {
  return (
    <div>
				<Header />
        <LandingPage />
				<Footer />
    </div>
	)
};

ReactDOM.render(<App />, document.getElementById("app"))