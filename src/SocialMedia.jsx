import React from 'react'
import './css/socialmedia.css'

const SocialMedia = () => {
	return (
		<ul>
  		<li>
    		<a href="#">
      		<i class="fa fa-github" aria-hidden="true"></i>
      		<span> - Github</span>
    		</a>
  		</li>
  		<li>
    		<a href="#">
      		<i class="fa fa-linkedin" aria-hidden="true"></i>
      		<span> - Linkedin</span>
    		</a>
  		</li>
  		<li>
    		<a href="#">
      		<i class="fa fa-instagram" aria-hidden="true"></i>
      		<span> - Instagram</span>
    		</a>
  		</li>  
			<li>
    		<a href="#">
      		<i class="fa fa-facebook" aria-hidden="true"></i>
      		<span> - Facebook</span>
  			</a>
  		</li>
		</ul>
	)
}

export default SocialMedia