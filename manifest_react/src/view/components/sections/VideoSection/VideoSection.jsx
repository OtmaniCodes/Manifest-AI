import './VideoSection.css'
import React, { useEffect, useRef } from 'react'
import GradientTitle from '../../GradientTitle/GradientTitle';
import { Fade } from 'react-reveal';
// import bgVideo from '../../../../assets/videos/video-intro.mov'
import bgVideo from '../../../../assets/videos/video-intro.mp4'

export default function VideoSection() {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.play();
    }
  }, []);
  return (

    <section id='video-section'>
        <div className="container-fluid">
            <GradientTitle title={"INTRODUCING MANIFEST AI"} alignStart={false}/>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <Fade>
                    <video ref={videoRef} className="video-intro" autoPlay preload loop muted playsinline controls>
                        <source src={bgVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </Fade>
                </div>
            </div>
        </div>
    </section>

  )
}
