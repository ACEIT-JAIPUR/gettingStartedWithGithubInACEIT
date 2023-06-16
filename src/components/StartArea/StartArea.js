import React from 'react'
import './StartArea.css'
// import user from './img1.png'
// import fin from './fingerprint.png'
// import download from './download.png'
// import rightArrow from './right-arrow.png'

function StartArea() {
  return (
    <section className='start-info'>
            <p>Getting started is quick and easy</p>
        <div className="doc-verify">
            <div className="png-img">
                <img src={'./images/img1.png'} alt="" />
                <img className='rightArrow' src={'./images/right-arrow.png'} alt="" />
                <img src={'./images/fingerprint.png'} alt="" />
                <img className='rightArrow' src={'./images/right-arrow.png'} alt="" />
                <img src={'./images/download.png'} alt="" />
            </div>
            <div className="text-for-img">
                  <p>Register Yourself</p>
                  <p>Verify Yourself</p>
                  <p>Fetch your Documents</p>
                </div>
        </div>
    </section>
  )
}

export default StartArea