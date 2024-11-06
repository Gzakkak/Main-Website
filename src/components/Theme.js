
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f0f4f8',
    },
    primary: {
      main: '#2783de',
    },
    secondary: {
      main: '#0999f9',
    },
    text: {
      primary: '#ffffff',
      secondary: '#2783de',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      letterSpacing: '1px',
      textAlign: 'center',
    },
    h2: {
      fontSize: '2rem',
      color: '#2783de',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    button: {
      fontWeight: 'bold',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          padding: '10px 15px',
          boxShadow: '0 0 10px rgba(39, 131, 222, 0.8)',
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: '#2783de',
            color: '#fff',
            boxShadow: '0 0 20px rgba(39, 131, 222, 0.8)',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: '#2783de',
          transition: 'color 0.3s',
          '&:hover': {
            color: '#0999f9',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1200px',
          width: '90%',
          margin: '0 auto',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: '250px',
          backgroundColor: '#2783de',
          color: '#ffffff',
          boxShadow: '0 0 10px #2783de',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          fontSize: '1.2rem',
          transition: 'color 0.3s',
          '&:hover': {
            color: '#000000',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          width: '250px',
          height: '250px',
          boxShadow: '0 0 10px #2783de',
          borderRadius: '8px',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'translateY(-15px)',
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          margin: '30px 0',
          borderCollapse: 'collapse',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '15px',
          border: '1px solid #ddd',
        },
        head: {
          backgroundColor: '#2783de',
          color: '#ffffff',
        },
      },
    },
  },
});

export default theme;
