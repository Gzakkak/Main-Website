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
  padding: '4rem 0',
  height: '100%',
  width: '100%',
  background: `linear-gradient(
    #212121 0%,        
    #212121 25%,        
    #333333 50%,         
    #333333 75%,         
    #4a6a9e 100%  
    )`,

  color: '#ffffff',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    padding: '8rem auto',
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

const TextContainer = styled(Box)(({ theme }) => ({
  paddingRight: '0',

  maxWidth: 600,
  textAlign: 'justify',
  [theme.breakpoints.down('md')]: {
    marginBottom: '2rem',
    marginTop: '40px',
  },
}));

function Home() {
  return (
    <Element name="home" id="home">
      <Section>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={7}>
              <TextContainer>
                <Typography

                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    color: '#65a7e9',
                    fontSize: {
                      xs: '1.3rem',
                      sm: '2.3rem',
                    },
                    textAlign: 'center',
                  }}
                >
                  <ReactTypingEffect
                    text={['Welcome to My Digital Space!', 'Building Tomorrow’s Tech Today!']}
                    speed={30}
                    eraseSpeed={30}
                    eraseDelay={2000}
                    typingDelay={50}
                  />
                </Typography>
                <Typography
                  variant="body1"
                  color="#65a7e9"
                  paragraph
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    marginTop: '1rem',
                    textAlign: 'center',
                  }}
                >
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
