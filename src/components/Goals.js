import React, { useState } from 'react';
import { Container, Button, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem 0',
  height: '100%',
  width: '100%',
  background: `linear-gradient(
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
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  lineHeight: 1.7,
  color: '#ffffff',
  marginBottom: theme.spacing(1),
  textAlign: 'center',
  padding: 'auto',
  maxWidth: '100%',
  [theme.breakpoints.down('md')]: {
    padding: 'auto',
    width: '100%',
  },
}));

const goalsData = [
  {
    title: 'Leveraging Technology for Innovation and Impact',
    paragraph: 'My immediate professional goal is to apply my skills in project management and systems analysis within a technology-driven organization where I can help streamline operations and drive meaningful innovation. I’m passionate about leveraging technology to solve complex challenges, and in the long term, I aspire to lead large-scale tech initiatives that intersect with my growing interest in public policy. I see myself managing significant projects that not only drive business success but also contribute to broader societal impacts through technology.',
  },
  {
    title: 'Personal Growth and Leadership Development',
    paragraph: 'Personally, I value continuous growth and development, both in my career and in my personal life. A core part of my long-term goals is to balance professional success with personal fulfillment. My family has always been a source of support and motivation. They’ve encouraged me to push beyond my limits and taught me the importance of resilience and empathy, traits that I carry into my leadership and collaborative efforts. I aim to be the kind of leader who creates environments where teams can thrive, much like the strong foundation my family provided for me.',
  },
  {
    title: 'Stepping into Leadership and Shaping the Future of Innovation',
    paragraph: 'As I step into an upcoming leadership role in San Diego by 2025, centered around the dynamic world of product management. It will involve driving strategic initiatives, overseeing product development, and ensuring that solutions align seamlessly with both user needs and business objectives. This milestone is about leading cross-functional teams to innovate and deliver impactful products at scale, with a vision for growth and transformative success.',

  },
  {
    title: 'Health, Wellness, and Lifelong Balance',
    paragraph: 'In the long run, I also have personal goals tied to health, wellness, and personal development. I aim to cultivate hobbies and interests that keep me grounded, like staying active through calisthenics, cooking, and exploring new cultures through travel. These experiences help me bring balance into my life and add perspective, which I believe is essential for long-term success both professionally and personally.',
  },
  {
    title: 'Striving for Excellence in Career and Life',
    paragraph: 'Ultimately, my journey is not just about professional accomplishments; it’s about reaching milestones that blend career achievements with personal growth, all while staying connected to my values and the support system that has helped shape who I am today.',
  },
];

function Goals() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleParagraph = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Section id="goals">
      <Container maxWidth="lg">
        <Title variant="h2">Goals</Title>
        <Grid container spacing={2} justifyContent="center">
          {goalsData.map((goal, index) => (
            <Grid item xs={12} key={index} display="flex" justifyContent="center">
              <Box
                sx={{
                  width: {
                    xs: '100%',
                    md: '85%',
                  },
                  textAlign: {
                    xs: 'center',
                    md: 'left',
                  },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => toggleParagraph(index)}
                  sx={{
                    display: 'flex',
                    padding: '12px',
                    marginBottom: '10px',
                    backgroundColor: '#212121',
                    color: '#65a7e9',
                    '&:hover': {
                      backgroundColor: '#4a6a9e',
                    },
                    justifyContent: {
                      xs: 'center',
                      md: 'flex-start',
                    },
                  }}
                >
                  {goal.title}
                  <ArrowDownwardIcon sx={{ marginLeft: 'auto' }} />
                </Button>
                {expandedIndex === index && (
                  <Box
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    textAlign="center"
                    margin="2rem auto"
                  >
                    <Paragraph>{goal.paragraph}</Paragraph>
                  </Box>
                )}
              </Box>
            </Grid>

          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default Goals;
