import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./OfferSubmitPopup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import axiosHttpClient from "../../../../services/http-client";


const OfferSubmitPopup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(false);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlemessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('resume', resume);

      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your Laravel server
      const response = await axiosHttpClient.post(`/job-applications`, formData);

      setLoading(false);
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setResume(null);
      toast.success('Your application was submitted successfuly! we will get back to you as soon as we can.', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong! please try again later', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    }
  };

  return (
    <div id="offer-submit-popup" className="modal pop-container" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Apply Now</h5>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  value={message}
                  onChange={handlemessageChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="resume">Resume</label>
                <input
                  type="file"
                  className="form-control"
                  id="resume"
                  accept=".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx"
                  onChange={handleResumeChange}
                  required
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={props.close}
                >
                  Close
                </button>
                <button type="submit" disabled={loading} className="btn btn-primary">
                  {loading?'Sending':'Apply Now'}
                </button>
              </div>
            </form>
            <div className="mt-3">
              <p>Contact us by email: <a href="mailto:contact@manifest-ai.com">contact@manifest-ai.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OfferSubmitPopup;