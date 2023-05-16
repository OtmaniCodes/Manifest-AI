import './TeamSection.css'
import { teamMembersDara } from '../../../../constants/data';
import React from 'react'
import MainTitle from '../../MainTitle/MainTitle'
import { Fade } from 'react-reveal';

export default function TeamSection() {
  return (
    <section id="team-section">
        <div className="container">
            <MainTitle title={"MEET THE TEAM"} colo subTitle={"Meet our team of dedicated professionals, Experts in AI development and passionate about making a positive social impact through their work."} color={"#22B4D7"} splitMargin={20}/>
            <Fade cascade bottom duration={500}>
              <div className="row align-items-center justify-content-center py-5">
                {
                  teamMembersDara.map((member, index) => {
                    return (
                      <div key={index} className="col-md-4 mb-4 mb-md-0">
                          <TeamMemberCard teamMember={member} />
                      </div>
                    );
                  })
                }
              </div>
            </Fade>
        </div>
    </section>
  )
}



function TeamMemberCard({teamMember}) {
  const {name, title, description, image} = teamMember;
  return (
    <div className="team-member-card d-flex flex-column justify-content-center align-items-center text-center">
        <img src={image} width={250} height={250}/>
        <h3>{name}</h3>
        <p>{title}</p>
    </div>
  )
}

// function TeamMemberCard({teamMember}) {
//   const {name, title, description, image} = teamMember;
//   return (
//     <div className="team-member-card d-flex flex-column justify-content-center align-items-center text-center">
//         <img src={image} width={90} height={90} className="rounded-circle mb-3" />
//         <h3>{name}</h3>
//         <h4>{title}</h4>
//         <p>{description}</p>
//     </div>
//   )
// }
