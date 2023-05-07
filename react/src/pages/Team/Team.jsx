import React from 'react'
import './Team.css'
import TeamSection from '../../components/TeamSection/TeamSection'
import useScrollToTop from '../../hooks/useScrollToTop'

export default function Team() {
  useScrollToTop()
  return (
    <div id="team-page">
        <div className='py-5 py-md-0'>
            <TeamSection givenStyle={{marginTop: '55px'}} />
        </div>
    </div>
  )
}
