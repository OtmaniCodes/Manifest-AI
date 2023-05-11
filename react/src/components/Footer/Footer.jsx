import './Footer.css'
import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center footer-contact">
              <h3>MANIFEST AI</h3>
              {/* <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br /> */}
              {/* <p>
                A108 Adam Street <br />
                New York, NY 535022<br />
                United States <br /><br />
              </p> */}
            </div>
            <div className="footer-links text-center">
              {/* <h4>Our Services</h4> */}
              <ul className='d-flex align-items-center justify-content-center'>
                <p>INNOVATING SOLUTIONS FOR A BETTER WORLD</p>
                {/* <li><i className="mx-2 bx bx-chevron-right"></i> <a href="#">Consulting</a></li>
                <li><i className="mx-2 bx bx-chevron-right"></i> <a href="#">Sustainability</a></li>
                <li><i className="mx-2 bx bx-chevron-right"></i> <a href="#">AI Technology</a></li>
                <li><i className="mx-2 bx bx-chevron-right"></i> <a href="#">Auditing</a></li> */}
              </ul>
            </div>
            {/* <div className="col-lg-4 col-md-6 text-md-start text-center footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>Stay Up-to-Date with Our Latest News, Offers, and Insights - Subscribe to Our Newsletter Today!</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div> */}
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            © Copyright <strong><span>Manifest AI</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://manifest-ai.com/">Manifest AI</a>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          {/* <a href="#" className="twitter"><i className="bu bi-twitter"></i></a> */}
          {/* <a href="#" className="facebook"><i className="bu bi-facebook"></i></a> */}
          <a href="https://www.instagram.com/manifest_a.i/" className="instagram"><i className="bu bi-instagram"></i></a>
          <a href="https://www.linkedin.com/company/manifest-ai/" className="linkedin"><i className="bu bi-linkedin"></i></a>
    </div>
  </div>
</footer>
)}

 
export default Footer;