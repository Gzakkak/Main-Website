import React from 'react';
import '../App.css';
import amazonimg from '../images/amazon.jpg'; // Ensure you have this image
import BackButton from '../components/BackButton'; // Adjust path as needed

function AmazonInternship() {
  return (
    <section id="amazon-internship">
      <div className="container">
        <div className="project-content">
          <div className="text-content">
            <p>
              <strong>Amazon Internship: </strong>
              As a Technical Management Intern at Amazon, I led a cross-functional team to execute a high-impact project focused on optimizing warehouse management systems. By leveraging advanced data analysis and automation tools, we identified inefficiencies in the existing workflow and implemented strategic improvements. These initiatives resulted in significant cost savings and a noticeable reduction in delivery times, enhancing overall operational efficiency. The project not only streamlined internal processes but also directly contributed to Amazon’s commitment to faster, more reliable service for its customers.

            </p>
          </div>
          <div className="image-content">
            <img src={amazonimg} alt="George Zakkak at his Amazon internship" className="project-style1" />
          </div>
        </div>
      </div>
      <BackButton /> {/* BackButton placed right after the period */}
    </section>
  );
}

export default AmazonInternship;
