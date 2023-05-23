import './JobOffersSection.css'
import React from 'react'
import GradientTitle from '../../GradientTitle/GradientTitle';
import JobOffersList from '../../JobOffersList/JobOffersList';
import bgGif from '../../../../assets/gifs/sunset-bg.gif';
import { useDataSource } from '../../../../state/data-provider';

export default function JobOffersSection() {
  var {loading,sections} = useDataSource();
  sections=sections[0]


  return (
    <section id="joboffers-section">
      <img src={bgGif} className='gif-asset-bg'/>
      <div className="trans-layer"></div>
      <div className="joboffers-content d-flex flex-column justify-content-center h-100">
        <GradientTitle title={!loading&&sections.job_offers_title} subTitle={!loading && sections.jobs_description}/>
        <div className="d-flex justify-content-center w-100">
          {/* <JobOffersProvider> */}
            <JobOffersContainer/>
          {/* </JobOffersProvider> */}
          {/* sdsdsdsdsdsd */}
        </div>
      </div>
    </section>
  )
}

function JobOffersContainer() {
  // const {jobOffers, loading} = useJobOffers();
  const {jobOffers, loading} = useDataSource();

  if(loading){
    return <p>Loading...</p>
  }
  return (
    <JobOffersList jobOffersData={jobOffers}/>
  )
}
