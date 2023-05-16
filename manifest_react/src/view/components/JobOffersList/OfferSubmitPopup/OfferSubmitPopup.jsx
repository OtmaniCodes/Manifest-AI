import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./OfferSubmitPopup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OfferSubmitPopup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [status, setStatus] = useState("");


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRequestChange = (event) => {
    setRequest(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    // const serviceId = 'service_hj1ugt1';
    // const templateId = 'template_bwekhr8';
    // const userId = 's8IdgPMEE6RYyV00r';

    const serviceId = '';
    const templateId = '';
    const userId = '';

    const templateParams = {
      name: name,
      email: email,
      request: request,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Sent successfully!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setStatus("Failed to send.");
     
      });
      setName('')
      setEmail('')
      setRequest('')
      setStatus('')
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
                <label htmlFor="request">Request</label>
                <textarea
                  className="form-control"
                  id="request"
                  rows="4"
                  value={request}
                  onChange={handleRequestChange}
                  required
                ></textarea>
              </div>
              <div>{status}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={props.close}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Apply Now
                </button>
              </div>
            </form>
            <div className="mt-3">
              <p>Contact us by email: <a href="mailto:contact@manifest-ai.com">contact@manifest-ai.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSubmitPopup;