import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import munimg from '../images/mun.jpg'; // Ensure you have this image


function ModelUnitedNations() {
  return (
    <section id="model-united-nations">
      <Container>
        <Typography variant="h2" gutterBottom>
          Model United Nations (ABS)
        </Typography>
        <Typography variant="body1" paragraph>
          As a delegate, I actively engaged in multiple high-level sessions centered on leadership in political conflict resolution, where I refined my public speaking, negotiation, and diplomatic skills. Through thoughtful debate and collaboration, I contributed to crafting actionable solutions to complex geopolitical issues. These experiences sharpened my ability to lead discussions, build consensus, and navigate sensitive political dynamics, all while honing my strategic thinking and communication abilities in a global context.
        </Typography>

        {/* Image Grid */}
        <Grid container justifyContent="center" style={{ margin: '5rem 0' }}>
          <Grid item xs={12} md={8}>
            <img src={munimg} alt="George Zakkak at the Model United Nations conference" className="project-style1" style={{ width: '100%', height: 'auto' }} />
          </Grid>
        </Grid>


      </Container>
    </section>
  );
}

export default ModelUnitedNations;
