import "./HeroSection.css"
import React from "react";
import whiteBgLogo from "../../assets/images/white-logo.png";
import whiteBrain from "../../assets/images/white-brain.png";
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Typed from 'react-typed';
import { Link } from "react-router-dom";

export default function HeroSection() {

  function handleClickAbout() {
    const section = document.getElementById('About-section');
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <section id='hero'>  
        {/* <div id="shadow-bg"></div> */}
        {/* <img className='dots-web' src={dotsWeb} /> */}
        <div id="hero-content" className="container h-100">
          
            {/* <div className="row h-100 justify-content-between align-items-center order-2 order-md-1"> */}
            <div className="row h-100 justify-content-evenly align-items-center">
                <Fade duration={1000} top cascade >
                  
                  <div className="left-part col-md-7 text-center text-md-start order-2 order-md-1">
                      {/* <h6>Consulting, Sustainabiliy, AI TECH.</h6> */}
                      {/* <h1>INNOVATING SOLUTIONS FOR A BETTER WORLD</h1> */}
                      <Typed
                        className="title"
                        strings={['INNOVATING SOLUTIONS FOR A BETTER WORLD']}
                          typeSpeed={30}
                          loop={false} >
                      </Typed>
                      <h2>Empowering Businesses with Ethical and Sustainable AI Technologies</h2>
                      {/* <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start mt-5">
                          <button onClick={handleClickAbout} className="global-btn-white me-md-2 mb-2 mb-md-0" style={{backgroundColor: '#FFFFFFdd', color: 'black'}}>More About Us</button>
                          <Link to={'/manifesto'}>
                            <button className="global-btn-white" style={{backgroundColor: '#00000033'}} >Our Manifesto</button>
                         </Link>
                      </div> */}
                  </div>
                </Fade>
                <Fade duration={1000} cascade bottom>
                  <div className="right-part col-md-4 text-center order-1 order-md-2 mb-5 mb-md-0">
                    <Fade bottom>

                      <Link to={'/about'}>
                        <img className='white-logo' src={whiteBrain} alt="logo"/>
                      </Link>
                    </Fade>
                      <h3 className="h1">MANIFEST AI</h3>
                      <h5>INNOVATING WITH ETHICS</h5>
                    {/* <Zoom>
                        <img className='white-logo' src={whiteBgLogo} alt="logo"/>
                    </Zoom> */}
                  </div>
                </Fade>
            </div>
        </div>
    </section>
  );
}




// export default function HeroSection() {
//   return (
//     <section id='hero'>
    
//         {/* <div id="shadow-bg"></div> */}
//         <img className='dots-web' src={dotsWeb} />
//         <div id="hero-content" className="container-fluid p-0 m-0 h-100">
//             {/* <div className="row h-100 justify-content-between align-items-center order-2 order-md-1"> */}
//             <div className="row h-100 justify-content-between align-items-center">
//               <div className="col-md-7 text-center p-0" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
//               <Zoom>
//                 <Fade bottom cascade delay={100}>
//                   <div className="left-side">
//                     {/* <h6>Consulting, Sustainabiliy, AI TECH.</h6> */}
//                     <img className='brain-logo' src={brainLogo} alt="logo"/>
//                     <h1>INNOVATING SOLUTIONS FOR A BETTER WORLD</h1>
//                     <h2>Empowering Businesses with Ethical and Sustainable AI Technologies</h2>
//                     <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start mx-auto mt-3">
//                         <Link to={'/about'} className="me-md-2 m-0 mb-2 mb-md-0">
//                           <button className="global-btn">Learn More</button>
//                         </Link>
//                         <Link to={'/manofesto'}  className="ms-md-2 m-0">
//                           <button className="global-btn bg-full-btn">Our Manifesto</button>
//                         </Link>
//                     </div>
//                   </div>
//                 </Fade>
//               </Zoom>
//               </div>
//               <div className="col-md-5 p-0">
//                 <Fade right>
//                   <img src={techHeart} className="tech-heart" />
//                 </Fade>
//               </div>
//             </div>
//         </div>
//     </section>
//   );
// }