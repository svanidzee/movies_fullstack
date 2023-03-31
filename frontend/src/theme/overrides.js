import { alpha } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';
import Helvetica55Roman from '../assets/fonts/Helvetica55Roman.otf';

const breakpoints = createBreakpoints({});

const components = {
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
          // [breakpoints.down('sm')]: {
          //   textAlign: 'left',
          // },
          // [breakpoints.down('md')]: {
          //   textAlign: 'center',
          // },
        },
      },
    ],
  },
  MuiPaper: {
    variants: [
      {
        props: { variant: 'movie-wrapper' },
        style: {
          // borderRadius: '10px',
          // boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
          // boxShadow: '0 0 0 1px rgba(#000, .05), 0 3px 8px 0',
          // backgroundColor: 'green',
          maxWidth: '50em',
          minWidth: '21em',
          minHeight: '30em',
          paddingTop: 15,
          // display: 'flex',
          // flexDirection: 'row',
          // alignItems: 'center',
          // justifyContent: 'center',
          // padding: 40,
          // marginTop: '2em',
          // marginLeft: '10%',
          // [breakpoints.down('xs')]: {
          //   // backgroundColor: 'green',
          //   maxWidth: '23em',
          // },
          [breakpoints.down('sm')]: {
            backgroundColor: 'red',
            maxWidth: '25em',
          },
        },
      },
    ],
  },
  MuiCard: {
    styleOverrides: {
      root: {
        // height: '100%',
        // display: 'flex',
        // flexDirection: 'column',
        textDecoration: 'none',
        // borderColor: 'red',
        boxShadow: `0 0 2px 0 ${alpha(
          '#919EAB',
          0.2,
        )}, 0 12px 24px -4px ${alpha('#919EAB', 0.12)}`,
        borderRadius: 12,
        position: 'relative',
        // zIndex: 0,
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

  MuiButton: {
    styleOverrides: {
      root: {
        // '&:hover': {
        //   boxShadow: 'none',
        //   // backgroundColor: '#000',
        //   // color: '#fff',
        // },
        // color: '#000',
        // textTransform: 'none',
      },
      // sizeLarge: {
      //   height: 48,
      // },
      // containedInherit: {
      //   color: '#212B36',
      //   boxShadow: `0 8px 16px 0 ${alpha('#919EAB', 0.16)}`,
      //   '&:hover': {
      //     backgroundColor: '#C4CDD5',
      //   },
      // },
      // containedPrimary: {
      //   boxShadow: `0 8px 16px 0 ${alpha('#3366FF', 0.24)}`,
      // },
      // containedSecondary: {
      //   boxShadow: `0 8px 16px 0 ${alpha('#3366FF', 0.24)}`,
      // },
      // outlinedInherit: {
      //   border: `1px solid ${alpha('#919EAB', 0.32)}`,
      //   '&:hover': {
      //     backgroundColor: alpha('#919EAB', 0.08),
      //   },
      // },
      // textInherit: {
      //   '&:hover': {
      //     backgroundColor: alpha('#919EAB', 0.08),
      //   },
      // },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
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
};

export default components;
