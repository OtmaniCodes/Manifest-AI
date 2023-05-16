import { Helmet } from 'react-helmet'
import useScrollToTop from '../../../utils/custom-hooks/useScrollToTop'
import JobOffersSection from '../../components/sections/JobOffersSection/JobOffersSection'
import './JobOffers.css'
import React from 'react'

export default function JobOffers() {
  useScrollToTop() 
  
  return (
    <div className="team-page pt-5">
        <Helmet>
          <title>JOB OFFERS - MANIFEST AI</title>
        </Helmet>
        <JobOffersSection/>
    </div>
  )
}
