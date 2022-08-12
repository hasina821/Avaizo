import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="https://">about us</a></li>
              <li><a href="https://">our services</a></li>
              <li><a href="https://">privacy policy</a></li>
              <li><a href="https://">affiliate program</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="https">FAQ</a></li>
              <li><a href="https://">shipping</a></li>
              <li><a href="https://">returns</a></li>
              <li><a href="https://">order status</a></li>
              <li><a href="https://">payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="https://">watch</a></li>
              <li><a href="https://">bag</a></li>
              <li><a href="https://">shoes</a></li>
              <li><a href="https://">dress</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Folow us</h4>
            <div className='social-links'>
              <a href="h"><FontAwesomeIcon icon={faFacebook}/></a>
              <a href="h"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="h"><FontAwesomeIcon icon={faTwitter}/></a>
              <a href="h"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer