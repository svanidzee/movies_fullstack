import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example
        </Typography>
      </Box>
    </Container>
  );
}
