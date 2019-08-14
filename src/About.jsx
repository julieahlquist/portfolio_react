import React, { Component } from "react"
import './css/about.css'
import SocialMedia from './SocialMedia'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialmedia: true
    }
  }

  render () {
	  return (
      <div>
        <div className="ab-title">About Me</div>
        <div className="ab-text">
					My name is Julie Ahlquist and I’m a soon-to-be fullstack 
					junior developer, currently attending a coding bootcamp at
					Craft Academy in Stockholm. </div>
				<div className="ab-text">
          I’m coding in Ruby and JavaScript language, building 
					applications primarily using Rails and/or React frameworks. 
					Agile mindset and TDD/BDD is key, and I’m also practising 
          version control and coverage metrics.</div>

        <div>
          <SocialMedia />
        </div>
      </div>
    )
  }
}

export default About