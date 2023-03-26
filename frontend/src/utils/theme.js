import { createTheme } from '@mui/material/styles';

const black = '#000000';
const gray = '#f3f3f3';

const theme = createTheme({
  palette: {
    background: {
      pager: gray,
    },
    common: {
      blue: black,
    },
  },
  typography: {
    fontSize: 17,
    fontFamily: 'Staatliches, cursive',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,

    caption: {
      fontSize: '2.2rem',
      fontWeight: 300,
      color: black,
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 400,
      color: black,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      color: black,
      textAlign: 'justify',
      marginBottom: '0.7em',
    },
    subtitle2: {
      fontSize: '1.1rem',
      fontWeight: 400,
      color: black,
    },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textDecoration: 'none',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexGrow: 1,
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: '100%',
          maxHeight: '500px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: black,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
