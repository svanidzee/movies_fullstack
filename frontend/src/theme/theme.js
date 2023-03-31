import { createTheme, alpha } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

import Helvetica55Roman from '../assets/fonts/Helvetica55Roman.otf';

const breakpoints = createBreakpoints({});
const black = '#0f1702';
const black2 = '#0f1702';
const gray = '#f3f3f3';
const white = '#faf9f7';

const theme = createTheme({
  typography: {
    fontSize: '1.063rem',
    fontFamily: 'HelveticaRoman, Arial',
    fontWeightLight: 700,
    fontWeightRegular: 400,
    fontWeightMedium: 500,

    caption: {
      fontSize: '1.2rem',
      fontWeight: 400,
      textTransform: 'uppercase',
      [breakpoints.down('md')]: {
        fontSize: '1.1rem',
      },
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      textAlign: 'justify',
      marginBottom: '0.7em',
    },
    subtitle2: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: '#0f1702',
    },
  },
  palette: {
    text: {
      primary: '#0f1702',
      secondary: '#0f1702',
    },
    background: {
      default: '#fff',
      pager: gray,
    },
    common: {
      blue: black,
    },
  },
  shape: { borderRadius: 6 },
  components: {
    MuiStack: {
      variants: [
        {
          props: { variant: 'layout' },
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        },
      ],
    },
    MuiContainer: {
      variants: [
        {
          props: { variant: 'header' },
          style: {
            textAlign: 'center',
            [breakpoints.only('xs')]: {
              textAlign: 'left',
            },
          },
        },
      ],
    },

    MuiCard: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          boxShadow: `0 0 2px 0 ${alpha(
            '#919EAB',
            0.2,
          )}, 0 12px 24px -4px ${alpha('#919EAB', 0.12)}`,
          borderRadius: 12,
          position: 'relative',
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
          maxHeight: '37.5em',
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'HelveticaRoman';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('HelveticaRoman'), local('Helvetica55Roman.otf'), url(${Helvetica55Roman}) format('opentype');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
    },
  },
});

export default theme;
