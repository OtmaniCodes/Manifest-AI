import React, { useEffect, useState } from 'react';
import Service from '../../components/Service/Service';
import './Services.css'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import services from './data';
import useScrollToTop from '../../hooks/useScrollToTop';
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet';
import servicesData from './data';

const Services = (full) => {
  useScrollToTop()
  const [clickedServiceIndex, setClickedServiceIndex] = useState(null);

  const handleServiceClick = (index) => {
    setClickedServiceIndex(index);
  }
  
  const selectedService = clickedServiceIndex !== null ? servicesData.find((serviceData) => serviceData.id === clickedServiceIndex + 1) : null;

  return (
	<section className="section-services" style={{marginTop:full.full?'60px':''}}>
    <Helmet>
        <title>SERVICES - MANIFEST AI</title>
    </Helmet>
		<div className="container">
			<div className="row justify-content-center text-center">
          <SectionTitle title={"Exclusive Services"} subTitle={"AI-powered Solutions for a Better Future: Our team at Manifest AI is dedicated to harnessing the power of AI to solve real-world problems and create a more sustainable and equitable future."}/>
			</div>
			<Fade top cascade>
        <div className="row justify-content-center">
          {servicesData.map((e,i)=>(
            <div className="col-md-3 text-center align-items-center justify-content-center">
              <Service
                id={e.id}
                index = {i}
                onServiceClick={(i) => handleServiceClick(i)}
                service = {e}
              />
            </div>
          ))}
        </div>
      </Fade>
        {
          (selectedService) &&
          (
            <div className="active-bar-container d-flex justify-content-between align-items-center">
              <div className={`active-bar mx-2 ms-0`} style={{opacity: clickedServiceIndex === 0 ? 1 : 0}}></div>
              <div className={`active-bar mx-2`} style={{opacity: clickedServiceIndex === 1 ? 1 : 0}}></div>
              <div className={`active-bar mx-2`} style={{opacity: clickedServiceIndex === 2 ? 1 : 0}}></div>
              <div className={`active-bar mx-2 me-0`} style={{opacity: clickedServiceIndex === 3 ? 1 : 0}}></div>
            </div>
          )
        }
        {
          (selectedService) &&
          (
              <div className="tab-content row justify-content-center align-items-center mt-5">
              <Fade bottom cascade duration={400} key={clickedServiceIndex}>
                <div className="col-md-11 text-start">
                  <h4 className='tab-content-title'>{selectedService.title}</h4>
                  <p className='tab-content-desc'>{selectedService.bigDescription}</p>
                  <div className="service-steps">
                      <div className='list-service'>
                        <div className="row justify-content-center">
                          {selectedService.list.map((e,i)=>(
                            <div className="mb-1">
                              <p key={i}>{e}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                  </div>
                </div>
              </Fade>
              </div>
          )
        }
		</div>
	</section>

  );
};

export default Services;
