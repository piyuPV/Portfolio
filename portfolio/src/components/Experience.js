import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <h2>Work Experience</h2>
      
      <div className="experience-item">
        <h3>Python Instructor and Developer</h3>
        <h4>Static Int. Educare</h4>
        <p className="date">Jun 2024 - Jul 2024</p>
        <ul>
          <li>Instructed Python and Data Science to approximately 40 students</li>
          <li>Developed curriculum focusing on Python fundamentals and data analysis</li>
          <li>Received positive feedback from 90% of students</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Machine Learning Intern</h3>
        <h4>Techqkonnect</h4>
        <p className="date">Dec 2023 - Jan 2024</p>
        <ul>
          <li>Analyzed datasets and implemented machine learning models</li>
          <li>Built web applications using Flask and Streamlit</li>
          <li>Increased image recognition model accuracy by 15%</li>
        </ul>
      </div>

      <div className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Computer Science - Data Science</h3>
          <h4>Vidyavardhini's College of Engineering and Technology</h4>
          <p className="date">2021 - 2025</p>
          <p>CGPA: 8.6</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
