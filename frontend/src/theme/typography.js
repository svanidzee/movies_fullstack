import { createBreakpoints } from '@mui/system';
const breakpoints = createBreakpoints({});

const typography = {
  fontSize: '1.063rem',
  fontFamily: 'HelveticaRoman, Arial',
  fontWeightLight: 700,
  fontWeightRegular: 400,
  fontWeightMedium: 500,

  caption: {
    fontSize: '1.2rem',
    fontWeight: 400,
    textTransform: 'uppercase',
    // textAlign: 'right',
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
};
export default typography;
