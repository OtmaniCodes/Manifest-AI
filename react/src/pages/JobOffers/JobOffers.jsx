// JobOffers.js
import React from 'react';
import './JobOffers.css';
import jobs from './data';
const JobOffers = () => {
    
  const [selectedJob, setSelectedJob] = React.useState(jobs[0]);

  const [leftSectionActive, setLeftSectionActive] = React.useState(true);
  const toggleLeftSection = () => {
    setLeftSectionActive(!leftSectionActive);
  };
  return (
    <div className="job-section container h-100">
      <div className="row border rounded shadow" >
        <div className={`col-md-4 left-section d-sm-block ${leftSectionActive ? '' : 'd-none'}`} onClick={toggleLeftSection}>
           
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
        <div className={`col-md-8 right-section d-sm-block ${!leftSectionActive ? '' : 'd-none'}`}>

            <button className="btn btn-primary d-md-none" onClick={toggleLeftSection}>Back</button>

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
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobOffers;
