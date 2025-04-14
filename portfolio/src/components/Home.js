import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Piyush Sahani</h1>
        <h2>Machine Learning Engineer</h2>
        <div className="social-links">
          <a href="https://github.com/piyuPV" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/piyush-sahani-2b32991a1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming</h3>
            <ul>
              <li>Python</li>
              <li>SQL</li>
              <li>Flask</li>
              <li>Streamlit</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Machine Learning</h3>
            <ul>
              <li>TensorFlow</li>
              <li>Neural Networks</li>
              <li>Deep Learning</li>
              <li>OpenCV</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Data Science</h3>
            <ul>
              <li>Matplotlib</li>
              <li>Seaborn</li>
              <li>PowerBI</li>
              <li>Statistics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
