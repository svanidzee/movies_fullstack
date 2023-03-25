import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const QueryResult = ({ loading, error, data, children }) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (!loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};

export default QueryResult;
