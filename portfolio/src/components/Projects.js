import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Facial Emotion Recognition",
      description: "Created a model using MobileNetV2 and transfer learning, achieving 86.37% accuracy on the FER-2013 dataset.",
      technologies: ["TensorFlow", "Deep Learning", "Computer Vision", "Transfer Learning"],
      github: "https://github.com/piyuPV/facial-emotion"
    },
    {
      title: "EEG Signal Analysis",
      description: "Developed system for analyzing EEG signals to detect mental disorders and emotions with 20% improved accuracy.",
      technologies: ["Python", "Machine Learning", "Signal Processing", "SVC"],
      github: "https://github.com/piyuPV/eeg-analysis"
    },
    {
      title: "WhatsApp Chat Analysis",
      description: "Built comprehensive analysis tool featuring sentiment analysis, spam detection, and translation capabilities.",
      technologies: ["NLP", "Machine Learning", "Python", "Streamlit"],
      github: "https://github.com/piyuPV/whatsapp-analyzer"
    }
  ];

  return (
    <div className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
