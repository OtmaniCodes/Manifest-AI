import './ServicesSection.css'
import React, { useState } from 'react'

import bgVideo from '../../../../assets/videos/bg-video-1.mp4';
import bgGif from '../../../../assets/gifs/windmills-bg.gif';

import GradientTitle from "../../GradientTitle/GradientTitle";
import { servicesData } from '../../../../constants/data';
import ServiceCard from '../../ServiceCard/ServiceCard';
import { Fade } from 'react-reveal';

export default function ServicesSection() {
  const [serviceIndex, setServiceIndex] = useState(null)


  const handleServiceClick = (index) => {
      setServiceIndex(index);
  }

  const handleServiceClose = () => {
      setServiceIndex(null);
  }

  return (
    <section id='services-section'>
      <img src={bgGif}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          // left: '50%',
          // top: '50%',
          objectFit: 'cover',
          // transform: 'translate(-50%, -50%)',
          zIndex: '0',
          pointerEvents: 'none',
        }}
      />
      {/* <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          // left: '50%',
          // top: '50%',
          objectFit: 'cover',
          // transform: 'translate(-50%, -50%)',
          zIndex: '0',
          pointerEvents: 'none',
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video> */}
      <div className="trans-layer"></div>
      <div className="services-container">
        <div className='services-content'>
          <GradientTitle title={"OUR SERVICES"} subTitle={"Our Purpose Is To Deliver Results In Service And Excution"}/>
           <Fade bottom duration={500}>
            <div className="d-flex flex-md-row flex-column justify-content-center mt-5">
              {servicesData.map((s,i)=>(
                <ServiceCard index={i} service={s} isSelected={i === serviceIndex} onServiceClicked={handleServiceClick} onServiceClosed={handleServiceClose}/>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
