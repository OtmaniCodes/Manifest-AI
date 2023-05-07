import React from 'react'
import './About.css'
import AboutSection from '../../components/AboutSection/AboutSection'
import useScrollToTop from '../../hooks/useScrollToTop'

export default function About() {
  useScrollToTop();
  return (
    <div id="about-page">
      <div className='py-5 py-md-0'>
          <AboutSection givenStyle={{height: '100vh'}} />
      </div>
    </div>
  )
}
