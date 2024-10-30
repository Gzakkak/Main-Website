import React from 'react';
import '../App.css';
import profileImage from '../images/profile.png';

function Home() {
  return (
    <section id="home">
      <div className="container">
        <h2>Welcome to My Website!</h2>
        <p>
          My name is George Zakkak, an aspiring technology leader dedicated to advancing my expertise in management
          information systems and leadership development. This website serves as a window into my professional journey,
          showcasing my experiences, projects, and future aspirations. Join me as I strive to make a meaningful impact
          in the tech industry and embrace new challenges along the way.
        </p>
        <div className="image-container">
          <img src={profileImage} alt="George Zakkak's profile" className="profile-picture" />
        </div>
      </div>
    </section>
  );
}

export default Home;
