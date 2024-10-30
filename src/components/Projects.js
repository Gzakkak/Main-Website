import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import amazonlogo from '../images/amazonlogo.png';
import sdsulogo from '../images/sdsulogo.png';
import munlogo from '../images/munlogo.png';


function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-wrapper">
          <Link to="/amazon-internship" className="project-box" style={{ backgroundColor: '#65a7e9' }}>
            <img src={amazonlogo} alt="Amazon Internship" className="project-cover" />
          </Link>
          <div className="project-content">
            <strong>Amazon Internship</strong>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-wrapper">
          <Link to="/systems-analytics" className="project-box" style={{ backgroundColor: '#65a7e9' }}>
            <img src={sdsulogo} alt="Systems Analytics Project (SDSU)" className="project-cover" />
          </Link>
          <div className="project-content">
            <strong>Systems Analytics Project</strong>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-wrapper">
          <Link to="/model-united-nations" className="project-box" style={{ backgroundColor: '#65a7e9' }}>
            <img src={munlogo} alt="Model United Nations" className="project-cover" />
          </Link>
          <div className="project-content">
            <strong>Model United Nations (ABS)</strong>
          </div>
        </div>
      </div>

    </section >
  );
}

export default Projects;
