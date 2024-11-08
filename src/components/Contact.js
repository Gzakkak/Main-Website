import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import emailjs from 'emailjs-com';

// Custom styles for consistent theming
const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem 0', // Adjusted padding for better responsiveness
  minHeight: '100%',
  width: '100%',
  background: `linear-gradient(
    #65a7e9 0%,
    #65a7e9 20%,
    #65a7e9 35%, 
    #65a7e9 50%,
    #4a6a9e 70%, 
    #4a6a9e 85%, 
    #212121 100%
  )`,
  color: '#212121',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    padding: '3rem 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 0',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#212121',
  textAlign: 'center',
  marginBottom: theme.spacing(4), // Added margin for spacing
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem', // Adjust font size for smaller screens
  },
}));

const SuccessMessage = styled(Typography)(({ theme }) => ({
  color: 'green',
  marginTop: theme.spacing(2),
  textAlign: 'center',
}));

const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: 'red',
  marginTop: theme.spacing(2),
  textAlign: 'center',
}));

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send('service_m72sujj', 'template_7kgrrh2', formData, 'zXyUC5yeRa-G_K3JC')
      .then(() => {
        setSuccessMessage('Thanks for reaching out, talk soon!');
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setErrorMessage('There was an error sending your message. Please try again.');
        setSuccessMessage('');
      });
  };

  return (
    <Section id="contact">
      <Container maxWidth="sm">
        <Title variant="h2">Get In Touch!</Title>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FFFFFF',
                },
                '&:hover fieldset': {
                  borderColor: '#000000',
                  boxShadow: '0 0 15px #FFFFFF',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFFFFF',
                },
              },
              mb: 2, // Margin bottom for spacing
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FFFFFF',
                },
                '&:hover fieldset': {
                  borderColor: '#000000',
                  boxShadow: '0 0 15px #FFFFFF',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFFFFF',
                },
              },
              mb: 2, // Margin bottom for spacing
            }}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
            sx={{
              '& .MuiInputLabel-root': {
                color: '#FFFFFF',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FFFFFF',
                },
                '&:hover fieldset': {
                  borderColor: '#000000',
                  boxShadow: '0 0 15px #FFFFFF',

                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFFFFF',
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: '#212121',
              color: '#65a7e9',
              '&:hover': {
                backgroundColor: '#333333',
                color: '#00FF00',
                boxShadow: '0 0 15px #00FF00',
              },
            }}
          >
            Submit
          </Button>
        </form>

        {/* Success/Error Messages */}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Container>
    </Section>
  );
}

export default Contact;
