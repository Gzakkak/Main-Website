import React from 'react';
import '../App.css';
import pinIcon from '../images/pin.png';
import phoneIcon from '../images/phone.png';
import linkedinIcon from '../images/linkedin.png';

const Resume = () => {
  return (
    <div>
      <section>
        <div className="container">
          <h2 className="information" style={{ fontSize: '18px', fontFamily: 'Times New Roman', color: '#2783de;', margin: '20px' }}>
            <img src={pinIcon} alt="Location Icon" className="resume-icon" /> San Diego, CA │
            <img src={phoneIcon} alt="Phone Icon" className="resume-icon" /> +1 (619) 519-8576 │
            <a href="https://www.linkedin.com/in/george-zakkak-01856a219/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn Logo" className="linkedin-icon" />
            </a>
          </h2>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Summary</h2>
          <p>A dedicated and detail-oriented professional with a strong background in operations management, project management, and data analysis. Passionate about leveraging technology to streamline operations and optimize business strategies. Eager to apply insights and technical acumen to drive innovation in the field of information systems and data analysis through my expertise in strategic planning, team leadership, and process optimization to drive efficiency and productivity in a dynamic organization.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Education</h2>
          <h3>San Diego State University, San Diego, CA</h3>
          <p><strong>B.S. Business Management Information Systems</strong> (Expected Dec. 2024)</p>
          <ul>
            <li>Cumulative GPA: 3.3 / 4.0; Major GPA: 3.6 / 4.0</li>
            <li>Relevant Coursework: Object Oriented Programming, Systems Analysis & Design, Artificial Intelligence, Data Management Systems, Statistical Analysis for Business, IT Project Management, Web Development, Internet & Data Communications, ERP Systems</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Skills & Interests</h2>
          <table>
            <thead>
              <tr>
                <th>Languages/Technologies</th>
                <th>Soft Skills</th>
                <th>Organizations</th>
                <th>Interests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Project Management (Project MS, Microsoft Azure, AWS, ERPs: SAP/Workday)</td>
                <td>Critical Thinking and Problem Solving</td>
                <td>Association of Information Technology</td>
                <td>AI/ML</td>
              </tr>
              <tr>
                <td>Microsoft Apps (Excel, Word, PowerPoint, Teams, SharePoint)</td>
                <td>Operational Strategy Development</td>
                <td>Cybersecurity Club</td>
                <td>Public Speaking</td>
              </tr>
              <tr>
                <td>Data Analysis (MS SQL, Tableau, Power BI)</td>
                <td>Team Leadership and Supervision</td>
                <td>Middle Eastern and North American Club</td>
                <td>Community Service</td>
              </tr>
              <tr>
                <td>Programming Languages (Python, Familiar with Java and C++)</td>
                <td>Customer Relationship Management</td>
                <td></td>
                <td>Cooking</td>
              </tr>
              <tr>
                <td>Web Development (HTML, CSS, JavaScript)</td>
                <td>Risk Management and Compliance</td>
                <td></td>
                <td>Calisthenics</td>
              </tr>
              <tr>
                <td>Network Configuration/Security (TCP/IP, VPN, Firewall)</td>
                <td>Cross-functional Collaboration</td>
                <td></td>
                <td>Guitar</td>
              </tr>
              <tr>
                <td>LAN/WAN/WLAN Management, GitHub, Amazon Web Services</td>
                <td>Bilingual (English, Arabic)</td>
                <td></td>
                <td>Travelling</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>DIY Home Improvements</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Professional Experience</h2>

          <h3>Amazon, Ontario, CA</h3>
          <div className="job-entry">
            <p><strong>Technical Management Intern | Quality Assurance</strong> <span className="job-details">Onsite <span className="job-dates">(May 2024 – Aug. 2024)</span></span></p>
          </div>
          <ul>
            <li>Developed and implemented data-driven operational strategies using SQL and analytics tools, improving system efficiency by 20% and reducing operational costs by 15%.</li>
            <li>Led cross-functional teams in optimizing workflow through automation and cloud-based project management platforms, enhancing order processing speed by 31% and team productivity by 25%.</li>
            <li>Improved sprint efficiency by 20% and ensured the on-time delivery of 95% of key initiatives by utilizing Agile methodologies to track and manage project milestones over a 10-week period.</li>
          </ul>

          <h3>M.O.E (Mikhail Ogawa Engineering), San Diego, CA</h3>
          <div className="job-entry">
            <p><strong>System Analyst Intern | Data Management</strong> <span className="job-details">Remote <span className="job-dates">(Jan. 2024 – May 2024)</span></span></p>
          </div>
          <ul>
            <li>Conducted system and process analysis using data integration tools and SQL queries, improving operational efficiency by 20%.</li>
            <li>Provided technical support, troubleshooting Windows OS and configuring secure VPN access, achieving a 95% first-time resolution rate.</li>
            <li>Analyzed datasets using SQL and data visualization platforms, producing insights that drove a 12% improvement in client satisfaction.</li>
          </ul>

          <h3>Wells Fargo, El Cajon, CA</h3>
          <div className="job-entry">
            <p><strong>Banker-Teller | Retail Banking</strong> <span className="job-details">Onsite <span className="job-dates">(Oct. 2022 – May 2024)</span></span></p>
          </div>
          <ul>
            <li>Processed high-volume transactions, utilizing banking software and CRM systems to maintain a seamless user experience and minimize error rates to less than 0.01%.</li>
            <li>Boosted digital engagement by promoting mobile banking platforms and digital transformation initiatives, increasing adoption by 35%.</li>
            <li>Analyzed customer data using CRM tools and analytics, improving cross-sell opportunities by 15% and maintaining a 95% satisfaction rate.</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Leadership & Professional Development</h2>

          <h3>System Analysis Project – San Diego State University - May 2024</h3>
          <ul>
            <li>Analyzed project management systems to identify inefficiencies, proposed Power BI integration for real-time data visualization, and targeted a 40% reduction in data entry errors and enhanced financial tracking.</li>
            <li>Defined and implemented KPIs to achieve a 40% improvement in budget accuracy and project delivery, created data flow diagrams (DFDs) to streamline reporting, and aligned system enhancements with strategic goals to increase operational efficiency and profitability.</li>
          </ul>

          <h3>Certifications:</h3>
          <ul>
            <li>CompTIA A+, Network +, Data + – In Progress (Dec. 2024)</li>
            <li>AWS Certified Cloud Practitioner, Solutions Architect – In Progress (Dec. 2024)</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
