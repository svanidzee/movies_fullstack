import React from 'react';
import { Grid, Typography } from '@mui/material';

export default function MovieInfo({ movie }) {
  return (
    <Grid item sm width="680px">
      <Typography variant="title" component="div" gutterBottom>
        {movie?.title}({movie?.year})
      </Typography>
      <Typography variant="body2">IMDB: {movie?.imdb?.rating}</Typography>
      <Typography variant="body2">
        Directors: {'' + movie?.directors}
      </Typography>
      <Typography variant="body2">Genres: {'' + movie?.genres}</Typography>
      <Typography variant="body2">Cast: {'' + movie?.cast}</Typography>
      <Typography variant="body2">Plot: {movie?.fullplot}</Typography>
    </Grid>
  );
}
