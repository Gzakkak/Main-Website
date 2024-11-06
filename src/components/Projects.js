import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography, Box, Button } from '@mui/material';
import amazonlogo from '../images/amazonlogo.png';
import sdsulogo from '../images/sdsulogo.png';
import munlogo from '../images/munlogo.png';

function Projects() {
  const [flippedCardId, setFlippedCardId] = useState(null); // Track the flipped card by its ID

  const projects = [
    {
      id: 'amazon-internship',
      title: 'Process Flow Optimization',
      logo: amazonlogo,
      description: `
        As a Technical Management Intern at Amazon, I led a cross-functional team to execute 
        a high-impact project focused on optimizing warehouse management systems...
      `,
      link: '/AmazonInternship',
    },
    {
      id: 'systems-analytics',
      title: 'Systems Analytics Project',
      logo: sdsulogo,
      description: `
        Worked on a comprehensive systems analytics project for a prominent engineering company 
        based in San Diego, where we identified and streamlined inefficiencies in their data workflows...
      `,
      link: '/SystemAnalytics',
    },
    {
      id: 'model-united-nations',
      title: 'Model United Nations (ABS)',
      logo: munlogo,
      description: `
        As a delegate, I actively engaged in multiple high-level sessions centered on leadership 
        in political conflict resolution, where I refined my public speaking, negotiation, and 
        diplomatic skills...
      `,
      link: '/ModelUnitedNations',
    },
    {
      id: 'model-united-nations',
      title: 'Model United Nations (ABS)',
      logo: munlogo,
      description: `
        As a delegate, I actively engaged in multiple high-level sessions centered on leadership 
        in political conflict resolution, where I refined my public speaking, negotiation, and 
        diplomatic skills...
      `,
      link: '/ModelUnitedNations',
    },
    {
      id: 'model-united-nations',
      title: 'Model United Nations (ABS)',
      logo: munlogo,
      description: `
        As a delegate, I actively engaged in multiple high-level sessions centered on leadership 
        in political conflict resolution, where I refined my public speaking, negotiation, and 
        diplomatic skills...
      `,
      link: '/ModelUnitedNations',
    },
    {
      id: 'model-united-nations',
      title: 'Model United Nations (ABS)',
      logo: munlogo,
      description: `
        As a delegate, I actively engaged in multiple high-level sessions centered on leadership 
        in political conflict resolution, where I refined my public speaking, negotiation, and 
        diplomatic skills...
      `,
      link: '/ModelUnitedNations',
    },
    {
      id: 'model-united-nations',
      title: 'Model United Nations (ABS)',
      logo: munlogo,
      description: `
        As a delegate, I actively engaged in multiple high-level sessions centered on leadership 
        in political conflict resolution, where I refined my public speaking, negotiation, and 
        diplomatic skills...
      `,
      link: '/ModelUnitedNations',
    },
    {
      id: 'model-united-nations',
      title: 'Model United Nations (ABS)',
      logo: munlogo,
      description: `
        As a delegate, I actively engaged in multiple high-level sessions centered on leadership 
        in political conflict resolution, where I refined my public speaking, negotiation, and 
        diplomatic skills...
      `,
      link: '/ModelUnitedNations',
    },
    {
      id: 'model-united-nations',
      title: 'Model United Nations (ABS)',
      logo: munlogo,
      description: `
        As a delegate, I actively engaged in multiple high-level sessions centered on leadership 
        in political conflict resolution, where I refined my public speaking, negotiation, and 
        diplomatic skills...
      `,
      link: '/ModelUnitedNations',
    },

  ];

  const handleCardClick = (id) => {
    // If the clicked card is already flipped, unflip it; otherwise, flip it
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        padding: '4rem 1rem',
        textAlign: 'center',
        background: `linear-gradient( 
        #333333 0%, 
        #212121 15%, 
        #212121 20%,
        #212121 30%, 
        #212121 40%, 
        #212121 50%, 
        #333333 70%, 
        #4a6a9e 85%, 
        #65a7e9 100%)`,
      }}
    >
      <Typography
        fontWeight={700}
        fontSize='2.5rem'
        gutterBottom
        color="#65a7e9"

        sx={{ mb: 4 }} // Add margin bottom for spacing below the title
      >
        PROJECTS
      </Typography>
      <Grid container spacing={6} justifyContent="center">
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Box
              sx={{
                perspective: '1000px',
                width: '100%',
                maxWidth: 300,
                height: 300,
                mx: 'auto',
                mt: 4,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.8s ease-out', // Smoother transition
                  transform: flippedCardId === project.id ? 'rotateY(180deg)' : 'rotateY(0deg)', // Apply flip conditionally
                }}
                onClick={() => handleCardClick(project.id)} // Handle click to flip only the clicked card
              >
                {/* Front side with logo */}
                <Paper
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    bgcolor: '#212121',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    p: 2,
                    boxShadow: '0 0 20px #65a7e9',
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

                {/* Back side with description and button */}
                <Paper
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    bgcolor: '#65a7e9',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    p: 2,
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
    </Box >
  );
}

export default Projects;
