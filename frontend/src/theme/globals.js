import { GlobalStyles } from '@mui/material';

export default function Globals() {
  const inputGlobalStyles = (
    <GlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
      }}
    />
  );

  return inputGlobalStyles;
}
