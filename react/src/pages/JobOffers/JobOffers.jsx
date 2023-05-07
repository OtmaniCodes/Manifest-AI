// JobOffers.js
import React, { useState } from 'react';
import './JobOffers.css';
import jobs from './data';
import PopUp from '../../components/PopUpForm/PopUp';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FaArrowLeft } from "react-icons/fa";

const JobOffers = () => {
    
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [leftSectionActive, setLeftSectionActive] = React.useState(true);
  const toggleLeftSection = () => {
    setLeftSectionActive(!leftSectionActive);
  };
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
      setShowForm(true);
  }
  const handleCloseForm = () => {
      setShowForm(false);
  }
  return (
    <div className="job-section container h-100">
      <SectionTitle title={"Job Offers"} subTitle={"Check out our latest job opportunities."} />
      <div className="row job-section-wrapper border rounded shadow-sm" >
        <div className={`col-md-4 left-section d-md-block ${leftSectionActive ? '' : 'd-none'}`} onClick={toggleLeftSection}>
           
          <div className="job-list">
          <div className="jobs-header">Jobs We Are Offering</div> {/* Add this line */}
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`job-item list-group-item ${
                  selectedJob.id === job.id ? 'active' : ''
                }`}
                onClick={() => setSelectedJob(job)}
              >
                <img src={job.icon} alt={job.title} className="job-icon" />
                <div className='job-info'>
                  <h5>{job.title}</h5>
                  <small>{job.location}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`col-md-8 right-section d-md-block ${!leftSectionActive ? '' : 'd-none'}`}>
            <button
            onClick={toggleLeftSection}
            className="back-button d-md-none"
          >
            <FaArrowLeft className="back-icon" />
            Back
          </button>

          <h2>{selectedJob.title}</h2>
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
          <button className="global-btn" onClick={handleShowForm}>Apply Now</button>
        </div>
      </div>
      {showForm && <PopUp close={handleCloseForm}/>}
    </div>
  );
};

export default JobOffers;
