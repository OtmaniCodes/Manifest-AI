import './Home.css'
import React, { Suspense, useRef, lazy } from 'react'
import whiteLogoEthics from '../../../assets/images/ma_logo_ethics.png'
import useScrollToTop from '../../../utils/custom-hooks/useScrollToTop'
import { Helmet } from 'react-helmet'
import { Zoom } from 'react-reveal'
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import VideoSection from '../../components/sections/VideoSection/VideoSection';
import AboutSection  from '../../components/sections/AboutSection/AboutSection';
import DirectivesSection from '../../components/sections/DirectivesSection/DirectivesSection';
import TeamSection  from '../../components/sections/TeamSection/TeamSection';
import ArticlesSection from '../../components/sections/ArticlesSection/ArticlesSection';
import ServicesSection from '../../components/sections/ServicesSection/ServicesSection';
import JobOffersSection from '../../components/sections/JobOffersSection/JobOffersSection';
import ContactSection from '../../components/sections/ContactSection/ContactSection';


// make  sure tt alis walking for us


import SplashLoader from '../../components/SplashLoader/SplashLoader';
// import { manifestoData } from '../../../constants/data';
import AIQuestionSection from '../../components/sections/AIQuestionsSection/AIQuestionSection';
import { useDataSource } from '../../../state/data-provider';

// Dynamically importing the sections
// const HeroSection = lazy(() => import('../../components/sections/HeroSection/HeroSection'));
// const VideoSection = lazy(() => import('../../components/sections/VideoSection/VideoSection'));
// const AboutSection = lazy(() => import('../../components/sections/AboutSection/AboutSection'));
// const DirectivesSection = lazy(() => import('../../components/sections/DirectivesSection/DirectivesSection'));
// const TeamSection = lazy(() => import('../../components/sections/TeamSection/TeamSection'));
// const ArticlesSection = lazy(() => import('../../components/sections/ArticlesSection/ArticlesSection'));
// const ServicesSection = lazy(() => import('../../components/sections/ServicesSection/ServicesSection'));
// const JobOffersSection = lazy(() => import('../../components/sections/JobOffersSection/JobOffersSection'));
// const ContactSection = lazy(() => import('../../components/sections/ContactSection/ContactSection'));




export default function Home() {
  useScrollToTop() 

  return (
    <div id='home-page'>
        {/* <Suspense fallback={<SplashLoader/>}> */}
            <HeroSection/>
            <VideoSection/>
            <AboutSection/>
            <AIQuestionSection/>
            <div style={{height: '60px', width: '100%', background: '#002C36'}}></div>
            <ServicesSection/>
            <div style={{height: '160px', width: '100%', background: '#002C36'}}></div>
            <DirectivesSection/>
            <TeamSection/>
            <TakeAnAction/>
            <ArticlesSection/>
            <JobOffersSection/>
            <MakeSthGreater/>
            <ContactSection/>
            {/* <CityLottie/> */}
        {/* </Suspense> */}
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
                    {/* <p className="h2">&ldquo;ALWAYS INNOVATING WITH ETHICS&rdquo;</p> */}
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

// function CityLottie() {
//   const lottieRef = useRef();
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: lottieAsset,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return (
//     <div className="city-lottie" style={{background: '#F9F9F9'}}>
//         <Lottie options={defaultOptions} ref={lottieRef} />
//     </div>
//   )
// }
