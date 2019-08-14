import React from 'react'
import './css/socialmedia.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMedia = () => {
	return (
		<ul>
  		<li>
    		<a href="https://github.com/julieahlquist" target="_blank">
				<FontAwesomeIcon icon={['fab', 'github']} />
      		<span> - Github</span>
    		</a>
  		</li>
  		<li>
    		<a href="https://www.linkedin.com/in/julieahlquist/" target="_blank">
				<FontAwesomeIcon icon={['fab', 'linkedin-in']} />
      		<span> - Linkedin</span>
    		</a>
  		</li>
  		<li>
    		<a href="https://www.instagram.com/julieahlquist/?hl=sv" target="_blank">
				<FontAwesomeIcon icon={['fab', 'instagram']} />
      		<span> - Instagram</span>
    		</a>
  		</li>  
			<li>
    		<a href="https://www.facebook.com/julie.ahlquist" target="_blank">
				<FontAwesomeIcon icon={['fab', 'facebook-f']} />
      		<span> - Facebook</span>
  			</a>
  		</li>
		</ul>
	)
}

export default SocialMedia