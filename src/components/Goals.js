import React, { useState } from 'react';
import { Container, Button, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0',
  width: '100vw',
  height: '105vh',
  background: `linear-gradient(
    #65a7e9 0%,
    #65a7e9 20%,
    #65a7e9 35%, 
    #65a7e9 50%,
    #4a6a9e 70%, 
    #333333 85%, 
    #212121 100%
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
  marginBottom: theme.spacing(8),
  marginTop: '-150px',
  color: '#212121',
  textAlign: 'center',
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  lineHeight: 1.7,
  color: '#ffffff',
  marginBottom: theme.spacing(4),
  display: 'none',
  textAlign: 'left',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '0 5%',
  },
}));

const GoalContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer',
  '&:hover': {
    '& > div': {
      display: 'block',
    },
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
    title: 'Stepping into Leadership',
    paragraph: 'As I look forward to joining a leadership role with Amazon, Inc. in San Diego by 2025, I see this milestone as a major step in achieving not only career success but also the personal fulfillment of managing large teams and overseeing operations at scale. My family will be by my side during this next chapter, as they’ve been for every major milestone, whether it was my academic achievements, completing internships, or stepping into leadership roles in my community.',
  },
  {
    title: 'Health, Wellness, and Lifelong Balance',
    paragraph: 'In the long run, I also have personal goals tied to health, wellness, and personal development. I aim to cultivate hobbies and interests that keep me grounded, like staying active through calisthenics, cooking, and exploring new cultures through travel. These experiences help me bring balance into my life and add perspective, which I believe is essential for long-term success both professionally and personally.',
  },
  {
    title: 'Holistic Growth: Striving for Excellence in Career and Life',
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
      <Container maxWidth={false}>
        <Title variant="h2">Goals</Title>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            {goalsData.map((goal, index) => (
              <GoalContainer key={index} onClick={() => toggleParagraph(index)}>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '10px',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    backgroundColor: '#212121',
                    color: '#65a7e9',
                    '&:hover': {
                      backgroundColor: '#4a6a9e',
                    },
                  }}
                >
                  {goal.title}

                  <ArrowDownwardIcon sx={{ marginLeft: 'auto' }} />
                </Button>
                {expandedIndex === index && (
                  <Paragraph style={{ display: 'block' }}>{goal.paragraph}</Paragraph>
                )}
              </GoalContainer>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default Goals;
