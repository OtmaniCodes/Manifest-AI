import React, { useState } from 'react';
import './JobOffers.css';
import jobs from './data';
import PopUp from '../../components/PopUpForm/PopUp';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FaArrowLeft } from "react-icons/fa";
import useScrollToTop from '../../hooks/useScrollToTop';
import Fade from 'react-reveal/Fade'
import { Helmet } from 'react-helmet';
import bgVideo from "../../assets/bg-video.mp4"

const JobOffers = (full) => {
  // const pageStyling = {
  //   backgroundImage: "url('../../assets/images/all-bg.jpg')",
  //   backgroundSize: 'cover',
  //   backgroundAttachment: 'fixed',
  //   backgroundRepeat: 'noRepeat',
  //   marginTop: '55px'
  // }
  useScrollToTop()
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
    <div style={{position: 'relative'}} className={`job-section ${full.full ? 'page-view' : ''} pt-5 h-100`}>
      <Helmet>
        <title>JOB OFFERS - MANIFEST AI</title>
      </Helmet>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: '50%',
          top: '50%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-2',
          pointerEvents: 'none',
          filter: 'blur(1px)',
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <SectionTitle withBg={true} title={"Job Offers"} subTitle={"At Manifest AI, our passion for people, data, and clients is the driving force behind our commitment to excellence. We believe in providing our team members with fulfilling career opportunities, not just temporary jobs, and we know that a shared passion is the key to achieving this."} />
      {/* <Fade bottom> */}

        <div className="container mx-auto px-0 pb-5 mt-4 h-100">
          <div className="row job-section-wrapper shadow-lg border">
            <div className={`col-md-4 left-section d-md-block ${leftSectionActive ? '' : 'd-none'}`} onClick={toggleLeftSection}>
              
              <div className="job-list border-bottom">
              <div className="jobs-header">We're currently looking for</div> {/* Add this line */}
                {jobs.map((job, index) => (
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
                <button
                onClick={toggleLeftSection}
                className="back-button d-md-none text-muted px-0"
              >
                <FaArrowLeft className="back-icon " />
                Back
              </button>

              <div className='d-flex justify-content-between align-items-center'>
                <h2>{selectedJob.title}</h2>
                <button className="global-btn" onClick={handleShowForm}>Apply Now</button>
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
          {showForm && <PopUp close={handleCloseForm}/>}
        </div>
      {/* </Fade> */}
      </div>
  );
};

export default JobOffers;
