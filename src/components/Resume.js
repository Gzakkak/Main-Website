import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/system';

const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0',
  width: '100vw',
  height: '120vh',
  background: `linear-gradient(
    #212121 0%, 
    #212121 50%,
    #333333 70%, 
    #4a6a9e 85%, 
    #65a7e9 100%
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
  marginTop: '90px',
  marginBottom: theme.spacing(4),
  color: '#65a7e9',
  textAlign: 'center',
}));

const Resume = () => {
  // Function to handle print
  const handlePrint = () => {
    window.print(); // This will open the print dialog
  };

  return (
    <Section id="resume">
      <Container maxWidth="lg">
        <Title variant="h2">Resume</Title>


        <Box display="flex" justifyContent="center" marginBottom={4} gap={2}>
          {/* Download Button */}
          <Button
            variant="contained"
            color="primary"
            href="/George Zakkak_24Q3_Resume BS.pdf" // Adjusted file path
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: '1.2rem',
              padding: '10px 30px',
              backgroundColor: '#212121',
              '&:hover': {
                backgroundColor: '#65a7e9',
              },
            }}
          >
            Download
          </Button>

          {/* Print Button */}
          <Button
            variant="contained"
            color="secondary"
            onClick={handlePrint} // Trigger the print dialog
            sx={{
              fontSize: '1.2rem',
              padding: '10px 30px',
              backgroundColor: '#212121',
              '&:hover': {
                backgroundColor: '#65a7e9',
              },
            }}
          >
            Print
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" marginBottom={4}>
          <iframe
            src="/George Zakkak_24Q3_Resume BS.pdf"
            width="100%"
            height="600px"
            style={{ border: 'none' }}
            title="Resume PDF"
          />
        </Box>



      </Container>
    </Section>
  );
};

export default Resume;
