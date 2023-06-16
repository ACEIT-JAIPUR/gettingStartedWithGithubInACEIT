import React from 'react'
import './Banner.css'
// import img from './banner-img.jpg'

function Banner() {
  return (
    <div className='banner'>
      <div className="text-info">
        <h3>Document Wallet to Empower Citizens</h3>
          <p>Having a document wallet can make it easier for citizens to provide the necessary documentation to support their case. By keeping all relevant documents organized and easily accessible, citizens can present their case in a more efficient and effective manner. This can help to reduce delays and ensure that justice is served in a timely manner.</p>
          </div>
          <img className='banner-img' src={'./images/banner-img.jpg'} alt="" />
    </div>
  )
}

export default Banner