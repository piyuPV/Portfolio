import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => scrollToSection('home')}>
        PS.
      </div>
      <div className="navbar-links">
        <span onClick={() => scrollToSection('home')}>Home</span>
        <span onClick={() => scrollToSection('projects')}>Projects</span>
        <span onClick={() => scrollToSection('experience')}>Experience</span>
        <span onClick={() => scrollToSection('contact')}>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
