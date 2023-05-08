import React from 'react';
import Service from '../../components/Service/Service';
import './Services.css'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import services from './data';
import useScrollToTop from '../../hooks/useScrollToTop';
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet';

const Services = (full) => {
  useScrollToTop()
  
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
          {services.map((e,i)=>(
            <Service
              id={e.id}
              title={e.title} 
              desc={e.desc} 
              image={e.image} 
              icon={e.icon} 
            />
          ))}
        </div>
      </Fade>
		</div>
	</section>

  );
};

export default Services;
