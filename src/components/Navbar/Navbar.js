import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <header>
        <h2 className='logo'>ChainProof</h2>
        <nav>
            <ul className='nav_links'>
            <li><a href="/" className='on'>Home</a></li>
            <li><a href="/">Explore</a></li>
            <li><a href="/">Help</a></li>
            <li><a href="/">About</a></li>
            </ul>
        </nav>
        <a className='cta' href="/"><button>Login</button></a>
    </header>
  )
}
export default Navbar