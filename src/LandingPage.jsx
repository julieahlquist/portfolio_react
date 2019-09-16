import React from "react"
import './css/landingpage.css'
import background_img from "./img/Prague.jpg"

const LandingPage = () => {
        return (
            <>
            <div className="lp-title">Hello World</div>
            <img className="background_img" src={background_img} />
            </>
        )
}

export default LandingPage