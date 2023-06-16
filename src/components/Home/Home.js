import React from 'react'
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import SignupInfo from '../SignupInfo/SignupInfo';
import StartArea from '../StartArea/StartArea';

function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Banner/>
        <SignupInfo/>
        <StartArea/>
        <Footer/>
    </>
  )
}

export default Home