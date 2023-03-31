import { createBreakpoints } from '@mui/system';
const breakpoints = createBreakpoints({});

const typography = {
  fontSize: '1.063rem',
  fontFamily: 'HelveticaRoman, Arial',
  fontWeightLight: 700,
  fontWeightRegular: 400,
  fontWeightMedium: 500,

  caption: {
    fontSize: '2rem',
    fontWeight: 300,
    textTransform: 'uppercase',
    [breakpoints.down('md')]: {
      fontSize: '1.3rem',
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
  },
};
export default typography;

// 1 vagoni 72 73
