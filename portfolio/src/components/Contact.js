import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <a href="mailto:piyushsahani675@gmail.com">piyushsahani675@gmail.com</a>
            </div>
          </div>
          
          <div className="contact-item">
            <FaLinkedin className="icon" />
            <div>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/piyush-sahani-2b32991a1/" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </div>
          </div>
          
          <div className="contact-item">
            <FaGithub className="icon" />
            <div>
              <h3>GitHub</h3>
              <a href="https://github.com/piyuPV" target="_blank" rel="noopener noreferrer">
                View Projects on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
