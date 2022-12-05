import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A1A1A',
    },
    secondary: {
      main: '#F5F5F5',
    },
    text: {
      primary: '#414042',
      secondary: '#666666',
    },
    success: {
      main: '#19B86B',
    },
    background: {
      default: 'rgba(246, 246, 246, 1)',
    },
  },
  typography: {
    fontFamily: 'Ubuntu',
    h1: {
      fontWeight: 400,
      fontSize: 96,
    },
    h2: {
      fontWeight: 400,
      fontSize: 60,
    },
    h3: {
      fontWeight: 400,
      fontSize: 48,
    },
    h4: {
      fontWeight: 400,
      fontSize: 34,
    },
    h5: {
      fontWeight: 400,
      fontSize: 24,
    },
    h6: {
      fontWeight: 400,
      fontSize: 20,
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 14,
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
    },
    overline: {
      fontWeight: 400,
      fontSize: 10,
    },
    button: {
      fontSize: 16,
      fontWeight: 400,
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        containedPrimary: {
          color: 'white',
        },
        containedSecondary: {
          color: 'white',
        },
      },
    },
  },
});

export default theme;
