import React from 'react';
import { Grid, Button } from '@mui/material';

export default function Pagination({ currentPage, setCurrentPage }) {
  return (
    <Grid item xs container direction="row" justifyContent="space-between">
      <Button
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        Get Previus Page
      </Button>
      <Button
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        Get next Page
      </Button>
    </Grid>
  );
}
