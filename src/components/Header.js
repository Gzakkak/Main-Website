import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

function Header({ toggleSidebar }) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [disappearanceDelay, setDisappearanceDelay] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowHeader(true);
      } else if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        clearTimeout(disappearanceDelay);
        setShowHeader(true);
      }
    };

    const handleMouseLeave = () => {
      const timeoutId = setTimeout(() => setShowHeader(false), 500);
      setDisappearanceDelay(timeoutId);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    document.querySelector('header').addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelector('header').removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(disappearanceDelay);
    };
  }, [lastScrollY, disappearanceDelay]);

  return (
    <AppBar
      position="fixed"
      style={{
        transition: 'top 1.2s',
        top: showHeader ? '0' : '-100px',
        background: 'linear-gradient(45deg, #212121, #65a7e9, #4a6a9e, #333333)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', sm: 'row' },
          justifyContent: { xs: 'center', sm: 'space-between' },
          alignItems: 'center',
          textAlign: 'center',
          paddingLeft: { xs: '8px 16px', sm: '16px 24px' },
          gap: { xs: 1, sm: 0 },
        }}
      >

        <Button
          variant="outlined"
          color="inherit"
          onClick={toggleSidebar}
          sx={{
            borderRadius: '20px',
            padding: '8px 16px',
            fontWeight: 'bold',
            textAlign: 'center',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
              backgroundColor: '#65a7e9',
              color: '#ffffff',
            },
          }}
        >
          Get to know me!
        </Button>


        <Typography
          variant="h6"
          component={ScrollLink}
          to="home"
          smooth={true}
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: { xs: '1.2rem', sm: '2.2rem' },
            marginY: { xs: 1, sm: 0 },
            '&:hover': {
              color: '#212121',
            },
          }}
        >
          George Zakkak
        </Typography>


        <Button
          variant="outlined"
          color="inherit"
          component={ScrollLink}
          to="contact"
          smooth={true}
          sx={{
            borderRadius: '20px',
            padding: '8px 16px',
            fontWeight: 'bold',
            textAlign: 'center',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
              backgroundColor: '#65a7e9',
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
