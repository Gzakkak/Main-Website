import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import amazonimg from '../images/amazon.jpg'; // Ensure you have this image

function AmazonInternship() {
  return (
    <section id="amazon-internship">
      <Container>
        <Typography variant="h2" gutterBottom>
          Amazon Internship
        </Typography>
        <Typography variant="body1" paragraph>
          As a Technical Management Intern at Amazon, I led a cross-functional team to execute a high-impact project focused on optimizing warehouse management systems. By leveraging advanced data analysis and automation tools, we identified inefficiencies in the existing workflow and implemented strategic improvements. These initiatives resulted in significant cost savings and a noticeable reduction in delivery times, enhancing overall operational efficiency. The project not only streamlined internal processes but also directly contributed to Amazon’s commitment to faster, more reliable service for its customers.
        </Typography>

        {/* Image Grid */}
        <Grid container justifyContent="center" style={{ margin: '5rem 0' }}>
          <Grid item xs={12} md={8}>
            <img src={amazonimg} alt="George Zakkak at his Amazon internship" className="project-style1" style={{ width: '100%', height: 'auto' }} />
          </Grid>
        </Grid>


      </Container>
    </section>
  );
}

export default AmazonInternship;
