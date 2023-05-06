import React from 'react'
import './Team.css'
import TeamSection from '../../components/TeamSection/TeamSection'

export default function Team() {
  return (
    <div id="team-page">
        <div className='py-5 py-md-0'>
            <TeamSection givenStyle={{marginTop: '55px'}} />
        </div>
    </div>
  )
}
