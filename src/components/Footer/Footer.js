import React from 'react'
import './Footer.css'
// import png from './DigitalIndia.png'

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer-left">
            <div className="site-info">
                <h3>ChainProof</h3>
                <p>authentic digital documents to the citizen's digital document wallet</p>
            </div>
            <div className="follow-us">
                <h3>Follow Us</h3>
            </div>
        </div>
        <div className="contain">
            <div className="homi1">
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">FAQs</a></li>
                <li><a href="/">Statistics</a></li>
                <li><a href="/">Resources</a></li>
                <li><a href="/">Circulars</a></li>
                </ul>
            </div>
            <div className="homi2">
            <ul>
                <li><a href="/">Need Help</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Webinars</a></li>
                <li><a href="/">Credits</a></li>
                </ul>
            </div>
        </div>
        <div className="digitalindia-logo">
            <img src={'./images/DigitalIndia.png'} alt="" />
        </div>
    </footer>
  )
}

export default Footer