import React from 'react';
import '../App.css';
import amazonimg from '../images/amazon.jpg'; // Ensure you have this image

function AmazonInternship() {
  return (
    <section id="amazon-internship">
      <div className="container">
        <h2>Amazon Internship</h2>
        <img src={amazonimg} alt="Amazon Internship" className="project-image" />
        <p>
          As a Technical Management Intern at Amazon, I led a cross-functional team to execute a high-impact project focused on optimizing warehouse management systems. By leveraging advanced data analysis and automation tools, we identified inefficiencies in the existing workflow and implemented strategic improvements. These initiatives resulted in significant cost savings and a noticeable reduction in delivery times, enhancing overall operational efficiency.
        </p>
      </div>
    </section>
  );
}

export default AmazonInternship;