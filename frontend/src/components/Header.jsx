import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Header() {
  return (
    <Container variant="header" sx={{ paddingY: 2 }}>
      <Typography variant="caption">
        American Cinematography Through the Ages
      </Typography>
    </Container>
  );
}
