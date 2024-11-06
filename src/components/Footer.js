import React from 'react';
import { Container, Typography, Box, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const FooterContainer = styled(Box)({
  backgroundColor: '#212121',
  color: '#ffffff',
  padding: '10px 0 5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderTop: '1px solid #4a6a9e',
});

const FooterIcons = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
});

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            George Zakkak
          </Typography>
          <Typography variant="body2" align="center" sx={{ fontSize: '1rem', maxWidth: '600px', margin: 'auto' }}>
            Pursuing excellence in technology and leadership to drive impactful change.
          </Typography>

          <Divider sx={{ backgroundColor: '#4a6a9e', margin: '20px 0' }} />

          {/* Footer Icons */}
          <FooterIcons>
            <IconButton
              href="https://www.linkedin.com/in/george-zakkak-01856a219/"
              target="_blank"
              aria-label="LinkedIn"
              sx={{
                color: '#65a7e9',
                '&:hover': { color: '#1e50ff' },
              }}
            >
              <LinkedInIcon sx={{ fontSize: 60 }} />
            </IconButton>

            <IconButton
              href="https://www.instagram.com/georgezakkakk/?hl=en"
              target="_blank"
              aria-label="Instagram"
              sx={{
                color: '#65a7e9',
                '&:hover': { color: '#E1306C' },
              }}
            >
              <InstagramIcon sx={{ fontSize: 60 }} />
            </IconButton>

            <IconButton
              href="mailto:gyzakkak@gmail.com"
              aria-label="Email"
              sx={{
                color: '#65a7e9',
                '&:hover': { color: '#FFFF00' },
              }}
            >
              <EmailIcon sx={{ fontSize: 60 }} />
            </IconButton>
          </FooterIcons>

          <Typography variant="body2" align="center" sx={{ marginTop: '5px', fontSize: '0.9rem', color: '#b0b0b0' }}>
            &copy; 2024 George Zakkak. All rights reserved.
          </Typography>
        </Container>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
