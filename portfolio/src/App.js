import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:piyushsahani675@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">PS.</div>
        <div className="navbar-links">
          <span onClick={() => scrollToSection('home')}>Home</span>
          <span onClick={() => scrollToSection('about')}>About</span>
          <span onClick={() => scrollToSection('projects')}>Projects</span>
          <span onClick={() => scrollToSection('experience')}>Experience</span>
          <span onClick={() => scrollToSection('skills')}>Skills</span>
          <span onClick={() => scrollToSection('contact')}>Contact</span>
        </div>
      </nav>

      <section id="home" className="section hero">
        <div className="hero-content">
          <h2 className="hero-subtitle">Hello, I'm</h2>
          <h1 className="hero-title">Piyush Sahani</h1>
          <h2 className="hero-description">Machine Learning Engineer</h2>
          <div className="hero-cta">
            <button onClick={() => scrollToSection('about')} className="cta-button">
              Learn More <FaArrowDown className="arrow-icon" />
            </button>
          </div>
        </div>
        <div className="hero-background">
          <div className="circle-container">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`circle circle-${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I am a passionate Machine Learning Engineer with expertise in developing AI solutions. Currently pursuing my Bachelor's in Computer Science with a specialization in Data Science from VCET, Mumbai.</p>
            <p>I love working on challenging problems and creating innovative solutions using AI and Machine Learning. My experience spans from facial recognition to EEG signal analysis.</p>
            <div className="about-stats">
              <div className="stat">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Publications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Facial Emotion Recognition</h3>
            <p>Created using MobileNetV2 and transfer learning with 86.37% accuracy on FER-2013 dataset.</p>
            <div className="tech-stack">
              <span>TensorFlow</span>
              <span>Deep Learning</span>
              <span>OpenCV</span>
            </div>
          </div>
          <div className="project-card">
            <h3>EEG Signal Analysis</h3>
            <p>Engineered techniques for mental disorder and emotion recognition with 20% improved accuracy.</p>
            <div className="tech-stack">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Signal Processing</span>
            </div>
          </div>
          <div className="project-card">
            <h3>WhatsApp Chat Analysis</h3>
            <p>Comprehensive analysis tool with sentiment analysis, spam detection, and translation capabilities.</p>
            <div className="tech-stack">
              <span>NLP</span>
              <span>Machine Learning</span>
              <span>Streamlit</span>
            </div>
          </div>
          <div className="project-card">
            <h3>EEG analysis</h3>
            <p>Developed an AI-powered healthcare system for early disease detection using patient data.</p>
            <div className="tech-stack">
              <span>TensorFlow</span>
              <span>scikit-learn</span>
              <span>Flask</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Stock Market Prediction</h3>
            <p>Created an LSTM-based model for stock price prediction with real-time data analysis.</p>
            <div className="tech-stack">
              <span>LSTM</span>
              <span>pandas</span>
              <span>Streamlit</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Image Generation AI</h3>
            <p>Implemented a GAN-based system for generating realistic images from text descriptions.</p>
            <div className="tech-stack">
              <span>PyTorch</span>
              <span>GANs</span>
              <span>CUDA</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <h3>Python Instructor and Developer</h3>
            <h4>Static Int. Educare</h4>
            <p className="date">Jun 2024 - Jul 2024</p>
            <ul>
              <li>Instructed Python and Data Science to 40 students</li>
              <li>Developed curriculum for Python fundamentals</li>
              <li>90% positive student feedback</li>
            </ul>
          </div>
          <div className="experience-card">
            <h3>Machine Learning Intern</h3>
            <h4>Techqkonnect</h4>
            <p className="date">Dec 2023 - Jan 2024</p>
            <ul>
              <li>Implemented ML models and data analysis</li>
              <li>Built web applications using Flask and Streamlit</li>
              <li>Improved model accuracy by 15%</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
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
              <li>Statistics</li>
              <li>PowerBI</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for collaborations or opportunities.</p>
            <div className="social-links">
              <a href="https://github.com/piyuPV" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/piyush-sahani-2b32991a1/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
