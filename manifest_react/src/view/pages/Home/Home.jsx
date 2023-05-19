import './Home.css'
import React, { useRef } from 'react'
import HeroSection from '../../components/sections/HeroSection/HeroSection'
import VideoSection from '../../components/sections/VideoSection/VideoSection'
import AboutSection from '../../components/sections/AboutSection/AboutSection'
import DirectivesSection from '../../components/sections/DirectivesSection/DirectivesSection'
import TeamSection from '../../components/sections/TeamSection/TeamSection'
import ArticlesSection from '../../components/sections/ArticlesSection/ArticlesSection'
import ServicesSection from '../../components/sections/ServicesSection/ServicesSection'
import JobOffersSection from '../../components/sections/JobOffersSection/JobOffersSection'
import MainTitle from '../../components/MainTitle/MainTitle'
import Lottie from "react-lottie";

import whiteLogoEthics from '../../../assets/images/ma_logo_ethics.png'

import ContactSection from '../../components/sections/ContactSection/ContactSection'
import lottieAsset from '../../../assets/55638-sustainability.json';
import useScrollToTop from '../../../utils/custom-hooks/useScrollToTop'
import { Helmet } from 'react-helmet'
import { Zoom } from 'react-reveal'
import { useDataSource } from '../../../state/data-provider'

export default function Home() {
  useScrollToTop() 

  return (
    <div id='home-page'>
        <HeroSection/>
        <div style={{marginTop: '160px'}}></div>
        <ServicesSection/>
        <AboutSection/>
        <VideoSection/>
        <DirectivesSection/>
        <TeamSection/>
        <TakeAnAction/>
        <ArticlesSection/>
        <JobOffersSection/>
        <MakeSthGreater/>
        <ContactSection/>
        <CityLottie/>
        <Helmet>
            <title>HOME - MANIFEST AI</title>
        </Helmet>
    </div>
  )
}



function TakeAnAction() {
  var {loading,sections} = useDataSource();
  sections=sections[0]
  return (
    <div className='take-action'>
        <div className="content container-fluid h-100">
        <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-10 text-center">
                {/* <Zoom> */}
                    {/* <img src={manifestBrain} alt={"Manifest AI Logo"}/> */}
                {/* </Zoom> */}
                {/* <Fade bottom> */}
                    <p className="h2">&ldquo;{!loading && sections.slogan3}&rdquo;</p>
                {/* </Fade> */}
            </div>
            </div>
        </div>
    </div>
  )
}

function MakeSthGreater() {
  return (
    <div className='make-sth-greater'>
      <div className="content">
        <div className="container-fluid h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-10 text-center px-5 px-md-2">
              <Zoom>
                <img src={whiteLogoEthics} height={160} className='greater-logo mb-3 mb-md-0' alt="Manifest AI logo" />
              </Zoom>
              {/* <MainTitle title={"Let’s Make Something Great Together"} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CityLottie() {
  const lottieRef = useRef();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieAsset,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="city-lottie">
        <Lottie options={defaultOptions} ref={lottieRef} />
    </div>
  )
}