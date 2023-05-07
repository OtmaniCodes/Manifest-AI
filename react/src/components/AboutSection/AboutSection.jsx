import React from 'react'
import './AboutSection.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import Fade from 'react-reveal/Fade'

// assets -----------------
import aboutImg from "../../assets/images/about.png";
import ResponsiveCompo from '../responsive-compo';

export default function AboutSection({givenStyle}) {
  return (
    <section id='about' style={givenStyle}>
        <div className="container py-5 h-100">
            <ResponsiveCompo mobileChild={ <SectionTitle title={"About"} alignStart={true}/>} />
            <div className="row align-items-center justify-content-center h-100">
                <Fade bottom cascade>
                    <div className="col-md-7 pe-md-4 order-2 order-md-1">
                        <ResponsiveCompo desktopChild={<SectionTitle title={"About"} />} />
                        <p className="about-text text-md-start text-center">
                            At Manifest AI, we're a team of enthusiasts who are passionate about using technology to create a more sustainable and equitable future. We believe that AI has the potential to solve some of the world's most pressing challenges, and we're committed to making this vision a reality.<br/>
                        </p>
                        <p className="about-text text-md-start text-center">
                            Our culture is built around collaboration, innovation, and a relentless pursuit of knowledge. We're always exploring new ideas and pushing the boundaries of what's possible with AI. 
                        </p>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="col-md-5 order-1 mb-5 mb-md-0 order-md-2">
                        <img className='about-img shadow-lg' src={aboutImg} alt="" />
                    </div>
                </Fade>
            </div>
        </div>
    </section>
  )
}
