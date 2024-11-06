import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

function Header({ toggleSidebar }) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [disappearanceDelay, setDisappearanceDelay] = useState(null); // For delayed disappearance

  useEffect(() => {
    const handleScroll = () => {
      // Only show header if user is at the top
      if (window.scrollY === 0) {
        setShowHeader(true); // Show header at the top
      } else if (window.scrollY > lastScrollY) {
        setShowHeader(false); // Hide on scroll down
      } else {
        setShowHeader(true); // Show on scroll up
      }

      setLastScrollY(window.scrollY); // Update last scroll position
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        clearTimeout(disappearanceDelay); // Clear any delayed hiding
        setShowHeader(true); // Show header when mouse moves near top
      }
    };

    const handleMouseLeave = () => {
      // Set a delay before hiding the header
      const timeoutId = setTimeout(() => setShowHeader(false), 500); // 500ms delay
      setDisappearanceDelay(timeoutId); // Save timeout ID to clear if needed
    };

    // Enable the scroll listener only when user is not at the top
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    document.querySelector('header').addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelector('header').removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(disappearanceDelay); // Clear timeout on cleanup
    };
  }, [lastScrollY, disappearanceDelay]);  // Dependency on scroll position

  return (
    <AppBar
      position="fixed"
      style={{
        transition: 'top 0.3s',
        top: showHeader ? '0' : '-80px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Transparent background
      }}
    >
      <Toolbar>
        <Button
          variant="outlined"
          color="inherit"
          onClick={toggleSidebar}
          sx={{
            marginRight: 'auto',
            borderRadius: '20px',
            padding: '8px 16px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
              backgroundColor: '#0999f9',
              color: '#ffffff',
            },
          }}
        >
          Get to know me!
        </Button>

        <Typography
          variant="h6"
          button component={ScrollLink} to="home" smooth={true}
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            textDecoration: 'none',
            color: 'inherit',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '2.2rem',
            '&:hover': {
              color: '#0999f9',
              textShadow: '0 0 5px #0999f9',
            },
          }}
        >
          George Zakkak
        </Typography>

        <Button
          variant="outlined"
          color="inherit"
          button component={ScrollLink} to="contact" smooth={true} cursor='default'
          sx={{
            borderRadius: '20px',
            padding: '8px 16px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
              backgroundColor: '#0999f9',
              color: '#ffffff',
            },
          }}
        >
          Connect with Me!
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
