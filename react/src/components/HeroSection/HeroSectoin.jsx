import React from "react";
import "./HeroSection.css"
import whiteBgLogo from "../../assets/images/white-logo.png";
import dotsWeb from "../../assets/images/dots-web.png";
import Fade from 'react-reveal/Fade'

export default function HeroSection() {
  return (
    <section id='hero'>
        <img className='dots-web' src={dotsWeb} />
        <div className="container h-100">
            <div className="row h-100 justify-content-between align-items-center order-2 order-md-1">
                <Fade duration={1000} top cascade >
                <div className="col-md-6 text-center text-md-start order-2 order-md-1">
                    <h6>Consulting, Sustainabiliy, AI TECH.</h6>
                    <h1>INNOVATING SOLUTIONS FOR A BETTER WORLD</h1>
                        <div className="d-flex justify-content-center justify-content-md-start mt-5">
                                <button class="global-btn">Join our journey</button>
                        </div>
                </div>
                </Fade>
                <div className="col-md-4 text-center order-1 order-md-2 mb-5 mb-md-0">
                        <img className='white-logo' src={whiteBgLogo} alt="logo"/>
                </div>
            </div>
        </div>
    </section>
  );
}