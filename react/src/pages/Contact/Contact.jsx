import { useState } from 'react';
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone:"",
    email: "",
    message: "",
  });

const handleInputChange = (event) => {
    const { name, value } = event.target;
        setFormData((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
        name: "",
        phone:"",
        email: "",
        message: "",
        });
    };

    return (
        <section id="contact" className="py-5">
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <h3>Contact Info</h3>
                <div className='contact-info'><i class="bi bi-geo-alt contact-icon"></i>Tangier, Tanger-Tetouan-Al Hoceima, Morocco</div>
                <div className='contact-info'><i className="bi bi-envelope contact-icon"></i> <a href="mailto:youremail@example.com">youremail@example.com</a></div>
                <div className='contact-info'><i className="bi bi-phone contact-icon"></i> <a href="tel:+1234567890">+1 (234) 567-890</a></div>
            </div>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                <div className="mb-1">
                    <div className="input-box">
                    <label className="input-label">Name</label>
                    <input
                        className="input"
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Name"
                        onChange={handleInputChange}
                    />
                    <span className="input-helper">Enter your name</span>
                    </div>
                </div>
                <div className="mb-1">
                    <div className="input-box">
                    <label className="input-label">Email</label>
                    <input
                        className="input"
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email@mail.com"
                        onChange={handleInputChange}
                    />
                    <span className="input-helper">Enter a valid email</span>
                    </div>
                </div>
                <div className="mb-1">
                    <div className="input-box">
                    <label className="input-label">Phone</label>
                    <input
                        className="input"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        placeholder="+212 000 000 000"
                        onChange={handleInputChange}
                    />
                    <span className="input-helper">Enter a valid phone number</span>
                    </div>
                </div>
                <div className="mb-1">
                    <label htmlFor="message" className="input-label">Message</label>
                    <textarea
                    className="message-contact"
                    value={formData.message}
                    onChange={handleInputChange}
                    id="message"
                    name="message"
                    rows="5"
                    required
                    ></textarea>
                    </div>
                    <button type="submit" className="w-50 global-btn ">Submit</button>
                    </form>
                </div>
                </div>
            </div>
        </section>

     );
}
 
export default Contact;