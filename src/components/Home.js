import React from 'react';
import profileImage from '../images/profile.png';
import { Element } from 'react-scroll';
import { Container, Typography, Box, Avatar, Grid } from '@mui/material';
import { styled } from '@mui/system';
import ReactTypingEffect from 'react-typing-effect';

const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh',
  padding: '6rem 0',
  marginTop: '-80px',
  background: `linear-gradient(
  #212121 0%, 
  #212121 50%,
   #333333 70%, 
   #4a6a9e 85%, 
   #65a7e9 100%)`,
  color: '#ffffff',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    height: 'auto',
  },
}));

const ProfileImage = styled(Avatar)(({ theme }) => ({
  width: 350,
  height: 400,

  margin: '2rem auto',
  boxShadow: '0 4px 20px #65a7e9',

  [theme.breakpoints.down('sm')]: {
    width: 250,
    height: 300,
  },
}));

const TextContainer = styled(Box)({
  paddingRight: '2rem',
  maxWidth: 600,
});

function Home() {
  return (
    <Element name="home" id="home">
      <Section>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={7}>
              <TextContainer>
                <Typography variant="h2" component="h1" gutterBottom style={{ fontWeight: 'bold', color: '#65a7e9' }}>
                  <ReactTypingEffect
                    text={['Welcome to My Website!', 'Get to Know Me!']}
                    speed={20}
                    eraseSpeed={20}
                    eraseDelay={750}
                    typingDelay={50}
                  />
                </Typography>
                <Typography variant="body1" color="#65a7e9" paragraph style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
                  My name is George Zakkak, an aspiring technology leader dedicated to advancing my expertise in
                  management information systems and leadership development. This website serves as a window into my
                  professional journey, showcasing my experiences, projects, and future aspirations. Join me as I strive
                  to make a meaningful impact in the tech industry and embrace new challenges along the way.
                </Typography>
              </TextContainer>
            </Grid>

            <Grid item xs={12} md={5} style={{ display: 'flex', justifyContent: 'center' }}>
              <ProfileImage src={profileImage} alt="George Zakkak's profile" />
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Element>
  );
}

export default Home;
