import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import BebasNeue from '../img/BebasNeue-Regular.ttf';
import Staatliches from '../img/Staatliches-Regular.ttf';

const theme = createTheme({
  typography: {
    fontSize: 22,
    // fontFamily: 'Bebas Neue, Arial',
    fontFamily: 'Staatliches, Arial',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    // main: red.A400,
    background: {
      default: '#f3f3f3',
      paper: '#f3f3f3',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        // @font-face {
        //   font-family: 'Bebas Neue';
        //   font-style: normal;
        //   font-display: swap;
        //   font-weight: 400;
        //   src: local('Bebas Neue'), local('BebasNeue-Regular'), url(${BebasNeue}) format('truetype');
        //   unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        // }
        @font-face {
          font-family: 'Staatliches';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Staatliches'), local('Staatliches-Regular'), url(${Staatliches}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

export default theme;
