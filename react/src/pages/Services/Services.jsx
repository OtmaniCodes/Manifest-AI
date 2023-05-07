import React from 'react';
import Service from '../../components/Service/Service';
import './Services.css'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import services from './data';
import useScrollToTop from '../../hooks/useScrollToTop';
const Services = (full) => {
  useScrollToTop()
  
  return (
	<section className="section-services" style={{marginTop:full.full?'60px':''}}>
		<div className="container">
			<div className="row justify-content-center text-center">
          <SectionTitle title={"Exclusive Services"} subTitle={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
			</div>
			<div className="row">
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
		</div>
	</section>

  );
};

export default Services;
