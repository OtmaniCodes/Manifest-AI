import './HeroSection.css';
import React, { useEffect, useRef, useState } from 'react';
import { Fade, Slide, Zoom } from 'react-reveal';
import { useFirstLoadState } from '../../../../state/first-load-state-provider';
import { useDataSource } from '../../../../state/data-provider';
import bgImgVid from '../../../../assets/images/leaf_on_board_bg.png';

// ma => manifest ai

export default function HeroSection() {
  const {isFirstLoad, setIsFirstLoad} = useFirstLoadState();
  var {loading,sections} = useDataSource();
  sections=sections[0]

  useEffect(() => {
    let timeoutId;
    if(isFirstLoad){
      timeoutId = setTimeout(() => setIsFirstLoad(false), 2000);
    }
    return () => {
      clearTimeout(timeoutId);
    }
  }, []);


  const renderMoreDataCard = () => {
    return (
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
    );
  }

  return (
    <>
      <section id='hero-section'>
        <img
          src={bgImgVid} 
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
          }}/>
        <div className="trans-layer"></div>
        <div
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
                {renderMoreDataCard()}
              </Slide>
            ) : renderMoreDataCard()
          }
        </div>
      </section>
    </>
  )
}
