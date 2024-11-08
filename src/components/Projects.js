import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography, Box, Button } from '@mui/material';
import amazonlogo from '../images/amazonlogo.png';
import sdsulogo from '../images/sdsulogo.png';
import munlogo from '../images/munlogo.png';

function Projects() {
  const [flippedCardId, setFlippedCardId] = useState(null);

  const projects = [
    {
      id: 'amazon-internship',
      title: 'Process Flow Optimization',
      logo: amazonlogo,
      description: `As a Technical Management Intern at Amazon, I led a cross-functional team to execute 
                    a high-impact project focused on optimizing warehouse management systems...`,
      link: '/amazoninternship',
    },
    {
      id: 'systems-analytics',
      title: 'Systems Analytics Project',
      logo: sdsulogo,
      description: `Worked on a comprehensive systems analytics project for a prominent engineering company 
                    based in San Diego, where we identified and streamlined inefficiencies in their data workflows...`,
      link: '/SystemAnalytics',
    },
    {
      id: 'model-united-nations',
      title: 'Model United Nations (ABS)',
      logo: munlogo,
      description: `As a delegate, I actively engaged in multiple high-level sessions centered on leadership 
                    in political conflict resolution, where I refined my public speaking, negotiation, and diplomatic skills...`,
      link: '/ModelUnitedNations',
    },
    {
      id: 'model-united-nations',
      title: 'Model United Nations (ABS)',
      logo: munlogo,
      description: `As a delegate, I actively engaged in multiple high-level sessions centered on leadership 
                    in political conflict resolution, where I refined my public speaking, negotiation, and diplomatic skills...`,
      link: '/ModelUnitedNations',
    },
    {
      id: 'model-united-nations',
      title: 'Model United Nations (ABS)',
      logo: munlogo,
      description: `As a delegate, I actively engaged in multiple high-level sessions centered on leadership 
                    in political conflict resolution, where I refined my public speaking, negotiation, and diplomatic skills...`,
      link: '/ModelUnitedNations',
    },
    {
      id: 'model-united-nations',
      title: 'Model United Nations (ABS)',
      logo: munlogo,
      description: `As a delegate, I actively engaged in multiple high-level sessions centered on leadership 
                    in political conflict resolution, where I refined my public speaking, negotiation, and diplomatic skills...`,
      link: '/ModelUnitedNations',
    },
    {
      id: 'model-united-nations',
      title: 'Model United Nations (ABS)',
      logo: munlogo,
      description: `As a delegate, I actively engaged in multiple high-level sessions centered on leadership 
                    in political conflict resolution, where I refined my public speaking, negotiation, and diplomatic skills...`,
      link: '/ModelUnitedNations',
    },
    {
      id: 'model-united-nations',
      title: 'Model United Nations (ABS)',
      logo: munlogo,
      description: `As a delegate, I actively engaged in multiple high-level sessions centered on leadership 
                    in political conflict resolution, where I refined my public speaking, negotiation, and diplomatic skills...`,
      link: '/ModelUnitedNations',
    },

  ];

  const handleCardClick = (id) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        padding: { xs: 'auto', sm: '4rem 0' },
        width: '100%',
        minHeight: '100%',
        textAlign: 'center',
        background: `linear-gradient( 
          #333333 0%, 
          #212121 25%, 
          #212121 50%, 
          #333333 75%, 
          #4a6a9e 100%)`,
        margin: '0 auto',
      }}
    >
      <Typography
        fontWeight={700}
        fontSize={{ xs: '2rem', sm: '2.5rem' }} // Adjust font size for responsiveness
        gutterBottom
        color="#65a7e9"
        sx={{
          mb: { xs: 3, sm: 4 }, // Adjust margin-bottom for responsiveness
          padding: { xs: 'auto', sm: '0 2rem' }, // Optional: Add padding for better alignment on mobile devices
        }}
      >
        PROJECTS
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {projects.map((project) => (
          <Grid item xs={6} sm={6} md={3} key={project.id}>
            <Box
              sx={{
                perspective: '1000px',
                width: '100%',
                maxWidth: { xs: 150, sm: 250 },
                height: { xs: 150, sm: 250 },
                mx: 'auto',
                mt: 2,
                padding: { xs: 'auto', sm: '0 2rem' },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.8s ease-out',
                  transform: flippedCardId === project.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transformOrigin: 'center',
                  padding: { xs: 'auto', sm: 'auto' },
                }}
                onClick={() => handleCardClick(project.id)}
              >
                <Paper
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    p: 2,
                    boxShadow: '0 0 20px #65a7e9',
                    left: 0,
                    right: 0,
                    margin: 'auto',
                    bgcolor: '#212121',
                    color: 'white',
                    padding: { xs: 'auto', sm: 'auto' },
                  }}
                >
                  <Box
                    component="img"
                    src={project.logo}
                    alt={project.title}
                    sx={{
                      width: '80%',
                      height: 'auto',
                      mb: 2,
                      borderRadius: 1,
                    }}
                  />
                  <Typography variant="h6" color="inherit">
                    {project.title}
                  </Typography>
                </Paper>

                <Paper
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    p: 2,
                    boxShadow: '0 0 20px #65a7e9',
                    left: 0,
                    right: 0,
                    margin: 'auto',
                    bgcolor: '#65a7e9',
                    color: 'white',
                    transform: 'rotateY(180deg)',

                  }}
                >
                  <Typography variant="body2" color="#212121" sx={{ mb: 2, textAlign: 'center' }}>
                    {project.description}
                  </Typography>
                  <Button
                    component={Link}
                    to={project.link}
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{
                      '&:hover': {
                        boxShadow: '0 0 20px #212121',
                      },
                    }}
                  >
                    Check Project
                  </Button>
                </Paper>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
