import React from "react"
import ReactDOM from "react-dom"
import LandingPage from "./LandingPage"
import Footer from './Footer'

const App = () => {
  return (
    <div>
        <LandingPage />
				<Footer />
    </div>
	)
};

ReactDOM.render(<App />, document.getElementById("app"))