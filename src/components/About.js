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

// Responsive Title styling
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

// Responsive Paragraph styling
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
      <Container maxWidth={false}> {/* Allows full width without container constraints */}
        <Title variant="h2">About Me</Title>
        <Grid container spacing={3} justifyContent="center" direction="column" alignItems="center">
          <Grid item xs={12}>
            <Paragraph>
              Hi, I’m <strong>George Zakkak</strong>, a dedicated student nearing the completion of my Bachelor’s degree
              in <strong>Management Information Systems</strong> at San Diego State University, with graduation set for
              December 2024. I also hold an Associate’s degree in Business Administration from Grossmont College. My academic
              journey has sparked a deep passion for systems analysis, technology management, and leadership.
            </Paragraph>
            <Paragraph>
              Throughout my career, I’ve cultivated a diverse skill set through hands-on experience in <strong>systems
                analysis</strong> and <strong>project management</strong>. I’ve led teams in developing data-driven solutions
              to optimize operational efficiency, enhancing my ability to manage complex processes and deliver impactful
              results. My technical acumen is complemented by leadership training, where I have honed essential soft skills
              like <strong>strategic decision-making</strong> and <strong>team collaboration</strong>.
            </Paragraph>
            <Paragraph>
              Additionally, my participation in leadership programs, such as <strong>Model United Nations</strong> and
              professional development webinars, has allowed me to sharpen my public speaking, conflict resolution, and
              problem-solving abilities in dynamic environments.
            </Paragraph>
            <Paragraph>
              In my free time, I enjoy keeping up with the latest <strong>technology trends</strong>, leadership development
              seminars, and working on my personal growth. My goal is to combine my technical expertise with leadership to
              impact the tech industry in a significant way.
            </Paragraph>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default About;
