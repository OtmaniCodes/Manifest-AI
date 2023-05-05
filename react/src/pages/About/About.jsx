import React from 'react'
import './About.css'
import AboutSection from '../../components/AboutSection/AboutSection'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function About() {
  return (
    <div id="about-page">
        <Navbar/>
        <div className='py-5 py-md-0'>
            <AboutSection givenStyle={{height: '100vh'}} />
        </div>
        <Footer/>
    </div>
  )
}
