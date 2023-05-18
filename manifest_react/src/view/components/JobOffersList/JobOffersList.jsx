import './JobOffersList.css'
import React, { useEffect, useState } from 'react'
import OfferSubmitPopup from './OfferSubmitPopup/OfferSubmitPopup'
import { Fade } from 'react-reveal';

export default function JobOffersList({jobOffersData}) {
  const [selectedJob, setSelectedJob] = useState(jobOffersData[0]);

  const [leftSectionActive, setLeftSectionActive] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const toggleLeftSection = () => {
    setLeftSectionActive(!leftSectionActive);
  };
  
  const handleShowForm = () => {
      setShowForm(true);
  }

  const handleCloseForm = () => {
      setShowForm(false);
  }

  if (!jobOffersData || !selectedJob) {
    return <p>No Job Offers For Available!</p>
  }
  
  return (
    <>
        <Fade>
            <div className="row job-section-wrapper shadow-lg border">
                <div className={`col-md-4 left-section d-md-block ${leftSectionActive ? '' : 'd-none'}`} onClick={toggleLeftSection}>
                    <div className="job-list border-bottom">
                    <div className="jobs-header">Profiles We're Looking For</div> {/* Add this line */}
                    {jobOffersData.map((job, index) => (
                        <div
                        key={index}
                        className={`job-item list-group-item ${
                            selectedJob.id === job.id ? 'active' : ''
                        }`}
                        onClick={() => setSelectedJob(job)}
                        >
                        <div className="job-icon">
                            <img src={job.icon} alt={job.title}/>
                        </div>
                        <div className='job-info'>
                            <h5>{job.title}</h5>
                            <small>{job.location}</small>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                <div className={`col-md-8 right-section d-md-block ${!leftSectionActive ? '' : 'd-none'} pb-5`}>
                    <button onClick={toggleLeftSection} className="back-button d-md-none text-muted px-0">
                        {/* <FaArrowLeft className="back-icon " /> */}
                        Back
                    </button>
                    
                    <div className='d-flex flex-md-row flex-column justify-content-between align-items-md-center align-items-start mb-5'>
                        <h2>{selectedJob.title}</h2>
                        <button id='apply-now' className="global-btn" onClick={handleShowForm}>Apply Now</button>
                    </div>
                    <h5>{selectedJob.location}</h5>
                    <p>{selectedJob.date}</p>
                    <p>{selectedJob.description}</p>
                    <h4>Requirements:</h4>
                    <ul className="list-unstyled">
                    {selectedJob.requirements.map((req, index) => (
                        <li key={index}>
                        <i className="bi bi-check2"></i> {req}
                        </li>
                    ))}
                    </ul>
                    <h4>Responsibilities:</h4>
                    <ul className="list-unstyled">
                    {selectedJob.responsibilities.map((resp, index) => (
                        <li key={index}>
                        <i className="bi bi-check2"></i> {resp}
                        </li>
                    ))}
                    </ul>
                    
                </div>
            </div>
        </Fade>
        {showForm && <OfferSubmitPopup close={handleCloseForm}/>}
    </>
  )
}

















