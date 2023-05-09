import React from "react";
import "./HeroSection.css"
import whiteBgLogo from "../../assets/images/white-logo.png";
import dotsWeb from "../../assets/images/dots-web.png";
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import bgVideo from "../../assets/bgVideo.mp4"

export default function HeroSection() {
  return (
    <section id='hero'>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          // opacity: 0.4,
          zIndex: '-2',
          pointerEvents: 'none',
          filter: 'brightness(50%)',
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
        <div id="shadow-bg"></div>
        {/* <img className='dots-web' src={dotsWeb} /> */}
        <div id="hero-content" className="container h-100">
            <div className="row h-100 justify-content-between align-items-center order-2 order-md-1">
                <Fade duration={1000} top cascade >
                  <div className="left-part col-md-7 text-center text-md-start order-2 order-md-1">
                      <h6>Consulting, Sustainabiliy, AI TECH.</h6>
                      <h1>INNOVATING SOLUTIONS FOR A BETTER WORLD</h1>
                          <div className="d-flex justify-content-center justify-content-md-start mt-5">
                                  <button class="global-btn-white">Learn More</button>
                          </div>
                  </div>
                </Fade>
                <div className="col-md-4 text-center order-1 order-md-2 mb-5 mb-md-0">
                  <Zoom>
                      <img className='white-logo' src={whiteBgLogo} alt="logo"/>
                  </Zoom>
                </div>
            </div>
        </div>
    </section>
  );
}