import React from 'react';
import { Link } from 'react-router-dom';
import profile2 from '../images/profile2.png';
import '../App.css';

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <div
      className={`sidebar ${isOpen ? 'active' : ''}`}
      onMouseLeave={() => setTimeout(closeSidebar, 200)} // Slight delay to prevent immediate closing
    ><h1>__________</h1>
      <nav className="sidebar-nav">
        <Link to="/" onClick={closeSidebar}>Home</Link>
        <Link to="/about" onClick={closeSidebar}>About Me</Link>
        <Link to="/projects" onClick={closeSidebar}>Projects</Link>
        <Link to="/goals" onClick={closeSidebar}>Goals</Link>
        <Link to="/resume" onClick={closeSidebar}>Resume</Link>
        <Link to="/contact" onClick={closeSidebar}>Contact</Link>
      </nav>

      {/* Add the image at the bottom of the sidebar */}
      <div className="sidebar-image-container">
        <img src={profile2} alt="George Zakkak" className="sidebar-image" />
      </div>
    </div>
  );
}

export default Sidebar;
