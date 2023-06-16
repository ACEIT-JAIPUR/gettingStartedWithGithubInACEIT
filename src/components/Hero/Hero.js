import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='container'>
      
        <div className="items" ><Link to='/police'>Police</Link></div>
        <div className="items">Court</div>
        <div className="items">Forensic</div>
        <div className="items">User</div>
    </div>
  )
}

export default Hero