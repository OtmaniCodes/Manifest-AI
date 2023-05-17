import { Helmet } from 'react-helmet'
import useScrollToTop from '../../../utils/custom-hooks/useScrollToTop'
import TeamSection from '../../components/sections/TeamSection/TeamSection'
import './Team.css'

import React from 'react'

export default function Team() {
  useScrollToTop() 

  return (
    <div className="team-page pt-5">
        <Helmet>
          <title>TEAM - MANIFEST AI</title>
        </Helmet>
        <TeamSection/>
    </div>
  )
}
