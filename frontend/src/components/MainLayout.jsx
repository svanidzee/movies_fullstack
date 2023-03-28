import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import { Header } from './';

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
