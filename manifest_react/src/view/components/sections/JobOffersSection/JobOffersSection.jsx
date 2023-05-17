import './JobOffersSection.css'
import bgVideo from '../../../../assets/videos/bg-video-1.mp4';
import React from 'react'
import GradientTitle from '../../GradientTitle/GradientTitle';
import JobOffersList from '../../JobOffersList/JobOffersList';
import bgGif from '../../../../assets/gifs/windmills-bg.gif';
import { JobOffersProvider, useJobOffers } from '../../../../state/joboffers-provider';

export default function JobOffersSection() {


  return (
    <section id="joboffers-section">
      {/* <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          // left: '50%',
          // top: '50%',
          objectFit: 'cover',
          // transform: 'translate(-50%, -50%)',
          zIndex: '0',
          pointerEvents: 'none',
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video> */}
        <img src={bgGif}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          // left: '50%',
          // top: '50%',
          objectFit: 'cover',
          // transform: 'translate(-50%, -50%)',
          zIndex: '0',
          pointerEvents: 'none',
        }}
      />
      <div className="trans-layer"></div>

      <div className="joboffers-content d-flex flex-column justify-content-center h-100">
        <GradientTitle title={"JOB OFFERS"} subTitle={"Our Mission Is To Deliver Results In Service And Excution"}/>
        <div className="d-flex justify-content-center w-100">
          {/* <JobOffersProvider> */}
            <JobOffersContainer/>
          {/* </JobOffersProvider> */}
        </div>
      </div>
    </section>
  )
}

function JobOffersContainer() {
  const {jobOffers, loading} = useJobOffers();

  if(loading){
    return <p>Loading...</p>
  }
  return (
    <JobOffersList jobOffersData={jobOffers}/>
  )
}
