import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./PopUp.css";

const PopUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    const userId = "YOUR_USER_ID";

    const templateParams = {
      name: name,
      email: email,
    };

    const attachments = {};
    if (resume) {
      attachments.resume = {
        content: resume,
        type: resume.type,
        name: resume.name,
      };
    }
    emailjs
      .send(serviceId, templateId, templateParams, userId, attachments)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Sent successfully!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setStatus("Failed to send.");
      });
  };

  return (
    <div className="modal pop-container" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Apply Now</h5>
            {/* <button type="button" className="close" onClick={props.close}>
              <span aria-hidden="true">&times;</span>
            </button> */}
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
                <label htmlFor="resume" className="mt-4 global-btn">
                  Upload Resume
                </label>
                <input
                  type="file"
                  className="resume form-control-file"
                  id="resume"
                  onChange={handleResumeChange}
                  required
                />
                {resume && (
                <div className="form-group">
                  <span>Resume uploaded: {resume.name}</span>
                </div>
              )}
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
          </div>
        </div>
      </div>
    </div>
  );
};




export default PopUp;