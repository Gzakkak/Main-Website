import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Drawer, List, ListItem, ListItemText, Divider, Typography, Box, IconButton } from '@mui/material';
import { Home, Person, Work, Description, Mail, Flag } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={closeSidebar}
      sx={{
        '.MuiDrawer-paper': {
          backgroundColor: '#65a7e9',
          width: 250,
          padding: '16px',
          border: 'none',
          boxShadow: '4px 0 6px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#ffffff',
          letterSpacing: '1px',
        }}
      >
        NAVIGATION
      </Typography>
      <Divider sx={{ backgroundColor: '#ffffff', marginBottom: '16px' }} />
      <List>
        <ListItem
          button
          component={ScrollLink}
          to="home"
          smooth={true}
          duration={500}
          onClick={closeSidebar}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: '#212121',
              transition: 'color 0.3s ease',
            },
            display: 'flex',
            alignItems: 'center',
            padding: '12px',
          }}
        >
          <Home sx={{ marginRight: '12px', color: '#ffffff' }} />
          <ListItemText
            primary="Home"
            sx={{
              color: '#ffffff',
              '&:hover': {
                color: '#212121',
              },
            }}
          />
        </ListItem>
        <ListItem
          button
          component={ScrollLink}
          to="about"
          smooth={true}
          duration={500}
          onClick={closeSidebar}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: '#212121',
              transition: 'color 0.3s ease',
            },
            display: 'flex',
            alignItems: 'center',
            padding: '12px',
          }}
        >
          <Person sx={{ marginRight: '12px', color: '#ffffff' }} />
          <ListItemText
            primary="About Me"
            sx={{
              color: '#ffffff',
              '&:hover': {
                color: '#212121',
              },
            }}
          />
        </ListItem>
        <ListItem
          button
          component={ScrollLink}
          to="projects"
          smooth={true}
          duration={500}
          onClick={closeSidebar}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: '#212121',
              transition: 'color 0.3s ease',
            },
            display: 'flex',
            alignItems: 'center',
            padding: '12px',
          }}
        >
          <Work sx={{ marginRight: '12px', color: '#ffffff' }} />
          <ListItemText
            primary="Projects"
            sx={{
              color: '#ffffff',
              '&:hover': {
                color: '#212121',
              },
            }}
          />
        </ListItem>
        <ListItem
          button
          component={ScrollLink}
          to="goals"
          smooth={true}
          duration={500}
          onClick={closeSidebar}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: '#212121',
              transition: 'color 0.3s ease',
            },
            display: 'flex',
            alignItems: 'center',
            padding: '12px',
          }}
        >
          <Flag sx={{ marginRight: '12px', color: '#ffffff' }} />
          <ListItemText
            primary="Goals"
            sx={{
              color: '#ffffff',
              '&:hover': {
                color: '#212121',
              },
            }}
          />
        </ListItem>
        <ListItem
          button
          component={ScrollLink}
          to="resume"
          smooth={true}
          duration={500}
          onClick={closeSidebar}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: '#212121',
              transition: 'color 0.3s ease',
            },
            display: 'flex',
            alignItems: 'center',
            padding: '12px',
          }}
        >
          <Description sx={{ marginRight: '12px', color: '#ffffff' }} />
          <ListItemText
            primary="Resume"
            sx={{
              color: '#ffffff',
              '&:hover': {
                color: '#212121',
              },
            }}
          />
        </ListItem>
        <ListItem
          button
          component={ScrollLink}
          to="contact"
          smooth={true}
          duration={500}
          onClick={closeSidebar}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: '#212121',
              transition: 'color 0.3s ease',
            },
            display: 'flex',
            alignItems: 'center',
            padding: '12px',
          }}
        >
          <Mail sx={{ marginRight: '12px', color: '#ffffff' }} />
          <ListItemText
            primary="Contact"
            sx={{
              color: '#ffffff',
              '&:hover': {
                color: '#212121',
              },
            }}
          />
        </ListItem>
      </List>

      {/* Social Icons Section */}
      <Box sx={{ paddingTop: 'auto' }}>
        <Divider sx={{ backgroundColor: '#ffffff', marginBottom: '16px' }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <IconButton
            href="https://www.linkedin.com/in/george-zakkak-01856a219/"
            target="_blank"
            aria-label="LinkedIn"
            sx={{
              color: '#ffffff',
              '&:hover': { color: '#1e50ff' },
            }}
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </IconButton>

          <IconButton
            href="https://www.instagram.com/georgezakkakk/?hl=en"
            target="_blank"
            aria-label="Instagram"
            sx={{
              color: '#ffffff',
              '&:hover': { color: '#E1306C' },
            }}
          >
            <InstagramIcon sx={{ fontSize: 40 }} />
          </IconButton>

          <IconButton
            href="mailto:gyzakkak@gmail.com"
            aria-label="Email"
            sx={{
              color: '#ffffff',
              '&:hover': { color: '#FFFF00' },
            }}
          >
            <EmailIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
