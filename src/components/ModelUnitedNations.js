import React from 'react';
import '../App.css';
import munimg from '../images/mun.jpg'; // Ensure you have this image
import BackButton from '../components/BackButton'; // Adjust path as needed

function ModelUnitedNations() {
  return (
    <section id="model-united-nations">
      <div className="container">
        <div className="project-content">
          <div className="text-content">
            <ul>
              <li>
                <strong>Model United Nations (ABS):</strong> As a delegate, I actively engaged in multiple high-level sessions centered on leadership in political conflict resolution, where I refined my public speaking, negotiation, and diplomatic skills. Through thoughtful debate and collaboration, I contributed to crafting actionable solutions to complex geopolitical issues. These experiences sharpened my ability to lead discussions, build consensus, and navigate sensitive political dynamics, all while honing my strategic thinking and communication abilities in a global context.

              </li>
            </ul>
          </div>
          <div className="image-content">
            <img src={munimg} alt="George Zakkak's picture at the Model United Nations conference" className="project-style1" />
          </div>
        </div>
      </div>
      <BackButton /> {/* BackButton placed right after the period */}
    </section>
  );
}

export default ModelUnitedNations;
