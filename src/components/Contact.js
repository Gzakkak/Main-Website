import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import emailjs from 'emailjs-com';



// Custom styles for consistent theming
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
  color: '#212121',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
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
      .then((response) => {
        setSuccessMessage('Thanks for reaching out, talk soon!');
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
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
                color: '#212121',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#212121',

                },
                '&:hover fieldset': {
                  borderColor: '#000000',
                  boxShadow: '0 0 20px #FFFFFF'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFFFFF',
                },
              },
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
                color: '#212121',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#212121',

                },
                '&:hover fieldset': {
                  borderColor: '#000000',
                  boxShadow: '0 0 20px #FFFFFF'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FFFFFF',
                },
              },
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
                color: '#212121',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#212121',

                },
                '&:hover fieldset': {
                  borderColor: '#000000',
                  boxShadow: '0 0 20px #FFFFFF'
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
            color="#65a7e9"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: '#212121',
              color: '#65a7e9',
              '&:hover': {
                backgroundColor: '#333333',
                boxShadow: '0 0 20px #00FF00',
              },
            }}
          >
            Submit
          </Button>
        </form>

        {/* Success/Error Messages */}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        {/*
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
          <SocialLink href="https://www.linkedin.com/in/george-zakkak-01856a219/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn Logo" /> @george zakkak
          </SocialLink>
          <SocialLink href="https://www.instagram.com/georgezakkakk/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram Logo" /> @george.zakkakk
          </SocialLink>
          <SocialLink href="mailto:gyzakkak@gmail.com">
            <img src={emailLogo} alt="Email Logo" /> gyzakkak@gmail.com
          </SocialLink>
        </Box>*/}
      </Container>
    </Section>
  );
}

export default Contact;
