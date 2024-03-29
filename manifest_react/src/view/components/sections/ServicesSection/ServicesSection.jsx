import './ServicesSection.css'
import React, { useState } from 'react'
import bgGif from '../../../../assets/gifs/windmills-bg.gif';
import GradientTitle from "../../GradientTitle/GradientTitle";
import ServiceCard from '../../ServiceCard/ServiceCard';
import { Fade } from 'react-reveal';
import { useDataSource } from '../../../../state/data-provider';


export default function ServicesSection() {
  const [serviceIndex, setServiceIndex] = useState(null)
  var {services, loading, sections} = useDataSource();
  sections = sections[0];


  const handleServiceClick = (index) => {
      setServiceIndex(index);
  }

  const handleServiceClose = () => {
      setServiceIndex(null);
  }

  return (
    <section id='services-section'>
      <img src={bgGif} className='gif-asset-bg'/>
      <div className="trans-layer"></div>
      <div className="services-container">
        <div className='services-content'>
          <GradientTitle title={!loading&&sections.our_services_title} subTitle={!loading && sections.services_description}/>
          {loading && <p>Loading services...</p>}
          {!loading && 
            <Fade cascade bottom duration={500}>
              <div className="row justify-content-center mt-5">
                {services.map((s, i) => (
                  <div className="col-12 col-md-6 col-lg-3 text-center" key={i}>
                    <ServiceCard
                      index={i}
                      service={s}
                      isSelected={i === serviceIndex}
                      onServiceClicked={handleServiceClick}
                      onServiceClosed={handleServiceClose}
                    />
                  </div>
                ))}
              </div>
            </Fade>
          }
        </div>
      </div>
    </section>
  )
}
