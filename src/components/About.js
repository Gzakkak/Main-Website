import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

// Custom styles for the section
const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  padding: '4rem 0',
  background: `linear-gradient(
    to bottom,
    #4a6a9e 0%,        
    #5589c3 25%,        
    #65a7e9 50%,         
    #5589c3 75%,         
    #333333 100%         
  )`,
  color: '#212121',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    padding: '3rem 0',
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 0',
    width: '100%',
  },
}));


const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: theme.spacing(8),
  color: '#212121',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
    marginTop: theme.spacing(-4),
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
    marginTop: theme.spacing(-3),
    marginBottom: theme.spacing(3),
  },
}));


const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  lineHeight: 1.7,
  color: '#212121',
  marginBottom: theme.spacing(3),
  textAlign: 'center',
  width: '100%',
  padding: '3rem auto',
  [theme.breakpoints.up('md')]: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '3rem auto',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    fontSize: '0.95rem',
    padding: '3rem auto',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    padding: '3rem auto',

  },
}));

function About() {
  return (
    <Section id="about">
      <Container maxWidth={false}>
        <Title variant="h2">About Me</Title>
        <Grid container spacing={3} justifyContent="center" direction="column" alignItems="center">
          <Grid item xs={12}>
            <Paragraph>
              Hi, I’m <strong>George Zakkak</strong>, a dedicated student nearing the completion of my Bachelor’s degree
              in <strong>Management Information Systems</strong> at San Diego State University, as a forward-thinking professional with a strong background in Management Information Systems and Business Administration, I bring a strategic and analytical mindset to solving complex business and technological challenges. My expertise encompasses data analytics, systems analysis, and technical management, honed through experiences in high-impact roles, including at Amazon and within cross-functional engineering projects.
            </Paragraph>
            <Paragraph>
              With a commitment to continuous improvement and strategic growth, I specialize in transforming data insights into actionable outcomes, fostering innovation, and leading teams toward success. My work in systems analysis and model-based problem-solving has equipped me with the acumen to navigate and improve dynamic organizational structures effectively.
            </Paragraph>
            <Paragraph>
              I am dedicated to leveraging technology and analytics to drive efficiency, optimize operations, and contribute to business intelligence in today’s ever-evolving digital landscape.
            </Paragraph>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default About;
