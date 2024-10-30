import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function BackButton() {
  return (
    <div className="back-button">
      <Link to="/projects">Back to Projects</Link>
    </div>
  );
}

export default BackButton;
