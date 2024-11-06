import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import mis306img1 from '../images/project1.jpg'; // Ensure you have this image
import mis306img2 from '../images/project2.jpg'; // Ensure you have this image


function SystemsAnalytics() {
  return (
    <section id="systems-analytics">
      <Container>
        <Typography variant="h2" gutterBottom>
          Systems Analytics Project (SDSU)
        </Typography>
        <Typography variant="body1" paragraph>
          Worked on a comprehensive systems analytics project for a prominent engineering company based in San Diego, where we identified and streamlined inefficiencies in their data workflows. Through careful analysis and strategic optimization, we were able to enhance the overall system performance, leading to a significant improvement in process speed. This involved implementing advanced data integration techniques, automating key processes, and ensuring smoother cross-functional collaboration between teams. The project's success not only reduced bottlenecks but also laid the groundwork for sustained operational improvements, boosting both productivity and client satisfaction.
        </Typography>

        {/* Image Grid */}
        <Grid container spacing={4} justifyContent="center" style={{ margin: '5rem 0' }}>
          <Grid item xs={12} sm={6} md={4}>
            <img src={mis306img1} alt="George Zakkak's system analysis project #1" className="project-style2" style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={mis306img2} alt="George Zakkak's system analysis project #2" className="project-style2" style={{ width: '100%', height: 'auto' }} />
          </Grid>
        </Grid>


      </Container>
    </section>
  );
}

export default SystemsAnalytics;
