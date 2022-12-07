import { createTheme } from '@mui/material/styles';

const primary = '#1A1A1A';
const secondary = '#F5F5F5';

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
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
      fontWeight: 700,
      fontSize: 96,
    },
    h2: {
      fontWeight: 700,
      fontSize: 60,
    },
    h3: {
      fontWeight: 600,
      fontSize: 48,
    },
    h4: {
      fontWeight: 600,
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
        outlined: {
          borderWidth: 3,
          '&:hover': {
            borderWidth: 3,
          },
        },
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
});

export default theme;
