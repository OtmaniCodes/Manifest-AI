import './ContactSection.css'
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useScrollToTop from '../../../../utils/custom-hooks/useScrollToTop';
import ResponsiveCompo from '../../responsive-compo';
import GradientTitle from '../../GradientTitle/GradientTitle';
import { Fade } from 'react-reveal';
import { useDataSource } from '../../../../state/data-provider';

const ContactSection = () => {
    useScrollToTop()
    
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formFailed, setformFailed] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    var {loading,sections} = useDataSource();
    sections=sections[0]

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
    const validateForm = () => {
        let errors = {};
      
        // Name validation
        if (!formData.name) {
          errors.name = 'Name is required';
        }
      
        // Email validation
        if (!formData.email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Email is invalid';
        }
      
        // Phone validation
        if (!formData.phone) {
          errors.phone = 'Phone is required';
        } else if (!/^\+?\d{10,14}$/.test(formData.phone)) {
          errors.phone = 'Phone is invalid';
        }
      
        // Message validation
        if (!formData.message) {
          errors.message = 'Message is required';
        }
      
        setErrors(errors);
      
        return Object.keys(errors).length === 0;
    }; 
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const isValid = validateForm();
        if (isValid) {
            const serviceId = 'service_hj1ugt1';
            const templateId = 'template_bwekhr8';
            const userId = 's8IdgPMEE6RYyV00r';
        
            const emailParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
            };
            setIsSubmitting(true) 
            emailjs.send(serviceId, templateId, emailParams, userId)
            .then((response) => {
                // console.log('SUCCESS!', response.status, response.text);
                toast.success('Your message was submitted successfuly! we will get back to you as soon as we can.', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            }, (error) => {
                // console.log('FAILED...', error);
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
                
            });
        
            setFormData({
            name: '',
            phone:'',
            email: '',
            message: '',
            });
        
            setErrors({});
            setIsSubmitting(false)
        }
    };
    const handleInputClick = (event) => {
        const { name } = event.target;
        if (errors[name]) {
          setErrors((prevState) => ({
            ...prevState,
            [name]: '',
          }));
        }
    };
    // const pageTitle = 'CONTACT - MANIFEST AI';
    // const helmetTitle = Helmet.peek().title;
    // console.log(helmetTitle)
    // const pageHome='HOME - MANIFEST AI'
    // console.log(pageTitle,helmetTitle)
    // helmetTitle == pageHome ?console.log('i'):console.log('no')

    return (
        <section id="contact-section" className="py-5">
            <div className="container">
                <div className="row">
                <Fade left cascade>
                    <div className="col-md-6 text-center text-md-start">
                        <ResponsiveCompo desktopChild={<GradientTitle title={!loading&&sections.contact_us_title} subTitle={!loading && sections.contact_description} alignStart={true}/>}/>
                        <ResponsiveCompo mobileChild={<GradientTitle title={!loading&&sections.contact_us_title} subTitle={!loading && sections.contact_description}/>}/>
                        {/* <h3>Contact Info</h3> */}
                        <div className='contact-info'><i className="bi bi-geo-alt contact-icon"></i>{!loading && sections.contact_adresse}</div>
                        <div className='contact-info'><i className="bi bi-envelope contact-icon"></i> <a href={!loading && 'mailto:'+sections.contact_email}>{!loading && sections.contact_email}</a></div>
                        <div className='contact-info'><i className="bi bi-phone contact-icon"></i> <a href={!loading && 'tel:'+sections.contact_number}>{!loading && sections.contact_number}</a></div>
                    </div>
                </Fade>
                <Fade right>

                    <div className="col-md-6 text-center text-md-start">
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <div className="input-box">
                                        <label className="input-label text-start">Name</label>
                                        <input
                                        className="input"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        placeholder="Name"
                                        onChange={handleInputChange}
                                        onClick={handleInputClick}
                                        />
                                        <span className="input-helper">Enter your name</span>
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>
                                </div>
                                <div className="col-md-8">

                                    <div className="input-box text-start">
                                        <label className="input-label ">Phone</label>
                                        <input
                                        className="input"
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        placeholder="+212 000 000 000"
                                        onChange={handleInputChange}
                                        onClick={handleInputClick}
                                        />
                                        <span className="input-helper">Enter a valid phone number</span>
                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                            <div className="input-box text-start">
                                <label className="input-label">Email address</label>
                            
                                <input
                                className="input"
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="Email@mail.com"
                                onChange={handleInputChange}
                                onClick={handleInputClick}
                                />
                                <span className="input-helper">Enter a valid email</span>
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                            </div>
                            <div className="mb-3">
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="message" className="input-label">Message</label>
                                <textarea
                                    className="message-contact"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    onClick={handleInputClick}
                                    id="message"
                                    name="message"
                                    rows="5"
                                ></textarea>
                            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                            </div>
                            <button type="submit" className={`w-50 global-btn ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                            <ToastContainer />
                        </form>
                    </div>
                    </Fade>
                </div>
            </div>
        </section>
     );
}
 
export default ContactSection;