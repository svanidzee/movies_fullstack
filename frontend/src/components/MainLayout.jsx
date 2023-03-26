import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, styled } from '@mui/material';

import { Header } from './';

const Div = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export default function MainLayout() {
  return (
    <Div>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Div>
  );
}
