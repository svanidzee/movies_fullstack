import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Stack, styled } from '@mui/material';

import { Header } from './';

// const Div = styled('div')({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'end',
//   // justifyContent: 'center',
//   // justifyItems: 'center',
// });

export default function MainLayout() {
  return (
    <Stack variant="layout">
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Stack>
  );
}
