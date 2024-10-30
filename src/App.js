import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Goals from './components/Goals';
import Resume from './components/Resume';
import Contact from './components/Contact';
import AmazonInternship from './components/AmazonInternship';
import SystemsAnalytics from './components/SystemsAnalytics';
import ModelUnitedNations from './components/ModelUnitedNations';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <div className={`app ${isOpen ? 'sidebar-open' : ''}`}>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> {/* Updated the path for Projects */}
          <Route path="/amazon-internship" element={<AmazonInternship />} /> {/* Use element instead of component */}
          <Route path="/systems-analytics" element={<SystemsAnalytics />} />
          <Route path="/model-united-nations" element={<ModelUnitedNations />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
