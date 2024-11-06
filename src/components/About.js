import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

// Custom styles for the section
const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0',
  width: '100vw', // Full page width
  height: '120vh',
  background: `linear-gradient(
    to bottom,
    #65a7e9 0%,          
    #65a7e9 30%,         
    #65a7e9 50%,         
    #4a6a9e 75%, 
    #333333 90%,
    #333333 100%        
  )`,
  color: '#212121',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    padding: '2rem 5%',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginTop: '-100px',
  marginBottom: theme.spacing(8),
  color: '#212121',
  textAlign: 'center', // Center the title
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  lineHeight: 1.7,
  color: '#212121',
  marginBottom: theme.spacing(4),
  textAlign: 'left', // Align text to the left
  width: '100%', // Allow paragraph to take up full width
  [theme.breakpoints.up('md')]: {
    width: '100%', // Limit the width to 80% on larger screens
    marginLeft: 'auto',
    marginRight: 'auto', // Center the text block on larger screens
  },
  [theme.breakpoints.down('md')]: {
    width: '100%', // Full width on smaller screens
    padding: '0 5%', // Add some padding for smaller screens
  },
}));

function About() {
  return (
    <Section id="about">
      <Container maxWidth={false}> {/* Set maxWidth to false to remove container limits */}
        <Title variant="h2">About Me</Title>
        <Grid container spacing={4} justifyContent="center">
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
