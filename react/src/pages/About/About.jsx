import React from 'react'
import './About.css'
import AboutSection from '../../components/AboutSection/AboutSection'

export default function About() {
  return (
    <div id="about-page">
      <div className='py-5 py-md-0'>
          <AboutSection givenStyle={{height: '100vh'}} />
      </div>
    </div>
  )
}
