import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/system';
import resumeImage from '../images/Resume.png';


const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem 0',
  minHeight: '100%',
  width: '100%',
  background: `linear-gradient(
    #333333 0%, 
    #212121 50%,
    #333333 70%, 
    #4a6a9e 85%, 
    #65a7e9 100%
  )`,
  color: '#212121',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    padding: '3rem 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 0',
  },
}));


const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: theme.spacing(4),
  color: '#65a7e9',
  textAlign: 'center',
}));

const ResumeImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '800px',
  border: '5px solid #212121',
  overflow: 'hidden',
  margin: '0 auto',
  borderRadius: '10px',
  cursor: 'pointer',
  boxShadow: '0 0 15px #65a7e9',
  transition: 'transform 0.3s ease',
  padding: 'auto',
  boxSizing: 'border-box',
  '& img': {
    width: '100%',
    borderRadius: '10px',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '90%',
    padding: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: 'auto',
  },
}));





const Resume = () => {
  const handleButtonClick = () => {
    window.open('/George Zakkak_24Q3_Resume BS.pdf', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:gyzakkak@gmail.com';
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/george-zakkak-01856a219/', '_blank');
  };

  return (
    <Section id="resume">
      <Container maxWidth="lg">
        <Title variant="h2">Resume</Title>

        <Box display="flex" justifyContent="center" marginBottom={4} gap={2}>
          <Button
            variant="contained"
            onClick={handleButtonClick}
            sx={{
              fontSize: '1.2rem',
              padding: '10px 30px',
              backgroundColor: '#212121',
              '&:hover': {
                backgroundColor: '#65a7e9',
              },
            }}
          >
            Print or Download
          </Button>

          <Button
            variant="contained"
            onClick={handleEmail}
            sx={{
              fontSize: '1.2rem',
              padding: '10px 30px',
              backgroundColor: '#212121',
              '&:hover': {
                backgroundColor: '#65a7e9',
              },
            }}
          >
            Email
          </Button>

          <Button
            variant="contained"
            onClick={handleLinkedIn}
            sx={{
              fontSize: '1.2rem',
              padding: '10px 30px',
              backgroundColor: '#212121',
              '&:hover': {
                backgroundColor: '#65a7e9',
              },
            }}
          >
            LinkedIn
          </Button>
        </Box>

        <ResumeImage>
          <img src={resumeImage} alt="Resume" />
        </ResumeImage>
      </Container>
    </Section>
  );
};

export default Resume;
