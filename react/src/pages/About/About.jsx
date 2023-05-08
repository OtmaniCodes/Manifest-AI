import React from 'react'
import './About.css'
import AboutSection from '../../components/AboutSection/AboutSection'
import useScrollToTop from '../../hooks/useScrollToTop'
import { Helmet } from 'react-helmet';

export default function About() {
  useScrollToTop();
  return (
    <div id="about-page">
      <Helmet>
        <title>ABOUT - MANIFEST AI</title>
      </Helmet>
      <div className='py-5 py-md-0'>
          <AboutSection givenStyle={{height: '100vh'}} />
      </div>
    </div>
  )
}
