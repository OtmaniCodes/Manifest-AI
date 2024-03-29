import { Fade } from 'react-reveal'
import useScrollToTop from '../../../utils/custom-hooks/useScrollToTop'
import AboutSection from '../../components/sections/AboutSection/AboutSection'
import './About.css'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useDataSource } from '../../../state/data-provider'

export default function About() {
  useScrollToTop() 
  var {loading, aboutContent} = useDataSource();


  return (
    <div className="about-page pt-5">
        <Helmet>
          <title>ABOUT - MANIFEST AI</title>
        </Helmet>
        <AboutSection/>
        <div className="container more-about pt-5">
          {
            aboutContent.map((data, i) => { 
              var graphicsFirst = i % 2 !== 0;
              return <div key={i} className="more-about-row row justify-content-between align-items-center">
                
                <Fade left={!graphicsFirst} right={graphicsFirst} cascade duration={500}>
                  <div className={`more-about-text col-md-7 text-md-start text-center order-2 order-md-${graphicsFirst ? 2 : 1}`}>
                    <h3 className='mb-md-3'>{data.title}</h3>
                    {
                      data.body.map((d, j) => <p key={j}>{d}</p>)
                    }
                  </div>
                </Fade>
                <Fade left={graphicsFirst} right={!graphicsFirst} duration={500}>
                  <div className={`col-md-4 mb-3 mb-md-0 text-md-start text-center order-1 order-md-${graphicsFirst ? 1 : 2}`}>
                    <img src={data.image} className='more-about-img order-1 shadow-lg' />
                  </div>
                </Fade>
              </div>
            })
          }
        </div>
    </div>
  )
}
