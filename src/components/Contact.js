import React, { useState } from 'react';
import '../App.css';
import linkedinLogo from '../images/linkedin-logo.png';
import instagramLogo from '../images/instagram-logo.png';
import emailLogo from '../images/email-logo.png';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send('service_m72sujj', 'template_7kgrrh2', formData, 'zXyUC5yeRa-G_K3JC')
      .then((response) => {
        console.log('Message sent successfully!', response.status, response.text);
        setSuccessMessage('Thanks for reaching out, talk soon!');
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        setErrorMessage('There was an error sending your message. Please try again.');
        setSuccessMessage('');
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Get In Touch!</h2>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>

        {/* Success/Error Messages */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Social Links */}
        <div className="socials">
          <a href="https://www.linkedin.com/in/george-zakkak-01856a219/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn Logo" className="social-icon" />@ george zakkak
          </a>
          <a href="https://www.instagram.com/georgezakkakk/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram Logo" className="social-icon" />@ george.zakkakk
          </a>
          <a href="mailto:gyzakkak@gmail.com">
            <img src={emailLogo} alt="Email Logo" className="social-icon" /> gyzakkak@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
