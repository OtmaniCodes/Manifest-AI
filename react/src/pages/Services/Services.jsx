import React from 'react';
import Service from '../../components/Service/Service';
import './Services.css'
import consulting from '../../assets/services/consulting.webp'
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Services = () => {
  return (
	<section className="section-services">
		<div className="container">
			<div className="row justify-content-center text-center">
          <SectionTitle title={"Exclusive Services"} subTitle={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
			</div>

			<div className="row">
				<Service 
                title={'Consulting'} 
                desc={'Small description about consulting!!'}
                image={'https://static1.s123-cdn-static-a.com/ready_uploads/media/19472/2000_5cdbb33416b39.jpg'}
                icon={''}
                />
				<Service 
                title={'SUSTAINABILITY'} 
                desc={'Small description about SUSTAINABILITY!!'}
                image={'https://static1.s123-cdn-static-a.com/ready_uploads/media/53733/2000_5ce3c1231b659.jpg'}
                icon={''}
                />
				<Service 
                title={'AI TECHNOLOGY'} 
                desc={'Small description about AI TECHNOLOGY!!'}
                image={'https://static1.s123-cdn-static-a.com/uploads/7883034/2000_64494c20e694e.png'}
                icon={''}
                />
			</div>
		</div>
	</section>

  );
};

export default Services;
