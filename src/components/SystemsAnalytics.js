import React from 'react';
import '../App.css';
import mis306img1 from '../images/project1.jpg'; // Ensure you have this image
import mis306img2 from '../images/project2.jpg'; // Ensure you have this image
import BackButton from '../components/BackButton'; // Adjust path as needed

function SystemsAnalytics() {
  return (
    <section id="systems-analytics">
      <div className="container">
        <ul>
          <li>
            <strong>Systems Analytics Project (SDSU):</strong> Worked on a comprehensive systems analytics project for a prominent engineering company based in San Diego, where we identified and streamlined inefficiencies in their data workflows. Through careful analysis and strategic optimization, we were able to enhance the overall system performance, leading to a significant improvement in process speed. This involved implementing advanced data integration techniques, automating key processes, and ensuring smoother cross-functional collaboration between teams. The project's success not only reduced bottlenecks but also laid the groundwork for sustained operational improvements, boosting both productivity and client satisfaction.

          </li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '5rem 0' }}>
          <img src={mis306img1} alt="George Zakkak's system analysis project picture #1" className="project-style2" />
          <img src={mis306img2} alt="George Zakkak's system analysis project picture #2" className="project-style2" />
        </div>
      </div>
      <BackButton /> {BackButton}
    </section>
  );
}

export default SystemsAnalytics;
