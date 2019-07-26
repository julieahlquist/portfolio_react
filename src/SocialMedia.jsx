import React from 'react'
import './css/socialmedia.css'

const SocialMedia = () => {
	return (
		<ul>
  		<li>
    		<a href="#">
				<FontAwesomeIcon icon="coffee" />
      		<span> - Github</span>
    		</a>
  		</li>
  		<li>
    		<a href="#">
      		<i className="fa fa-linkedin" aria-hidden="true"></i>
      		<span> - Linkedin</span>
    		</a>
  		</li>
  		<li>
    		<a href="#">
      		<i className="fa fa-instagram" aria-hidden="true"></i>
      		<span> - Instagram</span>
    		</a>
  		</li>  
			<li>
    		<a href="#">
      		<i className="fa fa-facebook" aria-hidden="true"></i>
      		<span> - Facebook</span>
  			</a>
  		</li>
		</ul>
	)
}

export default SocialMedia