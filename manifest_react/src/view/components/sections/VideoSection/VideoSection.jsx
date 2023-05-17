import './VideoSection.css'
import React, { useEffect, useRef } from 'react'
import videoIntro from '../../../../assets/videos/video-intro.mp4'
import MainTitle from '../../MainTitle/MainTitle';
import GradientTitle from '../../GradientTitle/GradientTitle';
import { Fade, Slide } from 'react-reveal';

export default function VideoSection() {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.play();
    }
  }, []);
  return (

    <section id='video-section'>
        <div className="container">
            <GradientTitle title={"INTRODUCING MANIFEST AI"} alignStart={true}/>
            <div className='my-4'></div>
            <div className="row justify-content-center align-items-start">
                <div className="col-md-10">
                    <div className="video-container d-flex justify-content-center">
                        <Slide right>
                            <div className="blue-border"></div>
                        </Slide>
                        <Slide left>
                            <div className="green-border"></div>
                        </Slide>
                        <Fade>
                            <video ref={videoRef} className="video-intro" autoPlay preload loop muted playsinline controls>
                                <source src={videoIntro} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}
