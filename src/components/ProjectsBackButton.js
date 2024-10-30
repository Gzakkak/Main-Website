import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Create this CSS file for styling

function BackButton() {
  return (
    <div className="projects-back-button">
      <Link to="/projects">Back to Projects</Link>
    </div>
  );
}

export default BackButton;
