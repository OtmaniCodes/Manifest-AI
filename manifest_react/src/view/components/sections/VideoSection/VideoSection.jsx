import './VideoSection.css'
import React, { useEffect, useRef } from 'react'
import GradientTitle from '../../GradientTitle/GradientTitle';
import { Fade } from 'react-reveal';
import { useDataSource } from '../../../../state/data-provider';

export default function VideoSection() {
  const videoRef = useRef();
  var {loading,sections} = useDataSource();
  sections=sections[0]

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.play();
    }
  }, []);
  return (

    <section id='video-section'>
        <div className="container-fluid">
            <GradientTitle title={!loading&&sections.video_title} alignStart={false}/>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <Fade>
                      {/* <VideoPlayer/> */}
                    <video ref={videoRef} className="video-intro" autoPlay preload loop muted playsinline controls>
                        <source src={`${import.meta.env.VITE_SERVER_URL}/videos/manifest.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </Fade>
                </div>
            </div>
        </div>
    </section>

  )
}
