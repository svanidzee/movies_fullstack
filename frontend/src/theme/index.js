import { createTheme, alpha } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';
import Helvetica55Roman from '../assets/fonts/Helvetica55Roman.otf';
import palette from './palette';
import typography from './typography';
import components from './overrides';

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette,
  typography,
  shape: { borderRadius: 6 },
  components,
});
export default theme;

// fontSize: "1.5rem",
// maxWidth: "50em",
// paddingLeft: "5em",
// height: "25em",

// estimateButton: {
//   ...theme.typography.estimate,
//   borderRadius: 50,
//   height: 80,
//   width: 205,

//   fontSize: "1.5rem",
//     marginRight: "5em",
