import React from 'react';
import { Box, CircularProgress } from '@mui/material';

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
