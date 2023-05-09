import React from 'react'
import './About.css'
import AboutSection from '../../components/AboutSection/AboutSection'
import useScrollToTop from '../../hooks/useScrollToTop'
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';

const aboutData = [
  {
    title: "Ethical AI Development",
    descriptions: [
      "Design and implement AI systems with fairness and transparency",
      "Ensure AI solutions align with ethical principles and human values",
      "Promote responsible AI use to avoid unintended consequences",
      "Integrate privacy-by-design and security-by-design approaches",
      "Encourage collaboration among stakeholders to address ethical concerns"
    ],
    graphic: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Sustainable AI Solutions",
    descriptions: [
      "Leverage AI to optimize resource management and reduce waste",
      "Utilize AI-powered analytics for better decision-making in sustainability",
      "Develop AI models that support clean energy and green technologies",
      "Enhance environmental monitoring and forecasting using AI",
      "Drive sustainable innovation in various industries, such as agriculture and transportation"
    ],
    graphic: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Collaborative Innovation",
    descriptions: [
      "Foster a culture of collaboration to drive innovation in AI development",
      "Share knowledge and ideas across multidisciplinary teams",
      "Engage with partners and stakeholders to co-create impactful AI solutions",
      "Accelerate AI adoption by connecting with industry leaders and experts",
      "Cultivate a diverse and inclusive environment to inspire creative problem-solving"
    ],
    graphic: "https://images.pexels.com/photos/171198/pexels-photo-171198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "AI Research & Education",
    descriptions: [
      "Stay at the forefront of AI research to fuel cutting-edge solutions",
      "Empower individuals and organizations through AI-focused education",
      "Participate in conferences, workshops, and knowledge-sharing events",
      "Collaborate with academic institutions and research organizations",
      "Promote lifelong learning and upskilling in the field of AI"
    ],
    graphic: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];





export default function About() {
  useScrollToTop();
  return (
    <div id="about-page">
      <Helmet>
        <title>ABOUT - MANIFEST AI</title>
      </Helmet>
      <div className='py-5 py-md-0'>
          <AboutSection />
          <div className="container more-about">
            
            {
              aboutData.map((data, i) => {
                var graphicsFirst = i % 2 === 0;
                return <div key={i} className="more-about-row row justify-content-between align-items-center">
                  <Fade left={!graphicsFirst} right={graphicsFirst} cascade>
                    <div className={`more-about-text col-md-7 text-md-start text-center order-2 order-md-${graphicsFirst ? 2 : 1}`}>
                      <h3 className='mb-md-3 fw-bold'>{data.title}</h3>
                      {
                        data.descriptions.map((d, j) => <p key={j}>{d}</p>)
                      }
                    </div>
                  </Fade>
                  <Fade left={graphicsFirst} right={!graphicsFirst}>
                    <div className={`col-md-4 mb-3 mb-md-0 text-md-start text-center order-1 order-md-${graphicsFirst ? 1 : 2}`}>
                      <img src={data.graphic} className='more-about-img order-1 shadow-lg' />
                    </div>
                  </Fade>
                </div>
              })
            }
          </div>
      </div>
    </div>
  )
}
