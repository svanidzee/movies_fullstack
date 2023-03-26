import React from 'react';
import { Grid, ButtonBase } from '@mui/material';
import { MovieInfo } from '../components';

export default function MovieCard({ movie, Img }) {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase sx={{ width: 428, height: 480 }}>
          <Img alt="complex" src={movie?.poster} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" alignItems="flex-start">
          <MovieInfo movie={movie} />
        </Grid>
      </Grid>
    </Grid>
  );
}
