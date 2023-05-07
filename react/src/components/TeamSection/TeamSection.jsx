import React, { useRef, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './TeamSection.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Fade from 'react-reveal/Fade'


const teamMembers = [
  {
    name: 'Riad Lahlou',
    title: 'CEO & Cofounder',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum officia ullam deleniti assumenda quidem facilis neque sapiente eum consequatur repellendus!",
    image: 'https://www.complianceandethics.org/wp-content/uploads/2016/06/BRUCE-WEINSTEIN-THE-ETHICS-GUY-HALF-BODY-SHOT-1-1-e1467294422763.jpg',
  },
  {
    name: 'Aicha Arfate',
    title: 'CEO & Cofounder',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum officia ullam deleniti assumenda quidem facilis neque sapiente eum consequatur repellendus!",
    image: 'https://images.saymedia-content.com/.image/t_share/MTc2MjY1NDMzOTM3MjI0ODc3/square-face-women-celebrities.jpg',
  }
];

export default function TeamSection({givenStyle}) {
  return (
    <section id='team' style={givenStyle}>
        <div className="container py-5 h-100">
            <SectionTitle title={"Team"}  subTitle={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
            <div className="row align-items-center justify-content-center">
              {
                teamMembers.map((member, index) => {
                  return (
                    <Fade left={index === 0} right={index === 1}>
                      <div key={index} className="col-md-4 mb-4 mb-md-0 text-center">
                        <TeamMemberCard name={member.name} title={member.title} description={member.description} image={member.image} />
                      </div>
                    </Fade>
                  );
                })
              }
            </div>
        </div>
    </section>
  )
}




const TeamMemberCard = ({ name, title, description, image }) => {
  const cardRef = useRef();

  return (
    <Flippy
      ref={cardRef}
      flipOnHover={true}
      flipOnClick={false}
    //  style={{width: '295px'}}
     >
      <FrontSide style={{ padding: 0, }}>
        <div className="card bg-white m-0 py-5 h-100 w-100 d-flex align-items-center justify-content-center text-center">
          <img src={image} className="card-img-top rounded-circle img-fluid" style={{width: '130px', height: '130px'}} alt={name} />
          <div className="card-body align-items-center">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
            {/* <p className="card-text">{description}</p> */}
          </div>
        </div>
      </FrontSide>
      <BackSide style={{ padding: 0 }}>
        <div className="card m-0 py-4 h-100 w-100 d-flex align-items-center justify-content-center text-center">
          <div className="card-body align-items-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="card-link">Contact me</a>
          </div>
        </div>
      </BackSide>
    </Flippy>
    // <Flippy
    //     ref={ref}
    //     flipOnHover={false}
    //     flipOnClick={true}
    //     flipDirection="horizontal"
    //     style={{width: '100%'}} 
    // >
    //   <FrontSide style={{ padding: 0}} >
    //     <div className="card m-0 h-100 w-100 text-center">
    //       <img src={image} className="card-img-top rounded-circle w-50" alt={name} />
    //       <div className="card-body">
    //         <h5 className="card-title">{name}</h5>
    //         <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
    //         <p className="card-text">{description}</p>
    //       </div>
    //     </div>
    //     {/* <button onClick={() => { ref.current.toggle(); }}> Toggle via button</button> */}
    //   </FrontSide>
    //   <BackSide style={{ backgroundColor: '#175852'}}>
    //     ROCKS
    //   </BackSide>
    // </Flippy>
  );
};
