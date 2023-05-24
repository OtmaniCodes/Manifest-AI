import './HeroSection.css';
import React, { useEffect, useRef, useState } from 'react';
import { Fade, Slide, Zoom } from 'react-reveal';
import heroVidBg from '../../../../assets/hero-bg-vid.mp4'
import { useFirstLoadState } from '../../../../state/first-load-state-provider';
import { useDataSource } from '../../../../state/data-provider';

// ma => manifest ai

export default function HeroSection() {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [isFlatHero, setIsFlatHero] = useState(false);
  const {isFirstLoad, setIsFirstLoad} = useFirstLoadState();
  var {loading,sections} = useDataSource();
  sections=sections[0]
  const bgVidRef = useRef();
  // console.log(sections)

  // useEffect(() => {
  //   const handleScroll = () => {
  //       const currentPosition = window.pageYOffset;
  //       const screenHeight = window.innerHeight;
  //       setIsFlatHero((currentPosition + (screenHeight * (2/3))) > screenHeight);
  //       setScrollPosition(currentPosition);
  //   }
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [scrollPosition])


  useEffect(() => {
    let timeoutId;
    if(isFirstLoad){
      timeoutId = setTimeout(() => setIsFirstLoad(false), 2000);
    }
    return () => {
      clearTimeout(timeoutId);
    }
  }, []);


  return (
    <>
      {/* <section id='hero-section' className={`${isFlatHero ? 'flat' : ''}`} style={{animation: isFirstLoad ? 'revealSection 1.6s ease-in-out forwards' : null}}> */}
      <section id='hero-section'>
        {/* <img src={bgImgVid} alt="" /> */}
        <video ref={bgVidRef} autoPlay preload loop muted playsinline
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            objectFit: 'cover',
            zIndex: '0',
            pointerEvents: 'none',
          }}>
            <source src={heroVidBg} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="trans-layer"></div>
        <div
          // style={{position: 'absolute', zIndex: '10'}}
          className="container h-100 d-flex flex-column justify-content-end align-items-center text-center">
          {
            isFirstLoad ? (
              <Fade bottom duration={500} delay={200}>
                <img className='brain-logo' src={!loading && sections.logo_home} alt="manifest ai logo" />
              </Fade>
            ) : (
              <img className='brain-logo' src={!loading && sections.logo_home} alt="manifest ai logo" />
            )
          }
          {
            isFirstLoad ? (
              <Fade bottom duration={500} delay={400}>
                <h1>MANIFEST AI</h1>
              </Fade>
            ) : (
              <h1>MANIFEST AI</h1>
            )
          }
          {
            isFirstLoad ? (
            <Fade bottom duration={500} delay={600}>
              <h2 className="">
                  {/* <span>{!loading && sections.slogan1}</span> */}
                  <span className='d-flex justify-content-center align-items-center m-0'>
                    <i className='spike-triangle to-left'></i>
                    <span className='mx-md-4 mx-4'>{!loading && sections.slogan2}</span>
                    <i className='spike-triangle to-right'></i>
                  </span>
              </h2>
            </Fade>
            ) : (
              <h2 className="">
                  {/* <span>{!loading && sections.slogan1}</span> */}
                  <span className='d-flex justify-content-center align-items-center m-0'>
                    {/* <i className='spike-triangle to-left'></i> */}
                    <i className='line'></i>
                    <span className='mx-2'>{!loading&&sections.slogan2}</span>
                    <i className='line'></i>
                    {/* <i className='spike-triangle to-right'></i> */}
                  </span>
              </h2>
            )
          }
          {
            isFirstLoad ? (
              <Slide bottom duration={500}>
                <div className='more-data px-5'>
                  <div className='data'>
                    <h3>What we Do</h3>
                    <p>{!loading&&sections.what_we_do}</p>
                  </div>
                  <div className='data'>
                    <h3>Our Vision</h3>
                    <p>{!loading&&sections.our_vision}</p>
                  </div>
                  <div className='data'>
                    <h3>Contact Us</h3>
                    <p>{!loading&&sections.contact_us}</p>
                  </div>
                </div>
              </Slide>
            ) : (
              <div className='more-data px-5'>
                <div className='data'>
                  <h3>What we Do</h3>
                  <p>{!loading&&sections.what_we_do}</p>
                </div>
                <div className='data'>
                  <h3>Our Vision</h3>
                  <p>{!loading&&sections.our_vision}</p>
                </div>
                <div className='data'>
                  <h3>Contact Us</h3>
                  <p>{!loading&&sections.contact_us}</p>
                </div>
              </div>
            )
          }
        </div>
      </section>
      {
        // isFlatHero && (
        //   <Zoom duration={500} delay={200}>
        //     <img className='blue-logo' src={maBlueBrain} alt="manifest ai logo" />
        //   </Zoom>
        // )
      }
    </>
  )
}
