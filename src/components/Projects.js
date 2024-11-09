import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography, Box, Button } from '@mui/material';
import amazonlogo from '../images/amazonlogo.png';
import munlogo from '../images/munlogo.png';
import reactlogo from '../images/reactlogo.png';
import moelogo from '../images/moelogo.png';
import pythonlogo from '../images/pythonlogo.png';
import sqllogo from '../images/sqllogo.png';
import ecommercelogo from '../images/ecommercelogo.png';
import saplogo from '../images/saplogo.png';

function Projects() {
  const [flippedCardId, setFlippedCardId] = useState(null);

  const projects = [
    {
      id: 'amazon-internship',
      title: 'Process Flow Optimization',
      logo: amazonlogo,
      description: '',
      link: '/amazoninternship',
    },
    {
      id: 'systems-analytics',
      title: 'Systems Analytics ',
      logo: moelogo,
      description: '',
      link: '/SystemAnalytics',
    },
    {
      id: 'model-united-nations',
      title: 'Model United Nations',
      logo: munlogo,
      description: '',
      link: '/ModelUnitedNations',
    },
    {
      id: 'react-javascript',
      title: 'React JS',
      logo: reactlogo,
      description: '',
      link: '/Reactjs',
    },
    {
      id: 'Python',
      title: 'Python',
      logo: pythonlogo,
      description: '',
      link: '/ModelUnitedNations',
    },
    {
      id: 'SQL',
      title: 'SQL',
      logo: sqllogo,
      description: '',
      link: '/ModelUnitedNations',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      logo: ecommercelogo,
      description: '',
      link: '/ModelUnitedNations',
    },
    {
      id: 'SAP',
      title: 'SAP',
      logo: saplogo,
      description: '',
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
        padding: 'auto',
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
        fontSize={{ xs: '2rem', sm: '2.5rem' }}
        gutterBottom
        color="#65a7e9"
        sx={{
          mb: { xs: 3, sm: 4 },
          padding: { xs: 'auto', sm: '0 2rem' },
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
                padding: 'auto',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.8s ease-out',
                  transform: flippedCardId === project.id ? 'rotateX(180deg)' : 'rotateY(0deg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transformOrigin: 'center',
                  padding: 'auto',
                  margin: 'auto',
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
                    padding: 'auto',

                  }}
                >
                  <Box
                    component="img"
                    src={project.logo}
                    alt={project.title}
                    sx={{
                      width: '70%',
                      height: 'auto',
                      mb: 2,
                      borderRadius: 1,
                      margin: 'auto',

                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: '.95rem', sm: '1.5rem' }, // Adjust the font sizes as needed
                      color: 'inherit',
                    }}
                  >
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
                    transform: 'rotateX(180deg)',
                    padding: 'auto',

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
                    Project Coming Soon!
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
