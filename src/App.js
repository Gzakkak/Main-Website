import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme';
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



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={`app ${isOpen ? 'sidebar-open' : ''}`}>
          <Header toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />

          <main>
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="projects"><Projects /></section>
            <section id="goals"><Goals /></section>
            <section id="resume"><Resume /></section>
            <section id="contact"><Contact /></section>
          </main>

          <Routes>
            <Route path="/amazon-internship" element={<AmazonInternship />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
