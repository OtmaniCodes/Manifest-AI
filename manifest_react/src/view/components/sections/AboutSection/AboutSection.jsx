import './AboutSection.css'
import aboutImg from '../../../../assets/images/about.webp'

import React from 'react'
import GradientTitle from '../../GradientTitle/GradientTitle'
import MainTitle from '../../MainTitle/MainTitle'
import ResponsiveCompo from '../../responsive-compo';
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'

export default function AboutSection() {
    
    const renderLeftSide = () => {
        return (
            <div className="col-md-5 pe-md-5">
                <img className='about-img' src={aboutImg} alt="about us image" />
            </div>
        )
    }

    const renderRightSide = () => {
        return (
            <div className="col-md-7 right-part">
                <ResponsiveCompo desktopChild={<GradientTitle alignStart={true} title={"ABOUT US"}/>} />
                <h2 className='about-text text-md-start text-center'>We Use Ethical AI Development for a Better Future</h2>
                <p className="about-text text-md-start text-center">
                    At Manifest AI, we're a team of enthusiasts who
                    are passionate about using technology to create a more
                    sustainable and equitable future.
                </p>
                <p className="about-text text-md-start text-center">
                    We believe that AI has the potential to solve some
                    of the world's most pressing challenges, and we're
                    committed to making this vision a reality.
                </p>
                <p className="about-text text-md-start text-center mb-5">
                    Our culture is built around collaboration, innovation,
                    and a relentless pursuit of knowledge.
                    We're always exploring new ideas and pushing
                    the boundaries of what's possible with AI.
                </p>
                <div className="d-flex flex-md-row flex-column justify-content-between align-items-center w-100 px-md-3">
                    <MainTitle color={'#41B79B'} title={'READ OUR MANIFEST'} asLink={true} to={'/manifest'}/>
                    <MainTitle color={'#22B4D7'} title={'REACH OUT'} asLink={true} to={'/contact'}/>
                    {/* <Link id='manifest-btn' className="global-btn-white" to={'/manifest'} style={{flex: 2}}>READ OUR MANIFEST</Link>
                    <Link id='manifest-btn' className="global-btn" to={'/contact'} style={{flex: 1}}>REACH OUT</Link> */}
                </div>
                {/* <ResponsiveCompo desktopChild={<MainTitle title={'READ OUR MANIFEST'} asLink={true} to={'/manifesto'} alignEnd={true} sizeFactor={3}/>}/> */}
                {/* <ResponsiveCompo mobileChild={<MainTitle title={'READ OUR MANIFEST'} asLink={true} to={'/manifesto'}/>}/> */}
            </div>
        );
    }

    return (
    <section id='about-section'>
        <div className="side-white-bg"></div>
        <div className="container about-content">
            <ResponsiveCompo mobileChild={<GradientTitle title={"ABOUT US"}/>} />
            <div className="row align-items-start justify-content-center h-100 text-center">
                <ResponsiveCompo
                    desktopChild={
                        <Fade left cascade duration={500}>
                            {renderLeftSide()}
                        </Fade>
                    }
                />
                <ResponsiveCompo
                    mobileChild={
                        <Fade bottom cascade duration={500}>
                            {renderLeftSide()}
                        </Fade>
                    }
                />
                <ResponsiveCompo
                    desktopChild={
                        <Fade right cascade duration={500}>
                            {renderRightSide()}
                        </Fade>
                    }
                />
                <ResponsiveCompo
                    mobileChild={
                        <Fade bottom cascade duration={500}>
                            {renderRightSide()}
                        </Fade>
                    }
                />
            </div>
        </div>
    </section>
  )
}
