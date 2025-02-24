// import React from "react";
import { LiaLinkedin, LiaGithub, LiaTwitter } from "react-icons/lia"


const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-card">
          <h2 className="contact-title">GET IN TOUCH</h2>
          <h1 className="contact-heading">Start your project with me today!</h1>
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Jane Smith" />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="email@website.com" />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input type="tel" placeholder="555-555-5555" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Your message"></textarea>
            </div>
            <div className="contact-checkbox">
              <input type="checkbox" />
              <label>I allow this website to store my submission to respond to my inquiry.</label>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-card contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> vishalsinhparmar821@gmail.com</p>
          <p><strong>Location:</strong> Rajkot, GJ IN</p>

          <div className="contact-hours">
            <h3>Working Hours</h3>
            <p>Monday - Friday: 9:00am - 10:00pm</p>
            <p>Saturday: 9:00am - 6:00pm</p>
            <p>Sunday: 9:00am - 12:00pm</p>
          </div>

          <div className="social-section">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/parmar-vishalsinh-20561726b/" target="_blank" rel="noopener noreferrer" className="linkedin">
                <LiaLinkedin />
              </a>
              <a href="https://github.com/vishalsinhparmar" target="_blank" rel="noopener noreferrer" className="github">
                <LiaGithub />
              </a>
              <a href="https://x.com/gaming_oxy90924" target="_blank" rel="noopener noreferrer" className="twitter">
                <LiaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
