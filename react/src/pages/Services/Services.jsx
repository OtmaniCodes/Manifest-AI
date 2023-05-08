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
  
  const selectedService = !isNaN(clickedServiceIndex) ? servicesData.find((serviceData) => serviceData.id === clickedServiceIndex + 1) : null;
  console.log(selectedService, 'selected');

  return (
	<section className="section-services" style={{marginTop:full.full?'60px':''}}>
    <Helmet>
        <title>SERVICES - MANIFEST AI</title>
    </Helmet>
		<div className="container">
			<div className="row justify-content-center text-center">
          <SectionTitle title={"Exclusive Services"} subTitle={"AI-powered Solutions for a Better Future: Our team at Manifest AI is dedicated to harnessing the power of AI to solve real-world problems and create a more sustainable and equitable future."}/>
			</div>
			{/* <Fade top cascade> */}
        <div className="row justify-content-center">
          {services.map((e,i)=>(
            <Service
              id={e.id}
              index = {i}
              onServiceClick={(i) => handleServiceClick(i)}
              title={e.title} 
              desc={e.desc} 
              image={e.image} 
              icon={e.icon} 
            />
          ))}
        </div>
        {
          (clickedServiceIndex >= 0) &&
          (
            <div className="tab-content row mt-5">
              <div className="col-md-11 text-start">
                <h4 className='tab-content-title'>{selectedService.title}</h4>
                <p className='tab-content-desc'>{selectedService.smallDescription}</p>
                <div className="service-steps">
                    {/* <h3 className="service-subtitle">How We Do Service 1</h3> */}
                    <ul className='list-service'>
                        {selectedService.list.map((e,i)=>(
                            <li key={i}>{e}</li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>
          )
        }
      {/* </Fade> */}
		</div>
	</section>

  );
};

export default Services;
