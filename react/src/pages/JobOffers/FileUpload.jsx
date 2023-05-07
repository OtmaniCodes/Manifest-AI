import React, { useState } from "react";
import emailjs from "emailjs-com";

function FileUpload() {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
    console.log(file)
  }

  function handleSubmit(event) {
    event.preventDefault();

    // read file contents as a Blob object
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = () => {
      const fileContent = reader.result;

      // create FormData object and append file
      const formData = new FormData();
      // formData.append("file", file, file.name);
      formData.append("file", file, "filename.pdf", { type: "application/pdf" });
      console.log(file)
      console.log(file.name)

      // send email using Email.js
      const serviceId = "service_3t0fzbi";
      const templateId = "template_wb6z54p";
      const userId = "Bc0n8L5OcdItSdiPl";

      const emailParams = {
        file: file,
        };
      emailjs.send(serviceId, templateId, emailParams, userId).then(
        (result) => {
          console.log("Email sent successfully!", result.text);
        },
        (error) => {
          console.error("Email failed to send.", error);
        }
      );
    };
  }

  return (
    <form onSubmit={handleSubmit} className='mt-5 pt-5'>
      <label>
        Select a file:
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default FileUpload;
