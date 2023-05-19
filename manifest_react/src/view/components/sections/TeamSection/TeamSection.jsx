import './TeamSection.css'
// import { teamMembersDara } from '../../../../constants/data';
import React from 'react'
import MainTitle from '../../MainTitle/MainTitle'
import { Fade } from 'react-reveal';
import { useDataSource } from '../../../../state/data-provider';

export default function TeamSection() {
  var {loading,sections,teams} = useDataSource();
  sections=sections[0]
  return (
    <section id="team-section">
        <div className="container">
            <MainTitle title={"MEET THE TEAM"} colo subTitle={!loading && sections.team_description} color={"#22B4D7"} splitMargin={20}/>
            <Fade cascade bottom duration={500}> 
              <div className="row align-items-center justify-content-center py-5">
                {
                  teams.map((member, index) => {
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
  const {name, position, description, image} = teamMember;
  return (
    <div className="team-member-card d-flex flex-column justify-content-center align-items-center text-center">
        <img src={image} width={250} height={250}/>
        <h3>{name}</h3>
        <p>{position}</p>
    </div>
  )
}

// function TeamMemberCard({teamMember}) {
//   const {name, position, description, image} = teamMember;
//   return (
//     <div className="team-member-card d-flex flex-column justify-content-center align-items-center text-center">
//         <img src={image} width={90} height={90} className="rounded-circle mb-3" />
//         <h3>{name}</h3>
//         <h4>{position}</h4>
//         <p>{description}</p>
//     </div>
//   )
// }
