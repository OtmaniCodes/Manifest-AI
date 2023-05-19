import './HeroSection.css';
import maBlueBrain from '../../../../assets/images/ma_blue_bg.png';
import React, { useEffect, useState } from 'react';
import { Fade, Slide, Zoom } from 'react-reveal';
import maBrain from '../../../../assets/images/ma_white_brain_logo.svg'
import { useFirstLoadState } from '../../../../state/first-load-state-provider';

// ma => manifest ai

export default function HeroSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFlatHero, setIsFlatHero] = useState(false);
  const {isFirstLoad, setIsFirstLoad} = useFirstLoadState();

  useEffect(() => {
    const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        const screenHeight = window.innerHeight;
        setIsFlatHero((currentPosition + (screenHeight * (2/3))) > screenHeight);
        setScrollPosition(currentPosition);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition])


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
      <section id='hero-section' className={`${isFlatHero ? 'flat' : ''}`} style={{animation: isFirstLoad ? 'revealSection 1.6s ease-in-out forwards' : null}}>
        <div className="container h-100 d-flex flex-column justify-content-end align-items-center text-center">
          {
            isFirstLoad ? (
              <Fade bottom duration={500} delay={800}>
                <img className='brain-logo' src={maBrain} alt="white brain logo" />
              </Fade>
            ) : (
              <img className='brain-logo' src={maBrain} alt="white brain logo" />
            )
          }
          {
            isFirstLoad ? (
              <Fade bottom duration={500} delay={1000}>
                <h1>MANIFEST AI</h1>
              </Fade>
            ) : (
              <h1>MANIFEST AI</h1>
            )
          }
          {
            isFirstLoad ? (
            <Fade bottom duration={500} delay={1200}>
              <h2 className="">
                  <span>Elevate Your Potential</span>
                  <span className='d-flex justify-content-center align-items-center m-0'>
                    <i className='spike-triangle to-left'></i>
                    <span className='mx-md-4 mx-4'>Enhance The Future</span>
                    <i className='spike-triangle to-right'></i>
                  </span>
              </h2>
            </Fade>
            ) : (
              <h2 className="">
                  <span>Elevate Your Potential</span>
                  <span className='d-flex justify-content-center align-items-center m-0'>
                    <i className='spike-triangle to-left'></i>
                    <span className='mx-md-4 mx-4'>Enhance The Future</span>
                    <i className='spike-triangle to-right'></i>
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
                    <p>Harnessing the power of ai to create a sustainable and equitable future.</p>
                  </div>
                  <div className='data'>
                    <h3>Our Vision</h3>
                    <p>Unleashing the potential of ai to address global challenges and foster positive change.</p>
                  </div>
                  <div className='data'>
                    <h3>Contact Us</h3>
                    <p>Together we can shape a brighter future, connect with us and join the ai revolution.</p>
                  </div>
                </div>
              </Slide>
            ) : (
              <div className='more-data px-5'>
                <div className='data'>
                  <h3>What we Do</h3>
                  <p>Harnessing the power of ai to create a sustainable and equitable future.</p>
                </div>
                <div className='data'>
                  <h3>Our Vision</h3>
                  <p>Unleashing the potential of ai to address global challenges and foster positive change.</p>
                </div>
                <div className='data'>
                  <h3>Contact Us</h3>
                  <p>Together we can shape a brighter future, connect with us and join the ai revolution.</p>
                </div>
              </div>
            )
          }
        </div>
      </section>
      {
        isFlatHero && (
          <Zoom duration={500} delay={200}>
            <img className='blue-logo' src={maBlueBrain} alt="manifest ai logo" />
          </Zoom>
        )
      }
    </>
  )
}
